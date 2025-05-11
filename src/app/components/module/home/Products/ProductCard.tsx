'use client';

import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';

import { GoHeart } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { IItem } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NXContentModal } from '@/app/components/utils/NXContentModal';

function ProductCard({ product }: { product: IItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(product);

  return (
    <div className="sm:w-[270px]">
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
            <button className="absolute bottom-0 left-0 right-0 bg-bgDark text-bgLight py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="absolute space-y-2 right-3 top-3">
          <GoHeart className="p-1 text-3xl rounded-full cursor-pointer bg-bgLight" />
          {/* <Link href={`product/${product.id}`}>
            <IoEyeOutline className="p-1 text-3xl rounded-full cursor-pointer bg-bgLight" />
          </Link> */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="p-1 text-3xl rounded-full cursor-pointer bg-bgLight"
          >
            <IoEyeOutline />
          </button>
        </div>
      </div>
      <div className="text-base font-medium">
        <p className="mt-4 mb-2">{product.title}</p>
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
      <NXContentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="xl"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.img}
              alt={product.title}
              width={300}
              height={300}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {product.title}
              </h2>
              {product.condition && (
                <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  {product.condition}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) =>
                  i < Math.floor(Number(product.ratings)) ? (
                    <TiStarFullOutline
                      key={`star-${i}`}
                      className="text-2xl text-yellow-400"
                    />
                  ) : (
                    <TiStarOutline
                      key={`star-${i}`}
                      className="text-2xl text-yellow-400"
                    />
                  )
                )}
              </div>
              <span className="text-gray-600">
                ({product.ratingQuantity} reviews)
              </span>
            </div>

            <div className="text-2xl font-bold text-blue-600">
              ${product.price}
            </div>

            {/* <p className="text-gray-700">
              {product.description || 'No description available'}
            </p> */}

            <div className="flex gap-4 pt-4">
              <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </NXContentModal>
    </div>
  );
}

export default ProductCard;
