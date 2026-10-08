
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Signin = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Email + Password Login
  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      console.log("SIGNIN ERROR:", error);

      toast.error(
        error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়। আবার চেষ্টা করুন।"
      );

      return;
    }

    console.log("SIGNIN SUCCESS:", data);

    toast.success("সফলভাবে লগইন হয়েছে!");

    // Home page
    router.push("/");
  };

  // Google Login
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);

    const { data, error } = await signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      console.log("GOOGLE SIGNIN ERROR:", error);

      toast.error(
        error.message || "Google দিয়ে লগইন করা সম্ভব হয়নি। আবার চেষ্টা করুন।"
      );

      setGoogleLoading(false);
      return;
    }

    console.log("GOOGLE SIGNIN SUCCESS:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <form onSubmit={onSubmit} className="w-full max-w-md">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-6 shadow-lg">
          {/* Title */}
          <legend className="fieldset-legend text-2xl font-bold">
            লগইন করুন
          </legend>

          <p className="text-sm text-base-content/70 mb-4">
            আপনার অ্যাকাউন্টে প্রবেশ করতে নিচের তথ্য দিন।
          </p>

          {/* Email */}
          <label className="label">
            <span className="label-text">ইমেইল</span>
          </label>

          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="আপনার ইমেইল লিখুন"
            required
          />

          {/* Password */}
          <label className="label mt-2">
            <span className="label-text">পাসওয়ার্ড</span>
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input w-full pr-12"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              aria-label={
                showPassword
                  ? "পাসওয়ার্ড লুকান"
                  : "পাসওয়ার্ড দেখুন"
              }
            >
              {showPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full mt-5"
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                লগইন হচ্ছে...
              </>
            ) : (
              "লগইন"
            )}
          </button>

          {/* Divider */}
          <div className="divider">অথবা</div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className="btn btn-outline w-full"
          >
            {googleLoading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Google দিয়ে লগইন হচ্ছে...
              </>
            ) : (
              <>
                <FaGoogle />
                Google দিয়ে লগইন করুন
              </>
            )}
          </button>

          {/* Register Link */}
          <p className="text-center mt-5 text-sm">
            আপনার কি কোনো অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/sign-up"
              className="link link-primary font-semibold"
            >
              রেজিস্টার করুন
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Signin;

