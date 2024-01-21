import { createContext, useContext, useReducer } from "react";
import { searchedImageReducer } from "../reducer/SearchReducer";


const initialValue = {
  searchedValue:""
};
const SearchedImageContext = createContext(initialValue);
const SearchedImageProvider = ({ children }) => {
  const [{ searchedValue }, searchedDispatch] = useReducer(
    searchedImageReducer,
    initialValue
  );
  return (
    <SearchedImageContext.Provider
      value={{ searchedValue,searchedDispatch }}
    >
      {children}
    </SearchedImageContext.Provider>
  );
};

const useSearchedImage = () => useContext(SearchedImageContext);

export { useSearchedImage, SearchedImageProvider };