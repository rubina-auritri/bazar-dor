"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
const router = useRouter();

return ( <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-6 py-16 text-white">
{/* Background decorations */} <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" /> <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />


  <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
    {/* Illustration */}
    <div className="mb-6 flex justify-center">
      <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-2xl shadow-purple-500/20">
        <span className="text-7xl" role="img" aria-label="Lost astronaut">
          👨‍🚀
        </span>
        <span className="absolute right-1 top-3 animate-pulse text-2xl">
          ✨
        </span>
        <span className="absolute bottom-3 left-0 text-xl">⭐</span>
      </div>
    </div>

    {/* Error code */}
    <h1 className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-8xl font-black tracking-tighter text-transparent sm:text-9xl">
      404
    </h1>

    <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />

    <h2 className="mt-8 text-2xl font-bold sm:text-4xl">
      Oops! You’re lost in space.
    </h2>

    <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-300 sm:text-lg">
      The page you’re looking for doesn’t exist, has been moved,
      or may have taken a little trip to another galaxy.
    </p>

    {/* Action buttons */}
    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
      <Link
        href="/"
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 font-semibold shadow-lg shadow-indigo-600/25 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
      >
        <span>⌂</span>
        Back to Home
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>

      <button
        onClick={() => router.back()}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10"
      >
        ← Go Back
      </button>
    </div>

    {/* Footer */}
    <p className="mt-14 text-sm text-slate-400">
      Lost your way? Let’s get you back on track. 🚀
    </p>
  </div>
</main>


);
}
