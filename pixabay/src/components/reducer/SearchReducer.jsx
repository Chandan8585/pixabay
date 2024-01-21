export const searchedImageReducer= (state, { type, payload }) => {
    switch (type) {
      case "SEARCHED_VALUE":
        return{
          ...state,
          searchedValue:payload
        }
      default:
        return state;
    }
  };