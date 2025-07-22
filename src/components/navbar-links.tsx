"use client";
import Link from "next/link";

export interface NavbarItem {
  label: string;
  url: string;
  icon: React.ReactNode;
}

interface NavbarLinksProps {
  navbars: NavbarItem[];
  active: string;
  setActive: (label: string) => void;
}

export function NavbarLinks({ navbars, active, setActive }: NavbarLinksProps) {
  return (
    <nav className="hidden md:flex gap-2 items-center">
      {navbars.map((item) => (
        <Link
          key={item.label}
          href={item.url}
          onClick={() => setActive(item.label)}
          className={`flex items-center gap-3 px-4 py-2 rounded-md transition ${
            active === item.label ? "text-yellow-400" : "text-foreground"
          }`}
        >
          {item.icon}
          <span className="text-sm font-medium">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
