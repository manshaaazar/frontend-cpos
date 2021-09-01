import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const AddBrandScema = Yup.object().shape({
  brandName: Yup.string()
    .min("1", "Enter brand name")
    .max("100", "Too long")
    .required(),
});
const AddBrand = ({ addBrand }) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ brandName: "" }}
      validationSchema={AddBrandScema}
      onSubmit={(values) => addBrand(values.brandName)}
    >
      {({ errors, touched }) => (
        <Form className=" h-auto flex-col justify-center items-center">
          <label
            htmlFor="brand-name"
            className="text-sm font-medium text-gray-700 "
          >
            Brand Name
          </label>
          <div className="form-inputs flex  justify-center items-center h-14 ">
            <Field
              name="brandName"
              placeholder="Enter brand name"
              className="focus:border-ocean-light text-gray-700 rounded-md p-1 shadow-sm sm:text-sm"
            />
            <button
              type="submit"
              className=" ml-2 inline-flex justify-center py-2 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-dark"
            >
              ADD
            </button>
          </div>

          {errors.brandName && touched.brandName ? (
            <p className="pl-6 font-medium text-red-500 text-sm  ">
              {errors.brandName}
            </p>
          ) : null}
        </Form>
      )}
    </Formik>
  );
};

export default AddBrand;
