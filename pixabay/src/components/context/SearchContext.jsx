import { createContext, useContext, useReducer } from "react";
import { searchedImageReducer } from "../reducer/SearchReducer";


const initialValue = {
  searchedValue:"",
  imgCategory:""
};
const SearchedImageContext = createContext(initialValue);
const SearchedImageProvider = ({ children }) => {
  const [{ searchedValue ,imgCategory}, searchedDispatch] = useReducer(
    searchedImageReducer,
    initialValue
  );
  return (
    <SearchedImageContext.Provider
      value={{ searchedValue,imgCategory,searchedDispatch }}
    >
      {children}
    </SearchedImageContext.Provider>
  );
};

const useSearchedImage = () => useContext(SearchedImageContext);

export { useSearchedImage, SearchedImageProvider };