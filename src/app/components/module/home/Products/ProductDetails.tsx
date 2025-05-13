import { FaMinus, FaPlus } from 'react-icons/fa';
import Image from 'next/image';
import { IItem } from '@/types';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';

import returnIcon from '@/assets/ProductDetails/return.png';
import deliveryIcon from '@/assets/ProductDetails/deliver.png';
import { GoHeart } from 'react-icons/go';

function ProductDetails({ product }: { product: IItem | undefined }) {
  return (
    <div className="mb-12 lg:mb-[74px]">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 my-10 md:my-14 lg:my-20">
        <span className="hover:underline cursor-pointer">Account</span> /{' '}
        <span className="hover:underline cursor-pointer">Gaming</span> /{' '}
        <span className="text-black font-medium">{product?.title}</span>
      </nav>

      {/* Product Flex Container */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[70px]">
        {/* Left Side - Images */}
        <div className="flex flex-col lg:flex-row gap-7 w-full lg:w-3/4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col justify-between gap-4  flex-wrap">
            {product?.images?.map((src: string, index: number) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={src}
                  width={121}
                  height={125}
                  alt={`${src}`}
                  className=" h-[125px] px-6 py-3 object-contain bg-secondary cursor-pointer hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 grid place-content-center bg-secondary">
            {product?.img && (
              <Image
                src={product?.img}
                width={446}
                height={315}
                alt="main gamepad"
                className="w-full max-w-[446px] h-[315px] object-cover rounded-lg "
              />
            )}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-2">{product?.title}</h1>

          {/* Rating */}
          <div className="flex items-center text-sm text-gray-600 my-4">
            <div className="flex items-center mr-2">
              {new Array(Math.floor(Number(product?.ratings)))
                .fill(0)
                .map((_, index) => (
                  <TiStarFullOutline
                    key={`filled-${index}`}
                    className="text-xl text-lightYellow"
                  />
                ))}

              {new Array(5 - Math.floor(Number(product?.ratings)))
                .fill(0)
                .map((_, index) => (
                  <TiStarOutline
                    key={`outline-${index}`}
                    className="text-xl text-lightYellow"
                  />
                ))}
            </div>
            <span>({product?.ratingQuantity} Reviews)</span>
            <span className="inline-block mx-4 bg-btnBgColor h-5 self-stretch w-[0.5px] "></span>
            <span className=" text-btnBgColor">In Stock</span>
          </div>

          <p className="text-2xl mt-4 mb-6 leading-6">
            ${product?.regularPrice}
          </p>
          <p className="text-sm mb-4">{product?.description}</p>

          <hr className="my-4 text-textGray/30" />

          <div className="space-y-4">
            {/* Colour Selector */}
            <div>
              <p className="font-medium mb-2">Colours:</p>
              <div className="flex gap-3">
                <span className="w-5 h-5 rounded-full border border-gray-400 bg-black cursor-pointer hover:ring-2 hover:ring-gray-300 transition-all"></span>
                <span className="w-5 h-5 rounded-full border border-gray-400 bg-red-500 cursor-pointer hover:ring-2 hover:ring-gray-300 transition-all"></span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex items-center">
              <p className="font-medium mr-6">Size:</p>
              <div className="flex flex-wrap gap-4">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 border text-sm rounded transition-colors ${
                      size === 'M'
                        ? 'bg-red-500 text-white border-red-500'
                        : 'border-textGray/30 text-primaryDark hover:bg-gray-100'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Action */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {/* Quantity Selector */}
              <div className="flex items-center border border-textGray/30 rounded">
                <button className="px-3 py-2 text-primaryDark hover:bg-gray-100 transition-colors">
                  <FaMinus />
                </button>
                <span className="px-[34px] text-[20px] py-[6px] border-x border-textGray/30">
                  2
                </span>
                <button className="px-3 py-2 text-primaryDark hover:bg-gray-100 transition-colors">
                  <FaPlus />
                </button>
              </div>

              {/* Buy Button */}
              <button className="bg-red-500 text-white px-12 py-[10px] rounded hover:bg-red-600 transition-colors">
                Buy Now
              </button>

              {/* Favorite Icon */}
              <button className="px-2 rounded py-2 text-primaryDark hover:bg-gray-100 transition-colors border border-textGray/30">
                <GoHeart className="text-xl" />
              </button>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="border border-textGray/30 rounded text-sm">
            <div className="border-b border-b-textGray/30 pt-6 pb-4 px-4">
              <div className="w-10 h-10">
                <Image
                  src={deliveryIcon}
                  alt="delivery"
                  width={40}
                  height={40}
                />
              </div>
              <span> Free Delivery </span>

              <p className="text-gray-500">
                Enter your postal code for Delivery Availability
              </p>
            </div>
            <div className="pt-6 pb-4 px-4">
              <div className="w-10 h-10">
                <Image src={returnIcon} alt="delivery" width={40} height={40} />
              </div>
              <span>Return Delivery</span>

              <p className="text-gray-500">Free 30 Days Delivery Returns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
