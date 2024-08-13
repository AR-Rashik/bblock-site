"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

const FadeIn = (props: any) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  // console.log(props);

  return (
    <motion.div
      variants={{
        hidden: {
          y: shouldReduceMotion
            ? 0
            : props?.direction === "up"
              ? 80
              : props?.direction === "down"
                ? -80
                : 0,
          opacity: 0,
          x: shouldReduceMotion
            ? 0
            : props?.direction === "left"
              ? 80
              : props?.direction === "right"
                ? -80
                : 0,
        },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{
        type: "tween",
        duration: 1.4,
        delay: props?.delay || 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
};

export const FadeInStagger = ({ faster = false, ...props }) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};

export default FadeIn;
