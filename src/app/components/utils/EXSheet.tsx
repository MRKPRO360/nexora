'use client';

import {
  decrementOrderQuantity,
  ICartProducts,
  incrementOrderQuantity,
  removeProducts,
  selectCartProducts,
} from '@/redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaMinus, FaPlus, FaTimes, FaTrash } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

const ExSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const products = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newTotal = products.reduce((sum, product) => {
      return sum + parseFloat(product.price) * product.orderQuantity;
    }, 0);
    setTotal(newTotal);
  }, [products]);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.getElementById('mobile-drawer');
      const button = document.getElementById('mobile-menu-button');

      if (
        drawer &&
        button &&
        !drawer.contains(event.target as Node) &&
        !button.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Close on escape key press
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleIncrementQuantity = (product: ICartProducts) => {
    dispatch(incrementOrderQuantity(product));
  };
  const handleDecrementQuantity = (product: ICartProducts) => {
    dispatch(decrementOrderQuantity(product));
  };

  const handleRemove = (id: number) => {
    dispatch(removeProducts(id));
  };

  return (
    <div className="grid place-content-center">
      {/* Menu Button with cart count */}
      <button
        id="mobile-menu-button"
        onClick={() => setIsOpen(true)}
        className="relative hover:text-tertiary cursor-pointer"
        aria-label="Cart"
      >
        <IoCartOutline className="text-2xl" />
        {products.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {products.length}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-primary/10 z-40" />}

      {/* Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? '-translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b-2 border-b-textGray/10">
          <h2 className="text-xl font-bold p-3">
            Your Cart ({products.length})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-tertiary cursor-pointer"
            aria-label="Close cart"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="h-[calc(100%-180px)] overflow-y-auto ">
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 p-3">
              <IoCartOutline className="h-16 w-16 mb-4" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 py-4 border-b-2 shadow-md shadow-tertiary/10 border-b-textGray/10 last:border-b-0"
              >
                <div className="relative w-20 h-20 flex-shrink-0 p-3">
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium line-clamp-2">{product.title}</h3>
                  <p className="text-lg font-bold">${product.price}</p>
                  {product.regularPrice &&
                    parseFloat(product.price) <
                      parseFloat(product.regularPrice) && (
                      <p className="text-sm text-gray-500 line-through">
                        ${product.regularPrice}
                      </p>
                    )}

                  <div className="flex items-center justify-between mt-2">
                    {/* Quantity Controls */}

                    <div className="flex items-center border border-textGray/30 rounded">
                      <button
                        onClick={() => handleDecrementQuantity(product)}
                        className="px-3 py-2 text-primaryDark hover:bg-gray-100 transition-colors"
                      >
                        <FaMinus />
                      </button>
                      <span className="px-[34px] text-[20px] py-[.5px] border-x border-textGray/30">
                        <span className=" w-11 px-3 self-stretch  ">
                          {product.orderQuantity >= 1 &&
                          product.orderQuantity <= 9
                            ? `0${product.orderQuantity}`
                            : product.orderQuantity}
                        </span>
                      </span>
                      <button
                        onClick={() => handleIncrementQuantity(product)}
                        className="px-3 py-2 text-primaryDark hover:bg-gray-100 transition-colors"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    {/* <div className="flex items-center">
                      <FaMinus
                        onClick={() => handleDecrementQuantity(product)}
                        className="text-3xl  cursor-pointer rounded-l-[4px] border-y-2 border-l-2 border-l-gray-400 border-y-gray-400 text-bgDark"
                      />
                      <span className="border-2 w-11 px-3 self-stretch  border-gray-400">
                        {product.orderQuantity >= 1 &&
                        product.orderQuantity <= 9
                          ? `0${product.orderQuantity}`
                          : product.orderQuantity}
                      </span>
                      <FaPlus
                        onClick={() => handleIncrementQuantity(product)}
                        className="text-3xl  cursor-pointer rounded-r-[4px] border-y-2 border-r-2 border-r-gray-400 border-y-gray-400 text-bgDark"
                      />
                    </div> */}

                    {/* Remove button */}
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="cursor-pointer text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with total and checkout */}
        {products.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t-2 border-t-textGray/10  bg-white">
            <div className="flex justify-between mb-4">
              <span className="font-bold">Subtotal:</span>
              <span className="font-bold">${total.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-md font-medium transition-colors"
              onClick={() => {
                // Add your checkout logic here
                console.log('Proceed to checkout');
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExSheet;
