"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center" asChild>
        <CiMenuFries className="text-[32px] text-sky-700 transition hover:text-sky-900" />
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-center items-center">
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose key={index} asChild>
              <Link
                href={link.path}
                className={cn(
                  "text-lg font-medium capitalize hover:text-sky-700 transition-all"
                )}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}

          <Link href="#contact">
            <Button size="lg" className="bg-sky-700 hover:bg-sky-900">
              Hire me
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
