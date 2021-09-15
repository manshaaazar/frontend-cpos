const defaultState = {
  loadingBrands: false,
  loadingProducts: false,
  brands: [],
  brandToBeRemoved: "",
  activeBrand: "",
  productsPerBrand: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ALL_BRANDS":
      return {
        ...state,
        brands: action.payload,
        loadingBrands: false,
      };
    case "ADD_BRAND":
      const brands = state.brands;
      return {
        ...state,
        loadingBrands: false,
        brands: [...brands, action.payload],
      };
    case "SET_REMOVAL_BRAND":
      return {
        ...state,
        brandToBeRemoved: action.payload,
      };
    case "REMOVE_BRAND":
      const brandsUpdated = state.brands.filter(
        (brand) => brand.brandName !== action.payload
      );
      return {
        ...state,
        brands: brandsUpdated,
        loadingBrands: false,
      };
    case "LOADING_BRANDS":
      return {
        ...state,
        loadingBrands: action.payload,
      };
    case "SET_LOADING_PRODUCTS":
      return {
        ...state,
        loadingProducts: true,
      };
    case "SET_ACTIVE_BRAND":
      return {
        ...state,
        loadingProducts: false,
        activeBrand: action.payload,
      };
    case "PRODUCTS_PER_BRAND":
      console.log("products", action.payload);

    default:
      return state;
  }
};
