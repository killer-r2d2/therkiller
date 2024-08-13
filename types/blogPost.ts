// src/types/blogPost.ts
export type BlogPost = {
  title: string;
  image: string;
  dates: {
    published: string;
  };
  tags: string;
  _path: string;
};
