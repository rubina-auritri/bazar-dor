const Loading = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title skeleton */}
      <div className="skeleton mb-6 h-8 w-48" />

      {/* Products skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-base-200 bg-white p-4 shadow-sm"
          >
            <div className="skeleton mx-auto h-20 w-20 rounded-lg" />

            <div className="mt-4 space-y-3">
              <div className="skeleton h-5 w-3/4" />
              <div className="skeleton h-4 w-1/2" />
              <div className="skeleton h-8 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;