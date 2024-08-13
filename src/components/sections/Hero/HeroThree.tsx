/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useTheme } from "next-themes";

import { bounceAndSlide, fadeIn } from "@/lib/variants";
import { AuroraBackground } from "@/components/ui/aurora-bg";
import Container from "@/components/shared/Container";
import FadeIn from "@/components/shared/FadeIn";
import { Button, TextAnimate } from "@/components/ui";

export function HeroThree() {
  const { resolvedTheme } = useTheme();

  return (
    <AuroraBackground id="home">
      <Container className="mt-16">
        <FadeIn direction="up" delay={0.3}>
          <div className="relative flex h-5/6 w-full items-center justify-center bg-transparent">
            <div className="lg:grid lg:grid-cols-12">
              <div className="flex flex-col justify-center py-12 pr-10 md:py-16 lg:col-span-7 lg:gap-x-6 lg:py-24 xl:col-span-6">
                {/* <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-secondary p-1">
                <div className="rounded-full bg-background p-1 px-2">
                  <p className="text-sm font-medium">We&apos; hiring</p>
                </div>
                <p className="text-sm font-medium">Join our team &rarr;</p>
              </div> */}
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:mt-8 lg:text-6xl">
                  <span className="text-primary">
                    <TextAnimate
                      text="B Block -"
                      type="popIn"
                      className="inline-flex"
                    />
                  </span>{" "}
                  Your Partner in Business Success.
                </h1>
                <p className="mt-5 text-lg text-muted-foreground lg:mt-4">
                  At B block, we understand that entrepreneurship is both
                  exhilarating and challenging. Since our establishment in 2019,
                  we've been dedicated to supporting entrepreneurs in France,
                  and beyond, navigate the complexities of business ownership
                  with confidence and ease.
                </p>
                <form action="" className="mt-8 flex items-start space-x-2">
                  <div>
                    <Button
                      className="group flex justify-center gap-4 font-bold shadow-xl"
                      size={"lg"}
                    >
                      <span className="text-base">Get Started</span>
                      <MoveRight className="transition-transform duration-100 group-hover:translate-x-2" />
                    </Button>
                  </div>
                </form>
              </div>

              {/* Image section */}
              <div className="relative mt-32 hidden lg:col-span-5 lg:-mr-8 lg:flex xl:col-span-6">
                <div className="animate_right hidden w-full pl-10 lg:block">
                  <div className="2xl:-mr-8 relative">
                    <motion.div
                      variants={bounceAndSlide(2)}
                      initial="initial"
                      animate="animate"
                      whileFocus="up"
                    >
                      <Image
                        src="/images/shape/shape-01.png"
                        alt="shape"
                        width={46}
                        height={246}
                        className="absolute -left-12 top-0"
                      />
                    </motion.div>

                    <Image
                      src="/images/shape/shape-02.svg"
                      alt="shape"
                      width={36.9}
                      height={36.7}
                      className="absolute bottom-0 right-0 z-10 animate-pulse"
                    />
                    <motion.div
                      variants={bounceAndSlide(2)}
                      initial="initial"
                      animate="animate"
                      whileFocus="up"
                    >
                      <Image
                        src="/images/shape/shape-03.svg"
                        alt="shape"
                        width={21.64}
                        height={21.66}
                        className="z-1 absolute -right-7 bottom-0"
                      />
                    </motion.div>

                    <div className=" relative aspect-[700/444] w-full">
                      <Image
                        className="shadow-lg dark:hidden"
                        src="/images/hero/hero-light.svg"
                        alt="Hero"
                        fill
                      />
                      <Image
                        className="hidden shadow-lg dark:block"
                        src="/images/hero/hero-dark.svg"
                        alt="Hero"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </AuroraBackground>
  );
}
