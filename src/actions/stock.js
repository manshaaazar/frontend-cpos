import axios from "axios";
import { toast } from "react-toastify";
export const getBrands = () => {
  return async (dispatch) => {
    const shopId = JSON.parse(window.localStorage.getItem("active"));
    console.log("activeShop", shopId);
    dispatch({ type: "LOADING_BRANDS", payload: true });
    const response = await axios({
      method: "POST",
      url: "/stock/brand/all",
      data: {
        shopId,
      },
    });
    const { data } = response;
    if (data.status === 200) {
      // data.brands is an array of brands
      dispatch({
        type: "GET_ALL_BRANDS",
        payload: data.brands,
      });
    } else {
      toast.error(`${data.message}`);
    }
  };
};
export const addBrand = (brandName) => {
  return async (dispatch) => {
    const shopId = JSON.parse(window.localStorage.getItem("active"));
    const response = await axios({
      method: "POST",
      url: "/stock/brand/add",
      data: {
        brandName,
        shopId,
      },
    });
    console.log("response", response);
    const { data } = response;
    if (data.status === 200) {
      toast.success(`${data.message}`);
      console.log("NEW_BRAND", data.newBrand);
      return dispatch({
        type: "ADD_BRAND",
        payload: data.newBrand,
      });
    } else {
      return toast.error(`${data.message}`);
    }
  };
};
export const removeBrand = () => {
  return async (dispatch, getState) => {
    const shopId = JSON.parse(window.localStorage.getItem("active"));
    const { brandToBeRemoved: brandName } = getState().stock;
    const response = await axios({
      url: "/stock/brand/remove",
      method: "POST",
      data: {
        shopId,
        brandName,
      },
    });
    const { data } = response;
    if (data.status === 200) {
      toast.success(`${data.message}`);
      return dispatch({
        type: "REMOVE_BRAND",
        payload: brandName,
      });
    } else {
      toast.error(`${data.message}`);
    }
  };
};
export const getProductsPerBrand = (brandName) => {
  return async (dispatch, getState) => {
    const shopId = JSON.parse(window.localStorage.getItem("active")) ?? "";
    dispatch({ type: "SET_LOADING_PRODUCTS", payload: true });
    const response = await axios({
      url: "/stock/products",
      method: "POST",
      data: {
        shopId,
        brandName,
      },
    });
    const { data } = response;
    if (data.status === 200) {
      dispatch({
        type: "PRODUCTS_PER_BRAND",
        payload: data.products,
      });
    } else {
      toast.info(`${data.message}`);
    }
  };
};
export const setActiveBrand = (brandName) => {
  return (dispatch) => {
    dispatch({
      type: "SET_ACTIVE_BRAND",
      payload: brandName,
    });
  };
};
export const setRemovalBrand = (brandName) => {
  return (dispatch) => {
    dispatch({
      type: "SET_REMOVAL_BRAND",
      payload: brandName,
    });
  };
};
