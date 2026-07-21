export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Logo pulse */}
        <div className="w-12 h-12 rounded-xl bg-[var(--brand-primary)] flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        {/* Nav skeleton */}
        <div className="w-full max-w-7xl px-6 py-4">
          <div className="h-20 bg-[var(--brand-light)] rounded-lg animate-pulse" />
        </div>
        {/* Content skeleton */}
        <div className="w-full max-w-7xl px-6 py-16 space-y-12">
          {/* Hero skeleton */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="h-10 w-48 bg-[var(--brand-light)] rounded-lg mx-auto animate-pulse" />
            <div className="h-16 w-full bg-[var(--brand-light)] rounded-lg animate-pulse" />
            <div className="h-16 w-3/4 bg-[var(--brand-light)] rounded-lg mx-auto animate-pulse" />
            <div className="h-6 w-96 bg-[var(--brand-light)] rounded-lg mx-auto animate-pulse" />
            <div className="flex justify-center gap-4 mt-8">
              <div className="h-12 w-40 bg-[var(--brand-light)] rounded-lg animate-pulse" />
              <div className="h-12 w-40 bg-[var(--brand-light)] rounded-lg animate-pulse" />
            </div>
          </div>
          {/* Cards skeleton */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-[var(--brand-light)] rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
