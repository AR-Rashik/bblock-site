export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};

const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: "/images/blog/blog-01.png",
    title: "Free advertising for your online business",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-02.png",
    title: "9 simple ways to improve your design skills",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-03.png",
    title: "Tips to quickly improve your coding speed.",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  {
    _id: 1,
    mainImage: "/images/blog/blog-03.png",
    title: "Free advertising for your online business",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-04.png",
    title: "9 simple ways to improve your design skills",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-01.png",
    title: "Tips to quickly improve your coding speed.",
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
];

export default BlogData;
