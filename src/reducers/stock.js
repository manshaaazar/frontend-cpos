const defaultState = {
  brands: [{}],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_BRANDS":
      return {
        ...state,
        brands: action.payload,
      };
    case "ADD_BRAND":
      return {
        ...state,
        brands: [...state.brands, action.payload],
      };
    case "REMOVE_BRAND":
      const brands = state.brands;
      const brandsUpdated = brands.filter(
        (brand) => brand.brandName !== action.payload
      );
      return {
        ...state,
        brands: brandsUpdated,
      };
    default:
      return state;
  }
};
