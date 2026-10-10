import Link from "next/link";
import CategoryProducts from "@/components/Products/CategoryProducts";
import { notFound } from "next/navigation";

const API_URL =
  "https://api.abcz.workers.dev/api/bazardor/products";

const CategoryPage = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(`${API_URL}?category=${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <CategoryNotFound />;
  }

  const products = await res.json();

  if (!products || products.length === 0) {
     
       
          notFound();
     
   
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <CategoryProducts products={products} />
    </main>
  );
};

const CategoryNotFound = () => {
  return (
    <main className="container mx-auto px-4 py-20 text-center">
      <div className="mx-auto max-w-md">
        <div className="text-6xl">🔎</div>

        <h1 className="mt-4 text-2xl font-bold">
          কোনো পণ্য পাওয়া যায়নি
        </h1>

        <p className="mt-2 text-gray-500">
          এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।
        </p>

        <Link
          href="/"
          className="btn btn-primary mt-6"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default CategoryPage;