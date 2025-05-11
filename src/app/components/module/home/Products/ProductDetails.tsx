import { FaHeart, FaMinus, FaPlus, FaStar } from 'react-icons/fa';

interface IProductDetails {
  productId: string;
}

import playstation1 from '@/assets/ProductDetails/playstation-1.png';
import playstation2 from '@/assets/ProductDetails/playstation-2.png';
import playstation3 from '@/assets/ProductDetails/playstation-3.png';
import playstation4 from '@/assets/ProductDetails/playstation-4.png';
import playstation5 from '@/assets/ProductDetails/playstation-5.png';
import Image from 'next/image';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProductDetails({ productId }: IProductDetails) {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <span className="hover:underline cursor-pointer">Account</span> /{' '}
        <span className="hover:underline cursor-pointer">Gaming</span> /{' '}
        <span className="text-black font-medium">Havic HV G-92 Gamepad</span>
      </nav>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side - Images */}
        <div className="grid grid-cols-5 gap-4">
          {/* Thumbnails */}
          <div className="col-span-1 flex flex-col space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <Image
                key={i}
                src={`/playstation${i}.png`}
                width={20}
                height={20}
                alt={`gamepad thumbnail ${i}`}
                className="w-full h-20 object-contain border hover:border-black cursor-pointer"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="col-span-4">
            <Image
              src={playstation5}
              alt="main gamepad"
              className="w-full object-contain rounded-lg bg-gray-100"
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">Havic HV G-92 Gamepad</h1>

          {/* Rating */}
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            (150 Reviews){' '}
            <span className="ml-4 text-green-600">| In Stock</span>
          </div>

          <p className="text-2xl font-semibold mb-4">$192.00</p>
          <p className="text-sm text-gray-500 mb-4">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal. Pressure
            sensitive.
          </p>

          <hr className="my-4" />

          {/* Colour Selector */}
          <div className="mb-4">
            <p className="font-medium mb-2">Colours:</p>
            <div className="flex gap-3">
              <span className="w-5 h-5 rounded-full border border-gray-400 bg-black"></span>
              <span className="w-5 h-5 rounded-full border border-gray-400 bg-red-500"></span>
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <p className="font-medium mb-2">Size:</p>
            <div className="flex gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border text-sm rounded ${
                    size === 'M'
                      ? 'bg-red-500 text-white'
                      : 'border-gray-300 text-gray-700'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Action */}
          <div className="flex items-center space-x-4 mb-6">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-3 py-1 text-gray-700">
                <FaMinus />
              </button>
              <span className="px-4 py-1">2</span>
              <button className="px-3 py-1 text-gray-700">
                <FaPlus />
              </button>
            </div>

            {/* Buy Button */}
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
              Buy Now
            </button>

            {/* Favorite Icon */}
            <button className="border p-2 rounded hover:bg-gray-100">
              <FaHeart />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border p-4 rounded space-y-4 text-sm">
            <div>
              <p className="font-medium">🚚 Free Delivery</p>
              <p className="text-gray-500">
                Enter your postal code for Delivery Availability
              </p>
            </div>
            <div>
              <p className="font-medium">↩️ Return Delivery</p>
              <p className="text-gray-500">Free 30 Days Delivery Returns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
