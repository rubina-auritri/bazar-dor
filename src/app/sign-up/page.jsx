
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signUp, signIn } from "@/lib/auth-client";

const Signup = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Basic validation
    if (!name || !email || !password) {
      toast.error("দয়া করে সব তথ্য পূরণ করুন।");
      return;
    }

    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    setLoading(true);

    try {
      const { data: resData, error } = await signUp.email({
        name,
        email,
        password,
      });

      if (error) {
        console.log("SIGNUP ERROR:", error);

        toast.error(
          error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।"
        );

        return;
      }

      console.log("SIGNUP SUCCESS:", resData);
      console.log("User created:", resData?.user);

      toast.success("রেজিস্ট্রেশন সফল হয়েছে! এখন লগইন করুন।");

      // Registration successful → Login page
      setTimeout(() => {
        router.push("/sign-in");
      }, 1000);
    } catch (error) {
      console.error("SIGNUP ERROR:", error);

      toast.error("কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  // Google / GitHub login
  const handleSocialLogin = async (provider) => {
    setSocialLoading(provider);

    try {
      const { error } = await signIn.social({
        provider,
        callbackURL: "/",
      });

      if (error) {
        toast.error(
          error.message || "সোশ্যাল লগইন ব্যর্থ হয়েছে।"
        );

        setSocialLoading("");
      }
    } catch (error) {
      console.error("SOCIAL LOGIN ERROR:", error);

      toast.error("সোশ্যাল লগইনে সমস্যা হয়েছে।");

      setSocialLoading("");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">

      <form onSubmit={onSubmit}>
        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full sm:w-96 border p-6 shadow-lg">

          {/* Title */}
          <legend className="fieldset-legend text-2xl font-bold">
            রেজিস্ট্রেশন করুন
          </legend>

          <p className="text-sm text-base-content/60 mb-3">
            আপনার অ্যাকাউন্ট তৈরি করতে নিচের তথ্যগুলো দিন।
          </p>

          {/* Name */}
          <label className="label">
            নাম
          </label>

          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="আপনার নাম লিখুন"
            disabled={loading}
          />

          {/* Email */}
          <label className="label mt-2">
            ইমেইল
          </label>

          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="আপনার ইমেইল লিখুন"
            disabled={loading}
          />

          {/* Password */}
          <label className="label mt-2">
            পাসওয়ার্ড
          </label>

          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="কমপক্ষে ৮ অক্ষর"
            disabled={loading}
          />

          {/* Register button */}
          <button
            type="submit"
            className="btn btn-neutral w-full mt-5"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                অ্যাকাউন্ট তৈরি হচ্ছে...
              </>
            ) : (
              "রেজিস্টার করুন"
            )}
          </button>

          {/* Divider */}
          <div className="divider">অথবা</div>

          {/* Google */}
          <button
            type="button"
            className="btn btn-outline w-full"
            disabled={socialLoading !== ""}
            onClick={() => handleSocialLogin("google")}
          >
            {socialLoading === "google" ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <FaGoogle />
            )}

            Google দিয়ে চালিয়ে যান
          </button>

          {/* GitHub */}
          <button
            type="button"
            className="btn btn-outline w-full mt-2"
            disabled={socialLoading !== ""}
            onClick={() => handleSocialLogin("github")}
          >
            {socialLoading === "github" ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <FaGithub />
            )}

            GitHub দিয়ে চালিয়ে যান
          </button>

          {/* Login link */}
          <p className="text-center text-sm mt-5">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}

            <Link
              href="/sign-in"
              className="link link-primary font-semibold"
            >
              লগইন করুন
            </Link>
          </p>

        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
