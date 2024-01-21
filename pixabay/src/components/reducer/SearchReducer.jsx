export const searchedImageReducer= (state, { type, payload }) => {
    switch (type) {
      case "SEARCHED_VALUE":
        return{
          ...state,
          searchedValue:payload
        }
      case "IMAGE_CATEGORY":
            return{
              ...state,
              imgCategory:payload
            }
    
      default:
        return state;
    }
  };