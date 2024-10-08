"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Blog } from "./BlogData";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-card p-4 pb-9 shadow-lg"
      >
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <p className="mb-4 mt-4 text-sm font-medium text-primary">
            Jan 01, 2024
          </p>
          <h3 className="mb-4 line-clamp-2 inline-block text-lg font-medium text-foreground duration-300 hover:text-primary dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blog/blog-details`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3 text-foreground/90">{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
