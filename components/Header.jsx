import Link from "next/link";
import { Button } from "./ui/button";

// ADD COMPONENTS
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            
            {/* MY NAME AS A LOGO */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    ARW<span className="text-accent">.</span>
                </h1>
            </Link>

            {/* DESKTOP NAVIGATION & BLOG BUTTON */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="https://arwijesuriya58.blogspot.com/" target="_blank">
                    <Button>
                        Blog
                    </Button>
                </Link>
            </div>

            {/* MOBIE NAVIGATION & BLOG BUTTON */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>

        </div>
    </header>
  )
}

export default Header