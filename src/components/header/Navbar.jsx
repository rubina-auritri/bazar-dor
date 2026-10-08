import Link from "next/link";
import {CategoryLinks} from "./CategoryLinks";


const Navbar = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
    { cache: "no-store" }
  );

  const categories = await res.json();

  return (
    <nav className="flex w-full items-center justify-center gap-4 bg-red-500 py-2 text-white">
      
<CategoryLinks categories={categories} />
      
    </nav>
  );
};

export default Navbar;