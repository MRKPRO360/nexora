'use client';

import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';

import { GoHeart } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { IItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { EXContentModal } from '@/app/components/utils/EXContentModal';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useAppDispatch } from '@/redux/hooks';
import { addProducts } from '@/redux/features/cartSlice';
import { toast } from 'sonner';

function ProductCard({ product }: { product: IItem }) {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleAddCart = (product: IItem) => {
    toast.success(`${product.title} added to cart :)`);
    dispatch(addProducts(product));
  };

  return (
    <div className="md:w-[265px]">
      <div className="relative bg-secondary">
        {product?.condition && (
          <span className="absolute px-3 py-1 text-xs rounded-md top-3 left-3 bg-btnBgColor text-bgLight">
            New
          </span>
        )}
        <div className="relative group">
          <div className="relative overflow-hidden">
            <Image
              width={300}
              height={300}
              className="mx-auto px-[35px] py-8 w-[180px] h-[190px] "
              src={product?.img}
              alt="gamepad"
            />
            <button
              onClick={() => handleAddCart(product)}
              className="cursor-pointer absolute bottom-0 left-0 right-0 bg-bgDark text-bgLight py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="absolute space-y-2 right-3 top-3">
          <GoHeart className="p-1 text-3xl rounded-full cursor-pointer bg-bgLight" />
          <button onClick={() => setIsModalOpen(true)}>
            <IoEyeOutline className="p-1 text-3xl rounded-full cursor-pointer bg-bgLight" />
          </button>
        </div>
      </div>
      <div className="text-base font-medium">
        <Link href={`/product/${product.id}`}>
          <p className="mt-4 mb-2">{product.title}</p>
        </Link>
        <div className="flex gap-x-4">
          <span className="text-tertiary">${product.price}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {/* Filled Stars */}
              {new Array(Math.floor(Number(product.ratings)))
                .fill(0)
                .map((_, index) => (
                  <TiStarFullOutline
                    key={`filled-${index}`}
                    className="text-xl text-lightYellow"
                  />
                ))}

              {/* Outline Stars (remaining up to 5) */}
              {new Array(5 - Math.floor(Number(product.ratings)))
                .fill(0)
                .map((_, index) => (
                  <TiStarOutline
                    key={`outline-${index}`}
                    className="text-xl text-lightYellow"
                  />
                ))}
            </div>
            <span className="text-sm font-semibold text-textGray">
              {' '}
              {`(${product.ratingQuantity})`}
            </span>
          </div>
        </div>
      </div>
      <EXContentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="xl"
      >
        {/* JSX INSIDE THE MODEL */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative w-30 md:w-full md:max-h-80 bg-gray-100 rounded-sm overflow-hidden">
            <Image
              src={product.img}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover w-full"
            />
          </div>

          <div className="space-y-6">
            {/* TITLE */}
            <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>

            {/* PRICE */}
            <div className="flex flex-wrap text-sm rounded-full text-bgLight gap-1">
              <p className="px-2 py-1 rounded-full bg-bgDark ">
                <span>Regular price:</span> ${product.regularPrice}
              </p>
              <p className="px-2 py-1 rounded-full bg-tertiary ">
                {' '}
                <span>Ecommerce price:</span> ${product.ecommercePrice}
              </p>
              <p className="px-2 py-1 rounded-full bg-btnBgColor ">
                {' '}
                <span>Special price:</span> ${product.specialPrice}
              </p>
            </div>

            {/* KEY FEATURES */}
            <div>
              <p className="font-semibold mb-2">Key Features</p>
              <ul>
                {product?.keyFeatures?.map((el: string, id: number) => (
                  <li key={id}>{el}</li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex  items-center gap-4">
              {/* INCREMENT / DECREMENT */}
              <div className="flex items-center ">
                <FaMinus
                  onClick={handleDecrement}
                  className="text-3xl cursor-pointer rounded-l-[4px] border-y-2 border-l-2 border-l-gray-400 border-y-gray-400 text-bgDark"
                />
                <span className="border-2 w-11 px-3 self-stretch  border-gray-400">
                  {count >= 1 && count <= 9 ? `0${count}` : count}
                </span>
                <FaPlus
                  onClick={handleIncrement}
                  className="text-3xl cursor-pointer rounded-r-[4px] border-y-2 border-r-2 border-r-gray-400 border-y-gray-400 text-bgDark"
                />
              </div>
              <button
                className="py-1 px-2 bg-tertiary text-bgLight rounded-[4px] hover:bg-red-700/80 cursor-pointer transition duration-300 active:translate-y-1
            "
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </EXContentModal>
    </div>
  );
}

export default ProductCard;
