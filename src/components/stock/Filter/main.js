import React from "react";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { HiOutlineFilter } from "react-icons/hi";
const Filter = ({
  filters,
  filterOnClickHandler,
  filterMenuToggle,
  setFilterMenuToggle,
}) => {
  return (
    <div
      className="w-auto h-auto cursor-pointer"
      // onMouseLeave={() => setFilterMenuToggle(false)}
    >
      <HiOutlineFilter
        onClick={() => setFilterMenuToggle((prevState) => !prevState)}
        className="text-black h-6 w-6 "
      />
      {filterMenuToggle && (
        <div className="rounded-md cursor-pointer absolute bg-gray-200 text- w-60 h-64 flex flex-col justify-center items-center ">
          <Formik
            enableReinitialize={true}
            onSubmit={(values) => console.log("values:", values)}
            initialValues={{
              checked: [],
            }}
          >
            {({ values }) => (
              <Form className=" overflow-y-scroll w-full p-2">
                <div
                  id="checkbox-group"
                  className="font-heading tracking-wide "
                >
                  Filters
                </div>

                <div
                  className="  flex flex-col justify-start items-baseline "
                  role="group"
                  aria-labelledby="checkbox-group"
                >
                  {filters.map((filter, index) => (
                    <div className="flex justify-start items-baseline">
                      <Field
                        key={index}
                        className="form-checkbox  mr-1 text-gray-700"
                        type="checkbox"
                        name="checked"
                        value={filter.brandName}
                      />
                      <label className=" text-gray-700 font-detail leading-5 text-sm ">
                        {filter.brandName}
                      </label>
                    </div>
                  ))}
                </div>
                <button
                  type="submit"
                  className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-ocean-light hover:bg-ocean focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-dark"
                >
                  Filter
                </button>
              </Form>
            )}
          </Formik>
          {/* {filters.map((filter, index) => (
            <p
              key={index}
              onClick={() => filterOnClickHandler(filter.brandName)}
              className="font-mono text-sm rounded-md cursor-pointer hover:bg-ocean-light w-full text-center transition-all duration-200 ease-in"
            >
              {filter.brandName}
            </p>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default Filter;
