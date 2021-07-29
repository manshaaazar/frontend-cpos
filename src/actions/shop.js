import axios from "axios";
import { toast } from "react-toastify";
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
        payload: shop,
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
