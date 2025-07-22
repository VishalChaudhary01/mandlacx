"use client";
import { useState } from "react";
import Image from "next/image";

import { NavbarLinks } from "./navbar-links";
import { UserDropdown } from "./user-dropdown";
import { MobileSheet } from "./mobile-sheet";
import { navbars } from "@/lib/constants";

export default function Navbar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 border-b">
      <div>
        <Image src="/logo.svg" alt="logo" width={120} height={24} />
      </div>
      <NavbarLinks navbars={navbars} active={active} setActive={setActive} />
      <div className="hidden md:block">
        <UserDropdown />
      </div>
      <div className="md:hidden">
        <MobileSheet navbars={navbars} active={active} setActive={setActive} />
      </div>
    </div>
  );
}
