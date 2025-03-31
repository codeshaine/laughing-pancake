import { IconExternalLink } from "@tabler/icons-react";
import { Tooltip } from "./Tooltip";
import { Link } from "./Link";
import { EventList } from "@/types";
import Image from "next/image";

export function EventCard({
  title,
  image,
  description,
  organizedBy,
  programSlug,
}: EventList) {
  return (
    <div draggable className="flex flex-col  max-w-full ">
      <div className="h-40 w-full relative rounded-lg rounded-b-none overflow-hidden">
        <Image
          loading="lazy"
          alt={title}
          src={image}
          fill
          className="rounded-b-none object-cover object-center"
        />
        <div className="bg-[#ebe6e6] text-secondary-light px-4 py-0 rounded-md text-sm shadow-sm absolute bottom-3 right-3">
          {organizedBy}
        </div>
      </div>

      <div className="flex flex-col gap-3 overflow-hidden px-6 py-5 bg-[#F3F1F0] rounded-lg rounded-t-none">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold font-trebuchet">{title}</p>
        </div>
        {/* <EditorPreview className="md:pl-8" jsonData={JSON.parse(description)} /> */}
        <p className="text-secondary-light text-sm truncate">{description}</p>
        <div className="flex justify-between items-center text-sm">
          <Tooltip content="View event details">
            <Link href={`/poster/${programSlug}?autoregister=true`}>
              Register
            </Link>
          </Tooltip>
          <div className="w-fit p-1 rounded-md cursor-pointer">
            <Tooltip content="Register now">
              <Link
                href={`/poster/${programSlug}`}
                target="_blank"
                className="bg-transparent block px-0"
              >
                <IconExternalLink className=" h-6 w-6 text-blue-900" />
              </Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
