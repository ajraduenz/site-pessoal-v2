"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  to: string;
  children: string;
  className?: string;
};

export default function NavLink({ to, children, className }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = to === "/" ? pathname === "/" : pathname?.startsWith(to);

  return (
    <Link href={to} className={className + " " + isActive ? "active" : ""}>
      {children}
    </Link>
  );
}
