import ProductDetails from "@/components/Products/ProductDetails";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    
       notFound();
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;