"use client";

import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "projects",
        path: "/projects",
    },
];

const MobileNav = () => {

    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-cente items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent className="flex flex-col">
                
                {/* LOGO */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            ARW<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                {/* NAVIGATION & BLOG BUTTON */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    
                    {/* NAVIGATION */}
                    {links.map((link, index) => {
                        return ( 
                            <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`} >
                                {link.name}
                            </Link>
                        );
                    })}
                    
                    {/* BLOG BUTTON */}
                    <Link href="https://arwijesuriya58.blogspot.com/" target="_blank">
                        <Button>
                            Blog
                        </Button>
                    </Link>

                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav