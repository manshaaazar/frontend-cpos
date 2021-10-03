import React from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { HiOutlineFilter, HiOutlineExclamationCircle } from "react-icons/hi";
import { string } from "yup/lib/locale";
const filterSchema = Yup.object().shape({
  checked: Yup.array().min(1, "check at least one").required(true),
});
const Filter = ({
  filters,
  filterBtnHandler,
  filterMenuToggle,
  setFilterMenuToggle,
  loadingState,
  LoadingComp,
}) => {
  return (
    <div className="w-auto h-auto cursor-pointer">
      <HiOutlineFilter
        onClick={() => setFilterMenuToggle((prevState) => !prevState)}
        className="text-black h-6 w-6 "
      />
      {filterMenuToggle && (
        <div className="rounded-md cursor-pointer absolute bg-gray-200  w-60 h-68 flex flex-col justify-center items-center select-none ">
          {loadingState ? (
            <LoadingComp />
          ) : (
            <Formik
              enableReinitialize={true}
              onSubmit={(values) => filterBtnHandler(values)}
              validationSchema={filterSchema}
              initialValues={{
                checked: [],
              }}
            >
              {({ values, errors, touched }) => (
                <Form className=" flex flex-col justify-between w-full h-full">
                  <div
                    id="checkbox-group"
                    className="font-heading tracking-wide m-1 "
                  >
                    Filters
                  </div>

                  <div
                    className=" overflow-y-auto  flex flex-col justify-start items-baseline h-60 "
                    role="group"
                    aria-labelledby="checkbox-group"
                  >
                    {filters.map((filter, index) => (
                      <div className="flex flex-shrink-0 justify-start items-center ml-2 ">
                        <Field
                          key={index}
                          className="mr-1 bg-gray-400 text-ocean-light cursor-pointer  focus:ring-0 focus:ring-offset-0  rounded-sm"
                          type="checkbox"
                          name="checked"
                          value={filter.brandName}
                        />
                        <label className=" text-gray-700 font-detail  text-sm  ">
                          {filter.brandName}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-row justify-end items-center font-normal h-12 m-1">
                    <button
                      onClick={() => setFilterMenuToggle(false)}
                      className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-ocean-dark"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-ocean-dark"
                    >
                      Filter
                    </button>
                  </div>
                  {errors.checked && touched.checked && (
                    <div className="flex flex-row justify-center items-center m-2">
                      <HiOutlineExclamationCircle className="text-red-500 mr-1 " />
                      <p className="font-sans  text-xs text-red-500 text-center">
                        {errors.checked}
                      </p>
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
