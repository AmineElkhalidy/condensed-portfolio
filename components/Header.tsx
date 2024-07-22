import Link from "next/link";
import { Button } from "@/components/ui/button";

// Components
import Nav from "@/components/Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 xl:py-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Amine<span className="text-sky-700">.</span>
          </h1>
        </Link>

        {/* Desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="#contact">
            <Button size="lg" className="bg-sky-700 hover:bg-sky-900">
              Hire me
            </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
