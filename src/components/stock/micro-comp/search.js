import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
const Search = ({}) => {
  const SchemaSearch = Yup.object().shape({
    searchValue: Yup.string()
      .min("1", "Search something")
      .max(100, "Too long")
      .required(true),
  });
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ searchValue: "" }}
      validationSchema={SchemaSearch}
      onSubmit={(values) => console.log("searchValue:", values)}
    >
      {({ errors, touched }) => (
        <Form className=" flex justify-center items-center w-full h-full select-none  ">
          <Field
            name="searchValue"
            placeholder="Search here"
            className=" focus:ring-ocean-light bg-gray-200  w-9/12  mr-2 p-1 rounded-sm text-gray-700 font-mono hover:bg-gray-200 focus:outline-none focus:ring-1   "
          />
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-ocean-light hover:bg-ocean-dark focus:outline-none  focus:ring-ocean-dark"
          >
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
