"use client";

import React from "react";
import Link from "next/link";
import { links } from "@/constants";

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize font-semibold hover:text-sky-700 transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
