const ProductDetails = ({ product }) => {
  return (
    <div className="mx-auto max-w-5xl space-y-6">

      {/* Product Summary */}
      <section className="rounded-2xl bg-base-100 p-6 shadow">
        <div className="flex items-start gap-4">
          <div className="text-5xl">
            {product.image}
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {product.nameBn}
            </h1>

            <p className="mt-2 text-base-content/60">
              {product.description || "আজকের বাজারদরের তথ্য"}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="badge badge-primary">
                {product.categoryNameBn}
              </span>

              <span className="badge badge-outline">
                প্রতি {product.unit}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Price Summary */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-base-100 p-5 text-center shadow">
          <p className="text-sm text-base-content/60">
            সর্বনিম্ন দাম
          </p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            ৳{product.minPrice}
          </p>
        </div>

        <div className="rounded-2xl bg-base-100 p-5 text-center shadow">
          <p className="text-sm text-base-content/60">
            সর্বোচ্চ দাম
          </p>

          <p className="mt-2 text-2xl font-bold text-red-500">
            ৳{product.maxPrice}
          </p>
        </div>

        <div className="rounded-2xl bg-base-100 p-5 text-center shadow">
          <p className="text-sm text-base-content/60">
            গড় দাম
          </p>

          <p className="mt-2 text-2xl font-bold">
            ৳{product.averagePrice}
          </p>
        </div>
      </section>

      {/* Bazar Prices */}
      <section className="rounded-2xl bg-base-100 p-6 shadow">
        <h2 className="text-2xl font-bold">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <p className="mt-1 text-sm text-base-content/60">
          বিভিন্ন বাজারে আজকের পণ্যের দাম
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>বাজার</th>
                <th>সর্বনিম্ন</th>
                <th>সর্বোচ্চ</th>
                <th>গড়</th>
              </tr>
            </thead>

            <tbody>
              {product.bazars?.map((bazar) => (
                <tr key={bazar.id}>
                  <td className="font-semibold">
                    🏪 {bazar.name}
                  </td>

                  <td>৳{bazar.minPrice}</td>

                  <td>৳{bazar.maxPrice}</td>

                  <td className="font-bold">
                    ৳{bazar.averagePrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default ProductDetails;