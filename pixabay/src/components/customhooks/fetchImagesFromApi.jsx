import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/?key=";
const PIXABAY_API_KEY = "41916060-0d18786264e11e3348ef0bc93";

const fetchImagesFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${PIXABAY_API_KEY}${url}`)
    return data; 
  }  
 catch (error) {
    console.log(error);
    return error;
  }

}
export default fetchImagesFromApi
