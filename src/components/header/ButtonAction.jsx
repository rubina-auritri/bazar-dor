"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

const ButtonAction = () => {
const { data: session, isPending } = useSession();

const [open, setOpen] = useState(false);
const [isSigningOut, setIsSigningOut] = useState(false);

const router = useRouter();
const user = session?.user;

const handleSignOut = async () => {
try {
setIsSigningOut(true);


  await signOut();

  setOpen(false);
  router.replace("/sign-in");
  router.refresh();
} catch (error) {
  console.error("Sign out failed:", error);
} finally {
  setIsSigningOut(false);
}

};

// Loading session
if (isPending) {
return <div className="text-sm">লোড হচ্ছে...</div>;
}

// Logged out: Show Sign In and Sign Up buttons
if (!user) {
return ( <div className="flex items-center gap-2"> <Link
       href="/sign-in"
       className="rounded-md border border-red-500 px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-red-50"
     >
সাইন ইন </Link>


    <Link
      href="/sign-up"
      className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
    >
      সাইন আপ
    </Link>
  </div>
);


}

// Logged in: Show profile and dropdown
const avatarLetter = (
user.name?.trim() ||
user.email?.trim() ||
"U"
)
.charAt(0)
.toUpperCase();

return ( <div className="relative">
{/* Profile Button */}
<button
type="button"
onClick={() => setOpen((previous) => !previous)}
className="flex items-center gap-2 rounded-full border border-gray-200 p-1 pr-3 transition hover:bg-gray-50"
aria-expanded={open}
aria-haspopup="true"
aria-label="প্রোফাইল মেনু"
>
{user.image ? (
<Image
src={user.image}
alt={user.name || "User"}
width={40}
height={40}
className="h-10 w-10 rounded-full object-cover"
/>
) : ( <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-lg font-bold text-white">
{avatarLetter} </div>
)}


    <span className="max-w-28 truncate text-sm font-medium text-gray-800">
      {user.name || "প্রোফাইল"}
    </span>

    <span className="text-gray-500" aria-hidden="true">
      {open ? "⌃" : "⌄"}
    </span>
  </button>

  {/* Dropdown Menu */}
  {open && (
    <>
      {/* Close menu when clicking outside */}
      <button
        type="button"
        className="fixed inset-0 z-40 cursor-default"
        aria-label="মেনু বন্ধ করুন"
        onClick={() => setOpen(false)}
      />

      <div className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
        {/* User Information */}
        <div className="border-b border-gray-100 px-3 py-3">
          <p className="truncate font-semibold text-gray-800">
            {user.name || "User"}
          </p>

          <p className="truncate text-sm text-gray-500">
            {user.email}
          </p>
        </div>

        {/* Profile Link */}
        <Link
          href="/profile"
          onClick={() => setOpen(false)}
          className="mt-1 block rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
        >
          আমার প্রোফাইল
        </Link>

        {/* Update Profile Link */}
        <Link
          href="/profile-update"
          onClick={() => setOpen(false)}
          className="mt-1 block rounded-md px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
        >
          প্রোফাইল এডিট
        </Link>

        {/* Sign Out Button */}
        <button
          type="button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="w-full rounded-md px-3 py-2 text-left text-sm text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSigningOut ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
        </button>
      </div>
    </>
  )}
</div>


);
};

export default ButtonAction;
