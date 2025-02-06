import { auth } from "@/auth";
import {
  generateTeamKey,
  getIdByEmail,
  getProgramIdBySlug,
} from "@/lib/api-helper";
import { prisma } from "@/lib/prismaCleint";
import { HttpStatusCode } from "@/types";
import { Prisma } from "@prisma/client";
import { z } from "zod";

export async function POST(request: Request) {
  //user ID
  const session = await auth();

  //(optional check) if session expired
  if (session?.expires && new Date(session.expires).getTime() <= Date.now()) {
    return Response.json(
      {
        success: false,
        error: "Session expired",
      },
      {
        status: HttpStatusCode.Unauthorized,
      }
    );
  }
  const userId = await getIdByEmail(session?.user?.email as string);

  const requestBodySchema = z.object({
    programSlug: z.string(),
    teamName: z.string().nullable(),
  });

  const reqBody: { programSlug: string; teamName: string | null } =
    await request.json();
  const { data: body, success } = requestBodySchema.safeParse(reqBody);

  if (!success) {
    return Response.json(
      {
        success: false,
        error: "Invalid request body or missing program slug",
      },
      {
        status: HttpStatusCode.BadRequest,
      }
    );
  }
  const programId = await getProgramIdBySlug(body.programSlug);
  if (!programId) {
    return Response.json(
      {
        success: false,
        error: "Program not found",
      },
      {
        status: HttpStatusCode.NotFound,
      }
    );
  }

  try {
    const team = await prisma.team.create({
      data: {
        teamKey: generateTeamKey(body.programSlug),
        teamName: body.teamName,
        programId: programId,
        teamLeaderId: userId,
      },
    });
    if (!team) {
      return Response.json(
        {
          success: false,
          error: "Team not created",
        },
        {
          status: HttpStatusCode.InternalServerError,
        }
      );
    }
    return Response.json(
      {
        success: true,
        message: "Team created successfully",
        data: team.teamKey,
      },
      {
        status: HttpStatusCode.OK,
      }
    );
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return Response.json(
        {
          success: false,
          error: "Team not created",
          details: error.message,
        },
        {
          status: HttpStatusCode.NotFound,
        }
      );
    }

    if (error instanceof Error) console.error("Error:", error.stack);
    else console.error("Error: Unexpected error occurred");

    return Response.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      {
        status: HttpStatusCode.InternalServerError,
      }
    );
  }
}
