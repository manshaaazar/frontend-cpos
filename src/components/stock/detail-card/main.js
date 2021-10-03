import React from "react";
const ProductCard = React.lazy(() =>
  import("./components/product-detail-card")
);
const Card = ({ items }) => {
  return (
    <div className="products-container  w-full h-full overflow-y-auto  ">
      {items.map((item, index) => (
        <div
          key={index}
          style={{ borderBottom: "1px solid #9CA3AF" }}
          className="border-ocean-light product-container  pl-2 text-sm flex-col justify-center items-center border-2   "
        >
          <section className="flex flex-row justify-between items-center">
            <h2 className="brand-name font-semibold tracking-wide text-gray-700 ">
              {item.brandName}
            </h2>
            <h2 className=" m-1 rounded-sm font-bold text-white bg-gray-400 select-none w-auto text-xs text-center p-1">
              {item.products.length}
            </h2>
          </section>
          <section className="h-full w-full">
            {item.products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Card;
