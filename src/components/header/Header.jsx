


import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import CurrentDate from "./CurrentDate";
import Marquee from "../Marquee";
import { Suspense } from "react";

const Header = () => {



    return (
        <>
            <div className="relative mx-auto flex w-full max-w-7xl items-center justify-start px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo-icon.png"
                        alt="বাজার দর"
                        width={40}
                        height={40}
                    />

                    <div>
                        <h1 className="text-2xl font-bold text-red-500">
                            বাজার দর
                        </h1>


                        <p className="text-sm text-red-500">

                            <span className="text-xs text-neutral-500">
                                {/* <CurrentDate /> */}
                                <CurrentDate />
                            </span>
                        </p>
                    </div>
                </Link>
                <div className="absolute right-4 flex gap-2 " >
                    <Link href="/sign-in">
                        <button className="rounded-md border border-red-500 px-4 py-2 text-black hover:bg-red-600">
                            সাইন ইন
                        </button>
                    </Link>
                    <Link href="/sign-up">
                        <button className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                            সাইন আপ
                        </button>
                    </Link>
                </div>
            </div>

        
                <Suspense fallback={<div className="h-12" />}>
                    <Navbar />
                </Suspense>
                <Suspense fallback={<div className="h-12" />}>
                    <Marquee />
                </Suspense>
            
           


        </>
    );
};

export default Header;

