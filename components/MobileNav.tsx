"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-sky-700 transition hover:text-sky-900" />
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-center items-center">
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <SheetClose key={index}>
              <Link
                href={link.path}
                className={cn(
                  "text-lg font-medium capitalize hover:text-sky-700 transition-all",
                  link.path === pathname &&
                    "text-sky-700 border-b-2 border-sky-700"
                )}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}

          <Link href="/contact">
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
