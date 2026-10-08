import ProductDetails from "@/components/Products/ProductDetails";

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
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>

        <p className="mt-2">
          Slug: {slug}
        </p>
      </div>
    );
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;