
import { notFound } from "next/navigation";

const toBn = (value) =>
  String(value ?? "").replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[digit]);

const getUnitText = (unit) => {
  const units = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };

  return units[unit] || unit;
};

const ProductDetails = ({ product }) => {
  const today = Number(product.today);
  const yesterday = Number(product.yesterday ?? today);

  const difference = today - yesterday;
  const isUp = difference > 0;
  const isDown = difference < 0;

  const percentage = yesterday
    ? ((Math.abs(difference) / yesterday) * 100).toFixed(1)
    : "0";

  const unit = getUnitText(product.unit);

  // Market data
  const markets = product.markets ?? [];

  const marketMin =
    markets.length > 0
      ? Math.min(...markets.map((market) => Number(market.min)))
      : 0;

  const marketMax =
    markets.length > 0
      ? Math.max(...markets.map((market) => Number(market.max)))
      : 0;
      if (!product || !product._id) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl space-y-5 p-4">

      {/* Header */}
      <section className="flex flex-col justify-between gap-4 rounded-2xl bg-base-100 p-5 shadow-sm sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-base-200 text-4xl">
            {product.image || "📦"}
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              {product.nameBn}
            </h1>

            <p className="text-sm text-base-content/60">
              প্রতি {unit} · {product.categoryNameBn}
            </p>

            {difference !== 0 && (
              <p className="mt-1 text-sm">
                গতকালের তুলনায় আজ দাম{" "}
                <span className="font-bold">
                  {isUp ? "বেড়েছে" : "কমেছে"}
                </span>{" "}
                : {toBn(Math.abs(difference))} টাকা
              </p>
            )}
          </div>
        </div>

        {/* Today's Price */}
        <div className="min-w-[130px] rounded-xl bg-base-200 p-3 text-center">
          <p className="text-xs text-base-content/60">
            আজকের দাম
          </p>

          <p className="text-3xl font-bold">
            {toBn(today)}
          </p>

          <p className="text-xs text-base-content/60">
            টাকা / {unit}
          </p>

          {difference !== 0 && (
            <p
              className={`mt-1 text-xs font-semibold ${
                isUp ? "text-red-500" : "text-green-600"
              }`}
            >
              {isUp ? "▲" : "▼"} {toBn(percentage)}%
            </p>
          )}
        </div>
      </section>

      {/* Price Summary */}
      <section className="rounded-2xl bg-base-100 p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-bold">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

          {/* Minimum */}
          <div className="rounded-xl border border-base-300 p-4">
            <p className="text-xs text-base-content/60">
              সর্বনিম্ন দাম
            </p>

            <p className="mt-1 text-2xl font-bold text-green-600">
              {toBn(marketMin)}{" "}
              <span className="text-sm font-medium">
                টাকা
              </span>
            </p>

            <p className="mt-1 text-xs text-base-content/60">
              বাজারগুলোর মধ্যে সর্বনিম্ন
            </p>
          </div>

          {/* Maximum */}
          <div className="rounded-xl border border-base-300 p-4">
            <p className="text-xs text-base-content/60">
              সর্বাধিক দাম
            </p>

            <p className="mt-1 text-2xl font-bold text-red-500">
              {toBn(marketMax)}{" "}
              <span className="text-sm font-medium">
                টাকা
              </span>
            </p>

            <p className="mt-1 text-xs text-base-content/60">
              বাজারগুলোর মধ্যে সর্বাধিক
            </p>
          </div>

          {/* Average */}
          <div className="rounded-xl border border-base-300 p-4">
            <p className="text-xs text-base-content/60">
              গড় দাম
            </p>

            <p className="mt-1 text-2xl font-bold text-green-600">
              {toBn((marketMin + marketMax) / 2)}{" "}
              <span className="text-sm font-medium">
                টাকা
              </span>
            </p>

            <p className="mt-1 text-xs text-base-content/60">
              প্রতি {unit}-এর হিসাব
            </p>
          </div>

        </div>
      </section>

      {/* Market Prices */}
      <section className="rounded-2xl bg-base-100 p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-bold">
          বাজারভিত্তিক আজকের দাম
        </h2>

        {markets.length > 0 ? (
          <div className="overflow-x-auto rounded-xl border border-base-300">
            <table className="table w-full">
              <thead>
                <tr className="text-sm text-base-content/70">
                  <th>বাজার</th>
                  <th>বিভাগ</th>
                  <th className="text-right">সর্বনিম্ন</th>
                  <th className="text-right">সর্বাধিক</th>
                </tr>
              </thead>

              <tbody>
                {markets.map((market, index) => (
                  <tr
                    key={`${market.market}-${index}`}
                    className={
                      index % 2 === 1
                        ? "bg-base-200/60"
                        : ""
                    }
                  >
                    <td className="font-semibold">
                      {market.market}
                    </td>

                    <td className="text-base-content/70">
                      {market.division}
                    </td>

                    <td className="text-right">
                      {toBn(market.min)} টাকা
                    </td>

                    <td className="text-right">
                      {toBn(market.max)} টাকা
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="py-6 text-center text-sm text-base-content/60">
            বাজারের তথ্য পাওয়া যায়নি।
          </p>
        )}
      </section>

    </div>
  );
};

export default ProductDetails;