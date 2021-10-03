import React from "react";
import { Formik, Form, Field } from "formik";
import { AiOutlineEdit } from "react-icons/ai";

const VariantForm = ({ variant }) => {
  const [inputStatus, setInputStatus] = React.useState(true);
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        variantName: variant.variantName,
        units: variant.units,
        price_per_unit: variant.price_per_unit,
      }}
      onSubmit={(values) => console.log("Values", values)}
    >
      {({ errors, touched }) => (
        <Form className="w-full  text-gray-700 mb-1 ">
          <main className="flex flex-row flex-shrink-0  justify-start items-center  w-full">
            <section className="ml-2 h-10 flex items-center justify-start">
              <label title="variant name" htmlFor="variantName">
                Name
              </label>
              <Field
                type="text"
                disabled={inputStatus}
                name="variantName"
                className={` p-1 w-72  mx-1 focus:border-ocean-light   shadow-sm sm:text-sm  rounded-md 
                ${inputStatus ? "font-normal" : "font-mono"}
                `}
              />
            </section>
            <section className="ml-2 h-10 flex items-center justify-start">
              <label htmlFor="units">Total Units</label>
              <Field
                type="number"
                disabled={inputStatus}
                name="units"
                className={`p-1 mx-1 w-20  focus:border-ocean-light   shadow-sm sm:text-sm  rounded-md
                ${inputStatus ? "font-normal" : "font-mono"}
                `}
              />
            </section>
            <section className="ml-2 h-10 flex items-center justify-start">
              <label
                title="price per unit"
                htmlFor="price_per_unit"
                className=""
              >
                PPU
              </label>
              <Field
                type="number"
                disabled={inputStatus}
                name="price_per_unit"
                className={` mx-1 p-1 w-20 focus:border-ocean-light   shadow-sm sm:text-sm  rounded-md
                ${inputStatus ? "font-normal" : "font-mono"}
                `}
              />
            </section>
            <section className="ml-2  flex flex-row justify-center items-center">
              <AiOutlineEdit
                onClick={() => setInputStatus((prevState) => !prevState)}
                className={` mb-1 text-lg cursor-pointer select-none ${
                  inputStatus ? "" : "text-yellow-500"
                }`}
              />
              {inputStatus === false && (
                <button
                  type="submit"
                  className=" ml-2 inline-flex justify-center  border border-transparent shadow-sm text-xs px-1 py-1 font-mono rounded-sm text-white bg-ocean-light hover:bg-ocean-dark"
                >
                  update
                </button>
              )}
            </section>
          </main>
        </Form>
      )}
    </Formik>
  );
};

export default VariantForm;
