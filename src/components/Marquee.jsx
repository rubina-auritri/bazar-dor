import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import Link from "next/link";
const LatestPrices = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
  const data = await res.json();
    const prices = data.slice(0, 10);
  
  console.log(data)
    return (
     <div className="w-full overflow-hidden bg-red-700 text-white">
      <MarqueeText
        direction="right"
        duration={20}
        className="flex items-center py-2 text-sm"
      >
        {prices.map((price) => {
          const isUp = price.change?.dir === "up";
          const isDown = price.change?.dir === "down";

          return (
            <Link
              key={price.id}
              href={`/products/${price.slug}`}
              className="mx-6 whitespace-nowrap hover:underline"
            >
              <span>
                {price.categoryIcon} {price.nameBn}
              </span>

              <span className="mx-2">
                — {price.today} টাকা/{price.unit}
              </span>

              {isUp && (
                <span className="font-semibold text-green-300">
                  ▲ {price.change.pct}%
                </span>
              )}

              {isDown && (
                <span className="font-semibold text-yellow-300">
                  ▼ {price.change.pct}%
                </span>
              )}

              {!isUp && !isDown && (
                <span className="font-semibold text-gray-200">
                  — 0%
                </span>
              )}
            </Link>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default LatestPrices;