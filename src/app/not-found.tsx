import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8">
        <h1 className="text-8xl font-bold mb-4 text-[#8CC63F]">404</h1>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          Page not found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#8CC63F] text-white rounded-lg hover:bg-[#7ab534] transition-colors inline-block font-medium"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
