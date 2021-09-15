import React from "react";
import { useEffect } from "react";
import { Formik, Form, Field } from "formik";

const Product = ({ product }) => {
  useEffect(() => {
    console.log("product", product);
  }, []);
  return <div>{}</div>;
};

export default Product;
