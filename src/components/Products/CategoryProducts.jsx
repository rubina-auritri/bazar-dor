"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const toBn = (value) =>
  String(value ?? "").replace(
    /\d/g,
    (digit) => "০১২৩৪৫৬৭৮৯"[digit]
  );

const getUnitText = (unit) => {
  const units = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
  };

  return units[unit] || unit;
};

const CategoryProducts = ({ products }) => {
  const [sort, setSort] = useState("default");

  const sortedProducts = useMemo(() => {
    const items = [...products];

    if (sort === "low") {
      return items.sort(
        (a, b) =>
          Number(a.averagePrice ?? a.today) -
          Number(b.averagePrice ?? b.today)
      );
    }

    if (sort === "high") {
      return items.sort(
        (a, b) =>
          Number(b.averagePrice ?? b.today) -
          Number(a.averagePrice ?? a.today)
      );
    }

    return items;
  }, [products, sort]);

  return (
    <>
      {/* Title */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-3xl">
          {products[0]?.categoryIcon || "🛒"}
        </span>

        <h1 className="text-2xl font-bold">
          {products[0]?.categoryNameBn || "পণ্য"}
        </h1>
      </div>

      {/* Sort */}
      <div className="mb-6 flex justify-end">
        <label className="flex items-center gap-2">
          <span className="text-sm font-medium">
            সাজান:
          </span>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered"
          >
            <option value="default">
              ডিফল্ট
            </option>

            <option value="low">
              দাম: কম থেকে বেশি
            </option>

            <option value="high">
              দাম: বেশি থেকে কম
            </option>
          </select>
        </label>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

const ProductCard = ({ product }) => {
  const today = Number(
    product.averagePrice ?? product.today ?? 0
  );

  const yesterday = Number(
    product.yesterdayPrice ?? product.yesterday ?? today
  );

  const diff = today - yesterday;

  const isUp = diff > 0;
  const isDown = diff < 0;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="card bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="card-body">
        {/* Product info */}
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-base-200 text-3xl">
            {product.image || product.categoryIcon || "🛒"}
          </div>

          <div>
            <h2 className="font-semibold">
              {product.nameBn}
            </h2>

            <p className="text-sm text-base-content/60">
              {getUnitText(product.unit)}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold">
              ৳{toBn(today)}
            </span>
          </div>

          {/* Change badge */}
          {diff !== 0 && (
            <span
              className={`badge ${
                isUp
                  ? "badge-error"
                  : "badge-success"
              }`}
            >
              {isUp ? "↑" : "↓"}{" "}
              {toBn(Math.abs(diff))}
            </span>
          )}

          {diff === 0 && (
            <span className="badge badge-ghost">
              অপরিবর্তিত
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CategoryProducts;