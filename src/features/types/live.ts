export type Live = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  place: string;
  performancedAt: string;
  image: {
    url: string;
    height: string;
    width: string;
  };
  act: string;
  openedAt?: string;
  startedAt?: string;
  advPrice?: number;
  doorPrice?: number;
  existsDrink?: boolean;
};
