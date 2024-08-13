"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Container id="contact" className="mb-36 mt-12 lg:mt-20">
      <section
        id="support"
        className="2xl:px-0 rounded-lg bg-secondary px-4 md:px-8"
      >
        <div className="relative mx-auto pt-10 lg:pt-14 xl:pt-20">
          <div className="absolute left-0 top-0 -z-10 h-2/3 w-full rounded-lg"></div>
          <div className="absolute bottom-[-255px] left-0 -z-10 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
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
              className="animate_top shadow-solid-8 w-full rounded-lg bg-background p-7 dark:border dark:border-border md:w-3/5  lg:w-3/4 xl:p-14"
            >
              <h2 className="xl:text-sectiontitle2 mb-4 text-3xl font-semibold text-foreground">
                Get in Touch
              </h2>
              <p className="mb-10 text-lg font-medium leading-6 text-muted-foreground">
                Ready to take the next step in your entrepreneurial journey?
                Contact B block today to learn more about how we can support you
                in building and managing your business. We look forward to
                helping you achieve your goals! Create
              </p>

              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="mb-7 flex flex-col gap-7 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full border-b border-border bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-foreground focus-visible:outline-none dark:border-border dark:focus:border-primary dark:focus:placeholder:text-foreground lg:w-1/2"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border-b border-border bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-foreground focus-visible:outline-none dark:border-border dark:focus:border-primary dark:focus:placeholder:text-foreground lg:w-1/2"
                  />
                </div>

                <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border-b border-border bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-foreground focus-visible:outline-none dark:border-border dark:focus:border-primary dark:focus:placeholder:text-foreground lg:w-1/2"
                  />

                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border-b border-border bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-foreground focus-visible:outline-none dark:border-border dark:focus:border-primary dark:focus:placeholder:text-foreground lg:w-1/2"
                  />
                </div>

                <div className="mb-12 flex">
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full border-b border-border bg-transparent focus:border-primary focus:placeholder:text-foreground focus-visible:outline-none dark:border-border dark:focus:border-primary dark:focus:placeholder:text-foreground"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <div className="mb-4 flex md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <span className="group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded border-gray-300 bg-gray-100 text-blue-600 peer-checked:bg-primary dark:border-gray-600 dark:bg-gray-700">
                      <svg
                        className="opacity-0 peer-checked:group-[]:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                          fill="foreground"
                        />
                      </svg>
                    </span>
                    <label
                      htmlFor="default-checkbox"
                      className="flex max-w-[425px] cursor-pointer select-none pl-5"
                    >
                      By clicking Checkbox, you agree to use our “Form” terms
                      And consent cookie usage in browser.
                    </label>
                  </div>

                  <Button
                    className="group flex justify-center gap-4 font-bold shadow-xl"
                    size={"lg"}
                  >
                    <span className="text-base">Send Message</span>
                    <MoveRight className="transition-transform duration-100 group-hover:translate-x-2" />
                  </Button>
                </div>
              </form>
            </motion.div>

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
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7 lg:w-[26%] xl:pt-14"
            >
              <h2 className="xl:text-sectiontitle2 mb-12 text-3xl font-semibold text-foreground">
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="text-metatitle3 mb-4 font-semibold text-foreground">
                  Our Loaction
                </h3>
                <p className="text-lg text-muted-foreground">
                  38 RUE MAGENTA, Pantin, France
                </p>
              </div>
              <div className="5 mb-7">
                <h3 className="text-metatitle3 mb-4 font-semibold text-foreground">
                  Email Address
                </h3>
                <p>
                  <a className="text-lg text-muted-foreground" href="#">
                    bblock1971@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="text-metatitle3 mb-4 font-semibold text-foreground">
                  Phone Number
                </h4>
                <p>
                  <a className="text-lg text-muted-foreground" href="#">
                    +33 7 58 20 44 30
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
