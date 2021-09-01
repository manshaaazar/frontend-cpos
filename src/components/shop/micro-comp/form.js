import React from "react";
import { Form, Field, Formik } from "formik";
import { connect } from "react-redux";
import * as actions from "../../../actions/shop";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  name: Yup.string().min(5, "Too short").max(100, "Too long").required(true),
  city: Yup.string().min(5, "Too short").max(50, "Too long").required(true),
  state: Yup.string().min(5, "Too short").max(50, "Too long"),
  country: Yup.string().min(5, "Too short").max(50, "Too long"),
});
const AddForm = ({ setToggle, action, operation, shop }) => {
  const handleInitialValues = () => {
    if (shop) {
      const { shopName, location, shopId } = shop;
      return {
        name: shopName,
        city: location.city,
        state: location.state,
        country: location.country,
        shopId,
      };
    } else {
      return {
        name: "",
        city: "",
        state: "",
        country: "",
        shopId: "",
      };
    }
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={handleInitialValues()}
      validationSchema={Schema}
      onSubmit={(values) => operation(values)}
    >
      {({ errors, touched }) => (
        <Form className=" mt-2 ml-4 w-72 h-96 flex flex-col justify-around border border-red-600">
          <p className="font-medium text-gray-700">Shop Details</p>
          <div className="hidden">
            <label
              htmlFor="shop-Id"
              className="text-sm font-medium text-gray-700 "
            >
              shopId
            </label>
            <Field
              name="shopId"
              placeholder="shopId"
              className="mt-1 p-1  focus:border-ocean-light block border  shadow-sm sm:text-sm border-gray-300 rounded-md "
            />
          </div>
          <div className="ml-4">
            <label
              htmlFor="shop-name"
              className="text-sm font-medium text-gray-700 "
            >
              Name
            </label>
            <Field
              name="name"
              placeholder="name"
              className="mt-1 p-1  focus:border-ocean-light block border  shadow-sm sm:text-sm border-gray-300 rounded-md "
            />
            {errors.name && touched.name ? (
              <p className="font-medium  text-xs text-red-500">{errors.name}</p>
            ) : null}
            <label
              htmlFor="city-name"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <Field
              name="city"
              placeholder="city"
              className="mt-1 p-1  focus:border-ocean-light block  shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.city && touched.city ? (
              <p className="font-medium  text-xs text-red-500">{errors.city}</p>
            ) : null}
            <label
              htmlFor="state-name"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <Field
              name="state"
              placeholder="state"
              className="mt-1 p-1  focus:border-ocean-light block  shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.state && touched.state ? (
              <p className="font-medium  text-xs text-red-500">
                {errors.state}
              </p>
            ) : null}
            <label
              htmlFor="country-name"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <Field
              name="country"
              placeholder="country"
              className="mt-1 p-1  focus:border-ocean-light block  shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.country && touched.country ? (
              <p className="font-medium  text-xs text-red-500">
                {errors.country}
              </p>
            ) : null}
          </div>
          <div className="m-2 flex flex-row justify-end items-center">
            <button
              type="button"
              onClick={() => setToggle(false)}
              className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-dark"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-4 mr-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-dark"
            >
              {action}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
const mapStateToProps = (state) => {
  const { shop } = state;
  return {
    shopCatalog: shop,
  };
};
export default connect(mapStateToProps, actions)(AddForm);
