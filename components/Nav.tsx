"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            pathname === link.path && "text-sky-700 border-b-2 border-sky-700"
          } capitalize font-medium hover:text-sky-700 transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
