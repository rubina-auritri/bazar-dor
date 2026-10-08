import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-base-200">
      <div className=" w-full  mx-auto px-4 py-12 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            {/* Eyebrow / Small Text */}
            <p className="mb-3 text-sm font-semibold text-primary">
              আজকের বাজারদর
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              প্রতিদিনের পণ্যের{" "}
              <span className="text-primary">সর্বশেষ দাম</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-base-content/70 md:text-lg">
              চাল, ডাল, তেল, সবজি ও অন্যান্য প্রয়োজনীয় পণ্যের
              আজকের বাজারদর এক জায়গায় সহজেই দেখুন।
            </p>

            {/* CTA Button */}
            <a
              href="#সব-পণ্য"
              className="btn btn-primary mt-7"
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





