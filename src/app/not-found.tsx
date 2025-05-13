'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Simple 404 number */}
        <div className="text-8xl font-bold text-gray-300">404</div>

        {/* Main message */}
        <h1 className="text-3xl font-medium text-gray-800">Page Not Found</h1>

        {/* Description */}
        <p className="text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Home button */}
        <Link
          href="/"
          className="inline-block mt-6 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
