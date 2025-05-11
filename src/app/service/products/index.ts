'use server';

import { products } from '@/data/products/products';
import { IItem } from '@/types';

export const getProducts = async (): Promise<IItem[]> => {
  return products as IItem[];
};

export const getProductById = async (
  id: number
): Promise<IItem | undefined> => {
  const products = await getProducts();
  return products.find((product) => product.id === id);
};
