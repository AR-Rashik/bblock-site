/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { AuroraBackground } from "@/components/ui/aurora-bg";
import Container from "@/components/shared/Container";

const FunFact = () => {
  return (
    <Container id="about" className="mt-12 lg:mt-28">
      <AuroraBackground className="h-fit">
        <section className="2xl:px-0 px-4 md:px-8">
          <div className=" relative z-10 mx-auto rounded-lg py-24 xl:py-28">
            <Image
              width={335}
              height={384}
              src="/images/shape/shape-04.png"
              alt="Man"
              className="absolute -left-16 -top-28 -z-10 lg:left-0"
            />
            <Image
              width={132}
              height={132}
              src="/images/shape/shape-05.png"
              alt="Doodle"
              className="absolute bottom-0 right-0 -z-10"
            />

            <Image
              fill
              src="/images/shape/shape-dotted-light-02.svg"
              alt="Dotted"
              className="absolute left-0 top-0 -z-10 dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark-02.svg"
              alt="Dotted"
              className="absolute left-0 top-0 -z-10 hidden dark:block"
            />

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top mx-auto px-4 text-center md:w-4/5 md:px-0 lg:w-2/3 xl:w-1/2"
            >
              <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-foreground">
                Why Choose B Block ?
              </h2>
              <p className="mx-auto text-lg text-muted-foreground lg:w-11/12">
                What sets B block apart is our unwavering commitment to our
                client’s success. With a team of highly skilled and experienced
                lawyers, we offer unparalleled expertise and support in all
                aspects of business and legal matters. Whether you're a seasoned
                entrepreneur or just starting out, you can trust Bblock to be
                your partner in success.
              </p>
            </motion.div>
          </div>
        </section>
      </AuroraBackground>
    </Container>
  );
};

export default FunFact;
