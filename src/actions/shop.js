import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import shop from "../reducers/shop";
export const getAllShops = () => {
  return async (dispatch) => {
    const response = await axios({
      method: "GET",
      url: "shop/all",
    });
    const { data } = response;
    const { status } = data;
    if (status === 200) {
      const { shops } = data;
      return dispatch({
        type: "GETSHOPS",
        payload: shops,
      });
    } else {
      return toast.error(`${data.message}`);
    }
  };
};
export const addShop = (values) => {
  return async (dispatch) => {
    console.log("values", values);
    const { name, city, state, country } = values;
    const shop = {
      shopName: name,
      location: {
        city: city ?? "",
        state: state ?? "",
        country: country ?? "",
      },
    };
    const response = await axios({
      method: "POST",
      url: "/shop/add",
      data: shop,
    });
    const { data } = response;
    if (data.status === 200) {
      toast.success(`${data.message}`);
      return dispatch({
        type: "ADDSHOP",
        payload: data.shop,
      });
    } else {
      return toast.error(`${data.message}`);
    }
  };
};
export const removeShop = (shopName) => {
  return async (dispatch) => {
    const response = await axios({
      method: "POST",
      url: "/shop/remove",
      data: {
        shopName,
      },
    });
    const { data } = response;
    if (data.status === 200) {
      toast.success(`${data.message}`);
      return dispatch({
        type: "SHOP_REMOVED",
        payload: shopName,
      });
    } else {
      console.log("error", response);
      toast.error(`${data.message}`);
    }
  };
};
export const updateShop = (values) => {
  return async (dispatch) => {
    values.name = values.name.toLowerCase();
    console.log("values", values);
    const shop = {
      shopName: values.name,
      location: {
        city: values.city,
        state: values.state,
        country: values.country,
      },
      shopId: values.shopId,
    };
    const response = await axios({
      method: "POST",
      url: "/shop/update",
      data: shop,
    });
    const { data } = response;
    if (data.status === 200) {
      toast.success(`${data.message}`);
      return dispatch({
        type: "SHOP_UPDATE",
        payload: shop,
      });
    } else {
      toast.error(`${data.message}`);
    }
  };
};
