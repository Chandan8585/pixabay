// In your SearchReducer.js
export const searchedImageReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCHED_VALUE":
      return {
        ...state,
        searchedValue: payload,
        imgCategory: "" // Clear category when searching
      };
    case "IMAGE_CATEGORY":
      return {
        ...state,
        imgCategory: payload,
        searchedValue: "" // Clear search when selecting category
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        searchedValue: ""
      };
    case "CLEAR_CATEGORY":
      return {
        ...state,
        imgCategory: ""
      };
    default:
      return state;
  }
};