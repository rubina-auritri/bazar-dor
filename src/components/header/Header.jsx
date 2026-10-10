
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import Navbar from "./Navbar";
import CurrentDate from "./CurrentDate";
import Marquee from "../Marquee";
import ButtonAction from "./ButtonAction";

const Header = () => {
  return (
    <header className="w-full bg-white">
      {/* Header Top Section */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-3 py-3 sm:min-h-24 sm:gap-5">
          {/* Logo and Brand */}
          <Link
            href="/"
            aria-label="বাজার দর হোমপেজ"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <Image
              src="/logo-icon.png"
              alt="বাজার দর লোগো"
              width={48}
              height={48}
              priority
              className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
            />

            <div className="min-w-0">
              <h1 className="text-xl font-bold leading-tight text-red-500 sm:text-2xl md:text-3xl">
                বাজার দর
              </h1>

              <div className="mt-1 text-[10px] leading-tight text-neutral-500 sm:text-xs">
                <Suspense fallback={<span>তারিখ লোড হচ্ছে...</span>}>
                  <CurrentDate />
                </Suspense>
              </div>
            </div>
          </Link>

          {/* Header Action */}
          <div className="flex shrink-0 items-center justify-end">
            <ButtonAction />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-y border-gray-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-8">
          <Suspense
            fallback={<div className="min-h-11 animate-pulse bg-gray-50" />}
          >
            <Navbar />
          </Suspense>
        </div>
      </div>

      {/* Breaking News / Price Marquee */}
      <div className="w-full border-b border-gray-200 bg-red-700">
        <div className=" w-full  px-2 sm:px-4 lg:px-6">
          <Suspense
            fallback={<div className="h-10 animate-pulse rounded bg-red-700" />}
          >
            <Marquee />
          </Suspense>
        </div>
      </div>
    </header>
  );
};

export default Header;
