"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8 max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-6">
          We&apos;re sorry for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#8CC63F] text-white rounded-lg hover:bg-[#7ab534] transition-colors font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
