import RisingProducts from "./RisingProducts";
import FallingProducts from "./FallingProducts";
import AllProducts from "./AllProducts";

const ProductSections = ({ products }) => {
  return (
    <main className="mx-auto w-full max-w-6xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8 space-y-8 sm:space-y-10">
      <RisingProducts products={products} />

      <FallingProducts products={products} />

      <AllProducts products={products} />
    </main>
  );
};

export default ProductSections;