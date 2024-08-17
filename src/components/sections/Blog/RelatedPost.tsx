import React from "react";
import Image from "next/image";
import Link from "next/link";

import BlogData from "./BlogData";

const RelatedPost = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-border bg-card p-9 shadow-lg">
        <h4 className="mb-7 text-2xl font-semibold text-foreground">
          Related Posts
        </h4>

        <div>
          {BlogData.slice(0, 3).map((post, key) => (
            <div
              className="2xl:gap-6 mb-7 flex flex-wrap gap-4 xl:flex-nowrap"
              key={key}
            >
              <div className="h-18 relative w-44 max-w-44">
                {post.mainImage ? (
                  <Image fill src={post.mainImage} alt="Blog" />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-foreground transition-all duration-300 hover:text-primary dark:hover:text-primary">
                <Link href={`/blog/blog-details`}>
                  {" "}
                  {post.title.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
