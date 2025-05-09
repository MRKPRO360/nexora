import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';

import { GoHeart } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { IItem } from '@/types';
import Image from 'next/image';

function ProductCard({ product }: { product: IItem }) {
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
              src={product.img.src}
              alt="gamepad"
            />
            <button className="absolute bottom-0 left-0 right-0 bg-bgDark text-bgLight py-2 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="absolute space-y-2 right-3 top-3">
          <GoHeart className="p-1 text-3xl rounded-full cursor-pointer bg-bgLight" />
          <IoEyeOutline className="p-1 text-3xl rounded-full cursor-pointer bg-bgLight" />
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
      {/* <IoEyeSharp /> */}
    </div>
  );
}

export default ProductCard;
