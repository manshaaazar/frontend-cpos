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
                  className="form-control form-control-sm"
                  style={{ width: "200px " }}
                  placeholder="Enter product Id"
                />
                {errors.productId && touched.productId ? (
                  <p>{errors.productId}</p>
                ) : null}
              </div>

              <Field
                as="select"
                className="form-select form-select-md"
                name="formate"
                style={{ width: "80px" }}
              >
                <option value="code128">code128</option>
                <option value="code39">code39</option>
                <option value="msi">msi</option>
              </Field>
            </div>

            <button className="btn btn-dark" type="submit">
              Generate Barcode
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default BarcodeForm;
