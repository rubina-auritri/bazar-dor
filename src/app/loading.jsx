
const Loading = () => {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center gap-5">
      {/* Animated Spinner */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary/20 border-t-primary"></div>

        <div className="h-12 w-12 animate-pulse rounded-full bg-primary/10 shadow-lg shadow-primary/20"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-lg font-bold tracking-wide text-base-content">
          Loading...
        </h2>

        <p className="mt-1 text-sm text-base-content/60">
          Please wait while we prepare everything for you.
        </p>
      </div>

      {/* Animated Dots */}
      <div className="flex gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></span>
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></span>
        <span className="h-2 w-2 animate-bounce rounded-full bg-primary"></span>
      </div>
    </div>
  );
};

export default Loading;

