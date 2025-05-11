// import { StaticImageData } from 'next/image';

export interface IItem {
  id: number;
  title: string;
  price: string;
  regularPrice?: string;
  specialPrice?: string;
  ecommercePrice?: string;
  ratings: string;
  ratingQuantity: number;
  condition?: string;
  img: string;
  variant?: string[];
  images?: string[];
  keyFeatures?: string[];
  description?: string;
}
