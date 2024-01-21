import { useEffect, useState } from "react";
import fetchImagesFromApi from "./fetchImagesFromApi";
import { useSearchedImage } from "../context/SearchContext";


const useFetch = (url) => {
//    const {searchValue} = useSearchedImage();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

console.log("useFetch", url);
    useEffect(() => {
        setLoading("loading...");
        setData([]);
        setError(null);

        fetchImagesFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res?.hits);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });

    }, [url]);
    console.log("useFetchdata", data);
    return { data, loading, error };
};

export default useFetch;