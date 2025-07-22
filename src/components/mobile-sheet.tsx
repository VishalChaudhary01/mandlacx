"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { UserDropdown } from "./user-dropdown";
import { NavbarItem } from "./navbar-links";

interface MobileSheetProps {
  navbars: NavbarItem[];
  active: string;
  setActive: (label: string) => void;
}

export function MobileSheet({ navbars, active, setActive }: MobileSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64">
        <SheetHeader>
          <SheetTitle className="text-lg font-bold">Secret Sight</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-2">
          {navbars.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              onClick={() => setActive(item.label)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                active === item.label ? "text-yellow-400" : "text-foreground"
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        <SheetFooter>
          <UserDropdown />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
