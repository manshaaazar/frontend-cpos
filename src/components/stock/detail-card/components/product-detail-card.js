import React from "react";
import { AiOutlineExpand, AiOutlineEdit } from "react-icons/ai";

const VariantCard = React.lazy(() => import("./variant-detail-card"));
const ProductCard = ({ product }) => {
  const [variantDetailToggle, setVariantDetailToggle] = React.useState(false);
  return (
    <div>
      <section className="product-heading  select-none text-gray-700 flex flex-row justify-between items-center">
        <h2 className="text-gray-700 font-mono pl-2 ">{product.productName}</h2>
        <section className="flex flex-row justify-center items-center ">
          <h2 className=" m-1 rounded-sm font-bold text-white bg-gray-400 select-none w-auto text-xs text-center p-1">
            {product.variants.length}
          </h2>
          <AiOutlineExpand
            onClick={() => setVariantDetailToggle((prevState) => !prevState)}
            className="text-lg cursor-pointer  ml-1 hover:text-black"
          />
        </section>
        {variantDetailToggle && (
          <VariantCard
            variants={product.variants}
            productName={product.productName}
            setVariantDetailToggle={setVariantDetailToggle}
          />
        )}
      </section>
    </div>
  );
};

export default ProductCard;
