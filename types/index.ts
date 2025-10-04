// types/index.ts

export type Post = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string; // Let's assume you add an 'excerpt' field in Sanity
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
  body: any; // You can define a more specific type for Portable Text later
};