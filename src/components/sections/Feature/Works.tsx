/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";

import Container from "@/components/shared/Container";

export default function Works() {
  return (
    <Container id="" className="mt-12 lg:mt-16">
      <section className="relative py-10">
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
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5"
        >
          <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
            <div className="flex w-full flex-col items-center justify-start gap-3">
              <h2 className="font-manrope w-full text-center text-4xl font-bold leading-normal text-foreground">
                How It Works
              </h2>
              <p className="max-w-2xl text-center text-base font-normal leading-relaxed text-muted-foreground">
                A detailed breakdown of processes and mechanisms behind a system
                or product, simplifying complex concepts for easy understanding.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-start justify-start gap-8 md:grid-cols-3">
              <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
                <div className="relative flex w-full justify-between">
                  <h4 className="text-2xl font-semibold leading-8 text-foreground">
                    Our Mission
                  </h4>
                  <h3 className="font-manrope absolute -top-9 right-0 text-7xl font-extrabold leading-[100px] text-primary-foreground">
                    1
                  </h3>
                </div>
                <p className="text-base font-normal leading-relaxed text-muted-foreground">
                  Our mission at B block is clear, to empower entrepreneurs to
                  build and manage their businesses effectively. We believe that
                  every entrepreneur deserves access to reliable and
                  comprehensive support to realize their vision and achieve
                  success.
                </p>
              </div>
              <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
                <div className="relative flex w-full justify-between">
                  <h4 className="text-2xl font-semibold leading-8 text-foreground">
                    What We Offer
                  </h4>
                  <h3 className="font-manrope absolute -top-9 right-0 text-7xl font-extrabold leading-[100px] text-primary-foreground">
                    2
                  </h3>
                </div>
                <p className="text-base font-normal leading-relaxed text-muted-foreground">
                  With a focus on simplicity and efficiency, we offer a range of
                  services tailored to the needs of entrepreneurs at every stage
                  of their journey. From company formation and registration to
                  ongoing legal support, our team of experienced professionals
                  is here to provide guidance and assistance every step of the
                  way.
                </p>
              </div>
              <div className="inline-flex w-full flex-col items-start justify-start gap-2.5">
                <div className="relative flex w-full justify-between">
                  <h4 className="text-2xl font-semibold leading-8 text-foreground">
                    Our Impact
                  </h4>
                  <h3 className="font-manrope absolute -top-9 right-0 text-7xl font-extrabold leading-[100px] text-primary-foreground">
                    3
                  </h3>
                </div>
                <p className="text-base font-normal leading-relaxed text-muted-foreground">
                  Since our inception, we've had the privilege of working with
                  over 5,000 entrepreneurs,by helping them with the formation
                  and registration of their company . Additionally, we've
                  supported over 100,000 entrepreneurs in managing their
                  businesses effectively, ensuring compliance with legal
                  requirements and fostering growth and sustainability.we’ve
                  helped our clients to generate over 250 million euros in
                  revenue.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Container>
  );
}
