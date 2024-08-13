import { SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "BBlock",
  author: "bblock",
  description:
    "At B block, we understand that entrepreneurship is both exhilarating and challenging. Since our establishment in 2019, we've been dedicated to supporting entrepreneurs in France, and beyond, navigate the complexities of business ownership with confidence and ease.",
  keywords: ["Business", "Partner", "BBlock", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    github: "https://github.com/redpangilinan/next-entree",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
};
