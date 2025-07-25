import {
  CalendarDays,
  Github,
  LifeBuoy,
  LogOut,
  PartyPopper,
  Plus,
  Settings,
  TrophyIcon,
  User,
  Users,
} from "lucide-react";

import {
  DropdownMenu as DropdownMenuContainer,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem as DropdownItemWrapper,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tooltip } from "../Tooltip";
import Link from "next/link";
import React from "react";
import LogoutButton from "../logout/logout";
import { auth } from "@/auth";

export async function DropdownMenu() {
  const session = await auth();
  return (
    <DropdownMenuContainer>
      <Tooltip
        content="Account settings"
        className="text-[.80rem] bg-[#262728] text-white shadow-none border-none"
        delayDuration={500}
      >
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage
              src={session?.user?.name || undefined}
              alt={session?.user?.name || undefined}
            />
            <AvatarFallback>
              {session?.user?.name?.slice(0, 2).toLocaleUpperCase() || "Me"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
      </Tooltip>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem to="/profile/me">
            <User />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem to="/events/create">
            <Plus />
            <span>Create event</span>
          </DropdownMenuItem>

          <DropdownMenuItem to="/program/my-programs">
            <PartyPopper />
            <span>My Programs</span>
          </DropdownMenuItem>
          <DropdownMenuItem to="/program/my-teams">
            <Users />
            <span>My Teams</span>
          </DropdownMenuItem>
          <DropdownMenuItem to="/program/my-heads">
            <CalendarDays />
            <span>My events</span>
          </DropdownMenuItem>
          <DropdownMenuItem to="/leaderboard">
            <TrophyIcon />
            <span>Leaderboard</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem to="/">
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          to="https://github.com/SwasthK/laughing-pancake"
          target="_blank"
        >
          <Github />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem to="/">
          <LifeBuoy />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem to="/">
          <LogOut />
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuContainer>
  );
}

const DropdownMenuItem = ({
  to,
  target,
  children,
}: {
  to: string;
  target?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={to} target={target || "_self"}>
      <DropdownItemWrapper>{children}</DropdownItemWrapper>
    </Link>
  );
};
