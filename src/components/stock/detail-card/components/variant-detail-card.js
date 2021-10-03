import React from "react";
import { Formik, Form, Field } from "formik";
const VariantForm = React.lazy(() => import("../forms/variant-form"));
const VariantCart = ({ variants, productName, setVariantDetailToggle }) => {
  const [disableStatus, setDisableStatus] = React.useState(true);
  return (
    <section
      //onMouseLeave={() => setVariantDetailToggle(false)}
      className="flex flex-col justify-start items-start z-10 absolute top-16 left-28 h-5/6 w-5/6 bg-gray-200 rounded-md product-details-container"
    >
      <div className="w-full h-full flex flex-col justify-start  items-start text-gray-700 ">
        <header className="flex  justfiy-start items-center   h-12 pl-2  ">
          <section>
            <label
              htmlFor="variants"
              className="ml-2 font-semibold tracking-wide "
            >
              {productName}
            </label>
          </section>
          <section>
            <label
              htmlFor="variants"
              className="ml-2 font-semibold tracking-wide "
            >
              variants
            </label>
          </section>
        </header>
        <main className="flex h-full w-full flex-col overflow-y-auto  justify-start items-start  ">
          {variants.map((variant) => (
            <VariantForm variant={variant} />
          ))}
        </main>
        <footer className="w-full h-14 flex justify-end items-center">
          <button
            onClick={() => setVariantDetailToggle(false)}
            className=" ml-2 mr-4 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean-dark focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-ocean-dark"
          >
            Close
          </button>
        </footer>
      </div>
    </section>
  );
};

export default VariantCart;
