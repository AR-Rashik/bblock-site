import { Metadata } from "next";

import BlogData from "@/components/sections/Blog/BlogData";
import BlogItem from "@/components/sections/Blog/BlogItem";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <Container className="mb-36 ">
      <section className="lg:py-25 xl:py-30 py-20">
        <div className="mx-auto mt-16 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default BlogPage;
