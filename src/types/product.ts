import { StaticImageData } from 'next/image';

export interface IItem {
  title: string;
  price: string;
  ratings: string;
  ratingQuantity: number;
  img: StaticImageData;
  variant?: string[];
  condition?: string;
}
