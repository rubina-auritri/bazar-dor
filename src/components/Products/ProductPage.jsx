import ProductSections from "@/components/Products/ProductSections";

const ProductPage = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
    {
      cache: "no-store",
    }
  );

  const products = await res.json();

  return (
    <>
      {/* Hero */}
      {/* Price Ticker */}

      <ProductSections products={products} />
    </>
  );
};

export default ProductPage;