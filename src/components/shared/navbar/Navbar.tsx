"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { TextAnimate } from "@/components/ui";

const menuItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  // {
  //   name: "Projects",
  //   href: "#projects",
  // },
  {
    name: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // clear event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        active ? "backdrop-blur-xl" : "bg-none py-2"
      } fixed left-0 right-0 top-0 z-40 w-full transition-all duration-200`}
      id="home"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8  xl:border-b xl:border-muted-foreground/40">
        <div className="inline-flex items-center justify-center space-x-1">
          <Image
            src={"/logo.png"}
            width={45}
            height={100}
            alt="Logo"
            unoptimized
          />
          <span className="mt-1 text-xl font-bold leading-5 tracking-wider text-primary">
            <TextAnimate text="BBLOCK" type="popIn" className="inline-flex" />
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Button
                  variant={"linkHover2"}
                  className="text-base font-semibold text-secondary-foreground after:h-[2px] hover:text-primary"
                >
                  <a href={item.href} className="">
                    {item.name}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block ">
          <div className="flex items-center justify-center gap-3">
            <ModeToggle />
            {/* <Link
              href={"/login"}
              // target="_blank"
              className={cn(buttonVariants({ size: "default" }))}
            >
              Login
            </Link> */}
            {/* <Button className="text-base">Get Started</Button> */}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 lg:hidden">
          <ModeToggle />
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-background/80 rounded-lg bg-background shadow-lg ring-1 ring-secondary ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <Image
                      src={"/logo.png"}
                      width={45}
                      height={100}
                      alt="Logo"
                      unoptimized
                    />
                    <span className="font-bold">BBLOCK DIGITAL</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-primary/30 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-muted-foreground/30"
                      >
                        <span className="ml-3 text-base font-medium text-primary">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                {/* <div className="mt-8 flex items-center justify-center gap-3">
                  <ModeToggle />
                  
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
