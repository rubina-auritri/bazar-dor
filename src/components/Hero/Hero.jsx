import React from "react";
import Image from "next/image";
import CurrentDate from "../header/CurrentDate";

const Hero = () => {
  return (
    <section className="bg-base-200">
      <div className=" w-full  mx-auto px-4 py-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <span className="inline-block rounded-md bg-red-100 px-3 py-1 text-sm font-semibold text-red-700 mb-4">
              <CurrentDate />
            </span>



            {/* Main Heading */}
            <h1 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
              প্রতিদিনের পণ্যের{" "}
              <span className="text-red-900">সর্বশেষ দাম</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base-content/70 md:text-lg">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* CTA Button */}
            <a
              href="#সব-পণ্য"
              className="btn mt-7 border-red-200 bg-red-100 text-red-700 hover:border-red-300 hover:bg-red-200"
            >
              সব পণ্যের দাম দেখুন
            </a>
          </div>

          {/* Right Banner / Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/bazar-hero.png"
              alt="আজকের বাজারদর"
              className="w-full max-w-xl rounded-2xl object-cover shadow-lg"
              width={500}
              height={500}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;





