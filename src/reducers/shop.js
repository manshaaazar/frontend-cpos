const defaultState = {
  activeShop: JSON.parse(window.localStorage.getItem("active")) || null,
  shops: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GETSHOPS":
      return {
        shops: action.payload,
      };
    case "ADDSHOP":
      const { shops } = state;
      return {
        ...state,
        activeShop: JSON.parse(window.localStorage.getItem("active")) || null,
        shops: [...shops, action.payload],
      };
    case "SHOP_REMOVED":
      const { payload: shopName } = action;
      const updateShops = state.shops.filter((el) => el.shopName !== shopName);
      return {
        ...state,
        activeShop: JSON.parse(window.localStorage.getItem("active")) || null,
        shops: updateShops,
      };
    case "SHOP_UPDATE":
      let _shops = state.shops;
      console.log("update_shop", action.payload);
      console.log("id", action.payload.shopId.toString());

      const shopIndex = _shops.findIndex(
        (el) => el._id.toString() === action.payload.shopId.toString()
      );
      console.log("shopIndex", shopIndex);

      _shops[shopIndex].shopName = action.payload.shopName;
      _shops[shopIndex].location = action.payload.location;
      console.log("shops", _shops);
      return {
        ...state,
        activeShop: JSON.parse(window.localStorage.getItem("active")) || null,
        shops: _shops,
      };
    default:
      return state;
  }
};
