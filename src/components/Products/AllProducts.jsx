import ProductCard from "./ProductCard";

const AllProducts = ({ products }) => {
  return (
    <section id="সব-পণ্য" className="scroll-mt-24 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">সব পণ্য</h2>

        <p className="mt-1 text-base-content/60">
          বাজারের সব পণ্যের আজকের সর্বশেষ দাম একসাথে দেখুন
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;