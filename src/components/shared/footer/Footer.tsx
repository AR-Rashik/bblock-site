import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import Container from "../Container";

export function Footer() {
  return (
    <Container className="mt-20">
      <footer className="">
        <div className=" flex flex-col items-start space-x-8 md:flex-row">
          <div className="w-full px-4 md:w-1/2 lg:px-0">
            <h1 className="max-w-sm text-4xl font-bold text-foreground">
              Subscribe to our Newsletter
            </h1>
            <form
              action=""
              className="mt-4 inline-flex w-full items-center md:w-3/4"
            >
              <input
                className="focus:ring-/30 flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <Button className="ml-4 rounded-full px-3 py-3" size={"icon"}>
                <ChevronRight className="size-4" />
              </Button>
            </form>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="mb-8 lg:mb-0">
                <p className="mb-6 text-lg font-semibold text-foreground">
                  Company
                </p>
                <ul className="flex flex-col space-y-4 text-[14px] font-medium text-muted-foreground">
                  <li className=" cursor-pointer hover:text-primary">
                    About us
                  </li>
                  <li className=" cursor-pointer hover:text-primary">
                    Company History
                  </li>
                  <li className=" cursor-pointer hover:text-primary">
                    Our Team
                  </li>
                  <li className=" cursor-pointer hover:text-primary">
                    Our Vision
                  </li>
                  <li className=" cursor-pointer hover:text-primary">
                    Press Release
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="mx-6 my-4" />
        <div className="mx-auto max-w-6xl items-center justify-between px-4 pb-8 pt-4 md:flex lg:px-0">
          <div className="inline-flex items-center">
            <Image
              src={"/logo.png"}
              width={50}
              height={60}
              alt="Logo"
              unoptimized
            />
            <span className="ml-2 text-xl font-bold text-primary">BBlock</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm font-medium text-muted-foreground">
              © 2024 BBlock. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Container>
  );
}
