const defaultState = { shops: [{}] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GETSHOPS":
      return {
        shops: action.payload,
        trigger: false,
      };
    case "ADDSHOP":
      const { shops } = state;
      return {
        shops: [...shops, action.payload],
        trigger: false,
      };
    case "SHOP_REMOVED":
      const { payload: shopName } = action;
      const updated = state.shops.filter((el) => el.shopName !== shopName);
      return {
        shops: updated,
      };
    default:
      return state;
  }
};
