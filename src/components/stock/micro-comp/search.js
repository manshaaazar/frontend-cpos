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
        <Form className=" flex justify-center items-center w-9/12  ">
          <Field
            name="searchValue"
            placeholder="Search here"
            className="focus:border-ocean-light w-9/12  mr-1 p-1 rounded-sm text-black font-mono "
          />
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-dark"
          >
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
