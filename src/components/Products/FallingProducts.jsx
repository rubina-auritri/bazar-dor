import ProductCard from "./ProductCard";

const FallingProducts = ({ products }) => {
  const fallingProducts = [...products]
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <section className="py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          আজ দাম কমেছে <span className="text-red-600">▼</span>
        </h2>

        <p className="mt-1 text-base-content/60">
          যেসব পণ্যের দাম আজ সবচেয়ে বেশি কমেছে
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {fallingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FallingProducts;