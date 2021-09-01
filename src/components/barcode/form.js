import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// barcode generator form schema for validation
const barcodeGeneratorFormSchema = Yup.object().shape({
  productId: Yup.string()
    .min(4, "Too short")
    .max(10, "Too long")
    .required("Required"),
});
const BarcodeForm = ({ barcodeGeneratorHandler }) => {
  return (
    <div>
      <Formik
        initialValues={{ productId: "barcode", formate: "code128" }}
        validationSchema={barcodeGeneratorFormSchema}
        onSubmit={(values) => barcodeGeneratorHandler(values)}
      >
        {({ errors, touched }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "160px",
              width: "380px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Field
                  name="productId"
                  className="m-2 p-1  focus:border-ocean-light block  shadow-sm sm:text-sm border-gray-300 rounded-md"
                  style={{ width: "200px " }}
                  placeholder="Enter product Id"
                />
                {errors.productId && touched.productId ? (
                  <p className="font-medium text-red-500 text-sm ">
                    {errors.productId}
                  </p>
                ) : null}
              </div>

              <Field
                as="select"
                className="m-1  p-1 focus:border-ocean-light block  shadow-sm sm:text-sm border-gray-300 rounded-md"
                name="formate"
              >
                <option value="code128">code128</option>
                <option value="code39">code39</option>
                <option value="msi">msi</option>
              </Field>
            </div>

            <button
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-light"
              type="submit"
            >
              Generate Barcode
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default BarcodeForm;
