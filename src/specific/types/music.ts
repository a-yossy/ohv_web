export type Music = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  type: string;
  title: string;
  releasedAt: string;
  song: string;
  price?: number;
  link: string;
  image: {
    url: string;
    height: string;
    width: string;
  };
};
