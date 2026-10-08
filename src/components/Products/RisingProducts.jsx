import ProductCard from "./ProductCard";
import Link from "next/link";

const RisingProducts = ({ products }) => {
    const risingProducts = [...products]
        .filter((product) => product.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <section className="py-12">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">
                    আজ দাম বেড়েছে <span className="text-green-600">▲</span>
                </h2>

                <p className="mt-1 text-base-content/60">
                    যেসব পণ্যের দাম আজ সবচেয়ে বেশি বেড়েছে
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {risingProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.slug}`}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RisingProducts;