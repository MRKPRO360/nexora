'use client';
import ProductCard from './ProductCard';
import { IItem } from '@/types';
import SectionTitle from '@/app/components/utils/SectionTitle';
import Cta from '@/app/components/utils/Cta';
import { useEffect, useState } from 'react';
import { getProducts } from '@/app/service/products';
import ProductCardSkeleton from './ProductCardSkeleton';

function Products() {
  const [products, setProducts] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // TO SHOW SKELETON UI
        await new Promise((resolve) => setTimeout(resolve, 3500));
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="mt-[60px] grid grid-cols-1  gap-3 sm:grid-cols-3 xl:grid-cols-4  md:gap-x-[30px] md:gap-y-15">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el, id) => (
          <ProductCardSkeleton key={el} />
        ))}
      </div>
    );

  return (
    <div className="mb-[67px] mt-[60px]">
      <div className="text-center flex flex-col items-center justify-center  gap-5">
        <SectionTitle title={"Our Prouct's"} />
        <h1 className="text-4xl font-semibold">Explore Our Products</h1>
      </div>

      <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-3  xl:grid-cols-4 gap-x-5 md:gap-x-[30px] gap-y-5 md:gap-y-15">
        {products.map((product: IItem, key: number) => (
          <ProductCard key={key} product={product} />
        ))}
      </div>

      <div className="text-center mt-[60px]">
        <Cta text="View All Products" />
      </div>
    </div>
  );
}

export default Products;
