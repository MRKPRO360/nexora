'use client';

function ProductCardSkeleton() {
  return (
    <div className="md:w-[265px] animate-pulse">
      <div className="relative bg-secondary rounded-md overflow-hidden">
        {/* Image placeholder */}
        <div className="px-[35px] py-8 flex justify-center">
          <div className="w-[180px] h-[190px] bg-gray-300 rounded" />
        </div>
      </div>

      {/* Text placeholders */}
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4" /> {/* Title */}
        <div className="h-4 bg-gray-300 rounded w-1/3" /> {/* Price */}
        <div className="h-4 bg-gray-300 rounded w-1/2" /> {/* Rating */}
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
