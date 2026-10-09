"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
const { data: session, isPending } = authClient.useSession();
const router = useRouter();

const [name, setName] = useState("");
const [image, setImage] = useState("");
const [message, setMessage] = useState("");

if (isPending) return <p>Loading...</p>;

if (!session) {
return <Link href="/sign-in">Please sign in</Link>;
}

const handleUpdateProfile = async (e) => {
e.preventDefault();
setMessage("");

const result = await authClient.updateUser({
  name,
  image: image || undefined,
});

if (result.error) {
  setMessage(result.error.message || "Profile update failed");
  return;
}

setMessage("Profile updated successfully!");
router.push("/profile");
router.refresh();


};

return ( <div className="mx-auto mt-10 max-w-md p-6"> <h1 className="mb-5 text-2xl font-bold">প্রোফাইল আপডেট</h1>


  <form onSubmit={handleUpdateProfile}>
    <fieldset className="fieldset">
      <label className="label">নাম</label>
      <input
        type="text"
        className="input w-full"
        placeholder="আপনার নাম"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      

      {message && <p className="mt-3">{message}</p>}

      <button type="submit" className="btn btn-primary mt-4">
        Update Profile
      </button>

      <Link href="/profile" className="btn btn-outline mt-2">
        Cancel
      </Link>
    </fieldset>
  </form>
</div>


);
}
