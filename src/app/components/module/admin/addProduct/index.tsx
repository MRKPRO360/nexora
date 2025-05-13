'use client';

import Cta from '@/app/components/utils/Cta';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { HiOutlineCloudUpload } from 'react-icons/hi';

type FormValues = {
  name: string;
  description: string;
  price: number;
  stock: number;
  discount: number;
  discountType: string;
  category: string;
  gender: 'Men' | 'Woman' | 'Unisex';
  sizes: string[];
  coverImage: FileList;
  additionalImages: FileList;
};

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const discountTypes = [
  'Chinese New Year Discount',
  'Holiday Sale',
  'Clearance',
];

function AddProduct() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [additionalPreviews, setAdditionalPreviews] = useState<string[]>([]);
  const [selectedSizes, setSlectedSizes] = useState<string[]>([]);

  // syncing size value
  useEffect(() => {
    setValue('sizes', selectedSizes);
  }, [selectedSizes, setValue]);

  useEffect(() => {
    register('coverImage', { required: true });
    register('additionalImages', { required: true });
  }, [register]);

  const handleSizeClick = (size: string) => {
    setSlectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { coverImage, additionalImages, ...rest } = data;

    const modifiedData = {
      ...rest,
      image: coverImage,
      images: additionalImages,
    };

    console.log(modifiedData);
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
      setValue('coverImage', e.target.files as FileList, {
        shouldValidate: true,
      });
    }
  };

  const handleAdditionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length >= 4) {
      const previews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setAdditionalPreviews(previews);
    } else {
      setAdditionalPreviews([]);
    }
    setValue('additionalImages', files as FileList, { shouldValidate: true });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" px-2 2xl:px-0 py-2 space-y-8 bg-softLight rounded-lg shadow-sm mb-12 lg:mb-[74px]"
    >
      <h1 className="text-3xl font-bold text-gray-800">Add New Product</h1>

      {/* General Info */}
      <div className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b border-b-textGray/30 pb-2">
                Product Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name
                </label>
                <input
                  {...register('name', { required: true })}
                  className="w-full px-4 py-2 bg-textGray/5 border border-gray-300 rounded-lg "
                  placeholder="Puffer Jacket With Pocket Detail"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                    <span className="font-medium">Error:</span> Product name is
                    required
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  {...register('description', { required: true })}
                  rows={4}
                  className="w-full px-4 py-2 bg-textGray/5 border border-gray-300 rounded-lg"
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                    <span className="font-medium">Error:</span> Description is
                    required
                  </p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Available Sizes
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        type="button" // Important: prevents form submission
                        onClick={() => handleSizeClick(size)}
                        className={`px-3 py-1 border text-sm rounded transition-colors ${
                          selectedSizes.includes(size)
                            ? 'bg-tertiary text-white border-tertiary'
                            : 'border-textGray/30 text-primaryDark hover:bg-gray-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <div className="flex gap-6">
                    {['Men', 'Woman', 'Unisex'].map((gender) => (
                      <label key={gender} className="inline-flex items-center">
                        <input
                          type="radio"
                          value={gender}
                          {...register('gender', { required: true })}
                          className="form-radio h-5 w-5 "
                        />
                        <span className="ml-2 text-gray-700">{gender}</span>
                      </label>
                    ))}
                  </div>
                  {errors.gender && (
                    <p className="mt-1 text-sm text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                      <span className="font-medium">Error:</span> Gender is
                      required
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-primaryDark border-b border-b-textGray/30 pb-2">
              Product Images
            </h2>

            <div>
              <label className="block text-sm font-medium text-primaryDark  mb-2">
                Cover Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="coverImageID"
                  //   {...register('coverImage', { required: true })}
                  onChange={handleCoverChange}
                />
                <label
                  htmlFor="coverImageID"
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  {coverPreview ? (
                    <Image
                      height={256}
                      width={100}
                      src={coverPreview}
                      alt="Cover Preview"
                      className="mt-2 w-full h-64 object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <HiOutlineCloudUpload className="w-12 h-12 text-gray-400" />

                      <p className="mt-2 text-sm text-gray-600">
                        <span className="font-semibold">Click to upload</span>{' '}
                        or drag and drop
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </>
                  )}
                </label>
              </div>
              {errors.coverImage && (
                <p className="mt-1 text-sm text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                  <span className="font-medium">Error:</span> Cover image is
                  required
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Images (Min: 4)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  id="additionalImagesID"
                  onChange={handleAdditionalChange}
                />
                <label
                  htmlFor="additionalImagesID"
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  {additionalPreviews.length > 0 ? (
                    <div className="grid grid-cols-4 gap-2 mt-2 w-full">
                      {additionalPreviews.map((src, idx) => (
                        <Image
                          height={256}
                          width={100}
                          key={idx}
                          src={src}
                          alt={`Preview ${idx}`}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  ) : (
                    <>
                      <HiOutlineCloudUpload className="w-12 h-12 text-gray-400" />

                      <p className="mt-2 text-sm text-gray-600">
                        <span className="font-semibold">Click to upload</span>{' '}
                        or drag and drop
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Upload at least 4 images (PNG, JPG, GIF up to 10MB each)
                      </p>
                    </>
                  )}
                </label>
              </div>
              {errors.additionalImages && (
                <p className="mt-1 text-sm text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                  <span className="font-medium">Error:</span> Upload at least 4
                  images
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Pricing & Stock */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-b-textGray/30 pb-2">
            Pricing & Inventory
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Base Price ($)
              </label>
              <div className="relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  {...register('price', { required: true })}
                  className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-tertiary focus:border-terring-tertiary"
                  placeholder="0.00"
                />
              </div>
              {errors.price && (
                <p className="mt-1 text-sm text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                  <span className="font-medium">Error:</span> Price is required
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                {...register('stock', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-tertiary focus:border-terring-tertiary"
              />
              {errors.stock && (
                <p className="mt-1 text-sm text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                  <span className="font-medium">Error:</span> Stock is required
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Discount (%)
              </label>
              <div className="relative rounded-md">
                <input
                  type="number"
                  {...register('discount')}
                  className="block w-full px-4 py-2 pr-12  border border-gray-300 rounded-lg focus:ring-tertiary focus:border-terring-tertiary"
                  placeholder="0"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category & Discount */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b border-b-textGray/30 pb-2">
            Categorization
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Category
              </label>
              <input
                {...register('category', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-tertiary focus:border-terring-tertiary"
                placeholder="e.g. Jacket"
              />
              {errors.category && (
                <p className="mt-1 text-sm text-red-600 bg-red-50 px-3 py-1 rounded-lg">
                  <span className="font-medium">Error:</span> Category is
                  required
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Discount Type
              </label>
              <select
                {...register('discountType')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-tertiary focus:border-terring-tertiary"
              >
                <option value="">Select discount type (optional)</option>
                {discountTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 pt-6">
        <button
          type="button"
          className="py-3 px-6 md:px-12 bg-bgLight border-gray-300  rounded-[4px] border cursor-pointer transition duration-300 active:translate-y-1"
        >
          Save Draft
        </button>

        <div className="text-center">
          <Cta size="md" type="submit" text="Add Product" />
        </div>
      </div>
    </form>
  );
}

export default AddProduct;
