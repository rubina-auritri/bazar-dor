import RisingProducts from "./RisingProducts";
import FallingProducts from "./FallingProducts";
import AllProducts from "./AllProducts";

const ProductSections = ({ products }) => {
  return (
    <main className="container mx-auto px-4">
      <RisingProducts products={products} />

      <FallingProducts products={products} />

      <AllProducts products={products} />
    </main>
  );
};

export default ProductSections;