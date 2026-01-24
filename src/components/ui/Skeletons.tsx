import Skeleton from "./Skeleton";

export function CardSkeleton() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <Skeleton variant="rectangular" height={200} className="mb-4" />
      <Skeleton variant="text" width="80%" className="mb-2" />
      <Skeleton variant="text" width="60%" className="mb-4" />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width={80} height={32} />
        <Skeleton variant="rectangular" width={80} height={32} />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-4xl px-8">
        <Skeleton variant="text" height={80} className="mb-6" />
        <Skeleton variant="text" height={40} width="70%" className="mb-8" />
        <Skeleton variant="rectangular" width={200} height={50} />
      </div>
    </div>
  );
}

export function ImageSkeleton({
  aspectRatio = "16/9",
}: {
  aspectRatio?: string;
}) {
  return <div className="w-full skeleton rounded-lg" style={{ aspectRatio }} />;
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? "60%" : "100%"}
        />
      ))}
    </div>
  );
}

export function NavbarSkeleton() {
  return (
    <div className="w-full h-20 bg-white border-b border-gray-200 px-8">
      <div className="flex items-center justify-between h-full">
        <Skeleton variant="rectangular" width={150} height={40} />
        <div className="flex gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} variant="text" width={80} height={20} />
          ))}
        </div>
        <Skeleton variant="rectangular" width={100} height={40} />
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="text-center">
          <Skeleton
            variant="text"
            height={60}
            className="mb-2 mx-auto"
            width={120}
          />
          <Skeleton variant="text" width="80%" className="mx-auto" />
        </div>
      ))}
    </div>
  );
}

export function ContactFormSkeleton() {
  return (
    <div className="max-w-2xl mx-auto p-8 space-y-6">
      <Skeleton variant="text" height={40} width="60%" className="mb-8" />
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <Skeleton variant="text" width={100} className="mb-2" />
            <Skeleton variant="rectangular" height={48} />
          </div>
        ))}
      </div>
      <Skeleton variant="rectangular" width={150} height={48} />
    </div>
  );
}
