/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/shared/Container";
import { TextAnimate } from "@/components/ui";

const Feature = () => {
  return (
    <Container id="about" className="mt-12 lg:mt-20">
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-24 xl:pb-32">
        <div className="mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-foreground ">
                Support for{" "}
                <TextAnimate
                  text="Delivery Workers"
                  type="popIn"
                  className="inline-flex"
                />
              </h2>
              <p className="text-lg text-muted-foreground">
                At B block, we have a special place in our hearts for delivery
                workers - a large portion of our clients are delivery partners
                of platforms like Uber Eats, Deliveroo, and Stuart. From the
                beginning of our journey, we have been committed to supporting
                these self-employed individuals who play a crucial role in our
                communities. We provide tailored services and assistance to help
                them navigate the unique challenges and opportunities of the gig
                economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="max-w-c-1235 2xl:px-0 mx-auto overflow-hidden px-4 md:px-8">
          <div className="flex items-center gap-8 lg:gap-32">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-foreground ">
                Support for{" "}
                <TextAnimate
                  text="Expats"
                  type="popIn"
                  className="inline-flex"
                />
              </h2>
              <p className="text-lg text-muted-foreground">
                In addition to our work with local entrepreneurs, we're proud to
                have assisted thousands of expats in navigating the complexities
                of residency permits and legal requirements. Our dedicated team
                is committed to providing expats with the support they need to
                thrive in their new business ventures.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </Container>
  );
};

export default Feature;
