export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-lg px-4">
        <div className="h-8 bg-dark-surface rounded w-3/4 mx-auto"></div>
        <div className="space-y-3">
          <div className="h-4 bg-dark-surface rounded"></div>
          <div className="h-4 bg-dark-surface rounded w-5/6"></div>
          <div className="h-4 bg-dark-surface rounded w-4/6"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="h-24 bg-dark-surface rounded"></div>
          <div className="h-24 bg-dark-surface rounded"></div>
        </div>
      </div>
    </div>
  );
}
