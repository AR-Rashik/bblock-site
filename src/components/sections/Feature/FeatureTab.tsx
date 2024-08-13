"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/shared/Container";

import featuresTabData from "./featureTabData";
import FeaturesTabItem from "./FeatureTabItem";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      <Container id="about" className="mt-12 lg:mt-20">
        <section className="pt-18.5 lg:pb-22.5 relative pb-20">
          <div className="2xl:px-0 relative mx-auto">
            <div className="-z-1 absolute -top-16 mx-auto h-[350px] w-[90%]">
              <Image
                fill
                className="dark:hidden"
                src="/images/shape/shape-dotted-light.svg"
                alt="Dotted Shape"
              />
              <Image
                fill
                className="hidden dark:block"
                src="/images/shape/shape-dotted-dark.svg"
                alt="Dotted Shape"
              />
            </div>

            {/* <!-- Tab Menues Start --> */}
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
              className="animate_top mb-16 flex flex-wrap justify-center rounded-lg border border-border bg-background shadow-lg md:flex-nowrap md:items-center lg:gap-8 xl:mb-20 xl:gap-12"
            >
              <div
                onClick={() => setCurrentTab("tabOne")}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-border px-6 py-2 last:border-0 md:w-auto md:border-0 xl:px-14 xl:py-5 ${
                  currentTab === "tabOne"
                    ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                    : ""
                }`}
              >
                <div className="h-gap-12 w-gap-12 flex size-10 items-center justify-center rounded-full border border-border bg-secondary">
                  <p className="text-metatitle3 font-medium text-foreground">
                    01
                  </p>
                </div>
                <div className="md:w-3/5 lg:w-auto">
                  <button className="xl:text-regular text-sm font-medium text-foreground">
                    Our Mission
                  </button>
                </div>
              </div>
              <div
                onClick={() => setCurrentTab("tabTwo")}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-border px-6 py-2 last:border-0 md:w-auto md:border-0 xl:px-14 xl:py-5 ${
                  currentTab === "tabTwo"
                    ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                    : ""
                }`}
              >
                <div className="h-gap-12 w-gap-12 flex size-10 items-center justify-center rounded-full border border-border bg-secondary">
                  <p className="text-metatitle3 font-medium text-foreground">
                    02
                  </p>
                </div>
                <div className="md:w-3/5 lg:w-auto">
                  <button className="xl:text-regular text-sm font-medium text-foreground">
                    What We Offer
                  </button>
                </div>
              </div>
              <div
                onClick={() => setCurrentTab("tabThree")}
                className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-border px-6 py-2 last:border-0 md:w-auto md:border-0 xl:px-14 xl:py-5 ${
                  currentTab === "tabThree"
                    ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                    : ""
                }`}
              >
                <div className="h-gap-12 w-gap-12 flex size-10 items-center justify-center rounded-full border border-border bg-secondary">
                  <p className="text-metatitle3 font-medium text-foreground">
                    03
                  </p>
                </div>
                <div className="md:w-3/5 lg:w-auto">
                  <button className="xl:text-regular text-sm font-medium text-foreground">
                    Our Impact
                  </button>
                </div>
              </div>
            </motion.div>
            {/* <!-- Tab Menues End --> */}

            {/* <!-- Tab Content Start --> */}
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
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top mx-auto"
            >
              {featuresTabData.map((feature, key) => (
                <div
                  className={feature.id === currentTab ? "block" : "hidden"}
                  key={key}
                >
                  <FeaturesTabItem featureTab={feature} />
                </div>
              ))}
            </motion.div>
            {/* <!-- Tab Content End --> */}
          </div>
        </section>
      </Container>
    </>
  );
};

export default FeaturesTab;
