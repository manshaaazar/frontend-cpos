import React, { useEffect } from "react";
import * as actions from "../../../actions/stock";
import { connect } from "react-redux";
const ProductBar = ({ stock, getBrands }) => {
  useEffect(() => {
    getBrands();
  }, []);
  return <div></div>;
};
const mapStateToProps = (state) => {
  return { stock: state.stock };
};
export default connect(mapStateToProps, actions)(ProductBar);
