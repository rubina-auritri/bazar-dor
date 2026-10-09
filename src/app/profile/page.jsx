
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/sign-in");
  }

  const user = session.user;

  return (
    <main className="mx-auto max-w-2xl p-6">
      <div className="rounded-2xl border border-base-300
        bg-base-100 p-6 shadow-sm">

        <h1 className="mb-6 text-2xl font-bold">
          My Profile
        </h1>

        <div className="flex items-center gap-4">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="h-20 w-20 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-20 w-20 items-center
              justify-center rounded-full bg-red-600
              text-3xl font-bold text-white">
              {user.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
          )}

          <div>
            <h2 className="text-xl font-semibold">
              {user.name || "User"}
            </h2>
            <p className="opacity-70">{user.email}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <p>
            <strong>Name:</strong> {user.name || "Not provided"}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Email verified:</strong>{" "}
            {user.emailVerified ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </main>
  );
}