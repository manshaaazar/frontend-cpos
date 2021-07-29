import axios from "axios";

export const getBrands = () => {
  return async (dispatch) => {
    const brands = await axios({
      method: "GET",
      url: `/stock/brand/all`,
    });
    const { data } = brands;
    if (data.status === 400) {
      console.log("error", data.errors);
    } else {
      console.log("brands", brands.datat);
    }
  };
};
