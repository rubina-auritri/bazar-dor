import Link from "next/link";

const bengaliDigits = (value) =>
    String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);

const getUnitText = (unit) => {
    const units = {
        kg: "কেজি",
        litre: "লিটার",
        dozen: "ডজন",
        piece: "পিস",
    };

    return units[unit] || unit;
};

const ProductCard = ({ product }) => {
   const { dir, pct } = product.change || {};

    const badge =
        dir === "up"
            ? {
                text: `▲ ${bengaliDigits(pct)}%`,
                className: "bg-green-100 text-green-700",
            }
            : dir === "down"
                ? {
                    text: `▼ ${bengaliDigits(Math.abs(pct))}%`,
                    className: "bg-red-100 text-red-700",
                }
                : {
                    text: "— ০%",
                    className: "bg-gray-100 text-gray-600",
                };

    return (
        <Link
            href={`/products/${product.slug}`}
            className="group block rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
            {/* Image / Emoji */}
            <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-base-200">
                {product.image ? (
                    <span className="text-6xl">
                        {product.image}
                    </span>
                ) : (
                    <span className="text-6xl">{product.categoryIcon}</span>
                )}
            </div>

            {/* Product name */}
            <h3 className="text-lg font-bold">{product.nameBn}</h3>

            {/* Category + unit */}
            <p className="mt-1 text-sm text-base-content/60">
                {product.categoryNameBn} · প্রতি {getUnitText(product.unit)}
            </p>

            {/* Price */}
            <div className="mt-5 flex items-end justify-between gap-3">
                <div>
                    <p className="text-xs text-base-content/60">আজকের দাম</p>

                    <p className="text-2xl font-bold">
                        ৳{bengaliDigits(product.today.toLocaleString("en-US"))}
                    </p>
                </div>

                {/* Change */}
                <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${badge.className}`}
                >
                    {badge.text}
                </span>
            </div>
        </Link>
    );
};

export default ProductCard;