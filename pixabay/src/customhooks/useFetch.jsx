// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import useFetch from './useFetch';

// const useImagesFromApi = () => {
//     const [images, setImages] = useState([]);
//       useEffect(()=> {
//         generateImage(); 
//       }, []);
//    const api = "https://pixabay.com/api/?key=41916060-0d18786264e11e3348ef0bc93&image_type=photo&per_page=10&min_width=600&min_height=600"
//       const generateImage = async()=> {
//         try {
//           const data = await axios.get(api);
         
//           setImages(data?.data?.hits);
//           console.log(data);
//         } catch (error) {
//           console.log(error);
//         }
//            }

//   return images
// }
// export default useImagesFromApi

import { useEffect, useState } from "react";
import fetchImagesFromApi from "./fetchImagesFromApi";


const useFetch = (url) => {
   
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