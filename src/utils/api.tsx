import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";


const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'be27b784e5msh82ffcfca46a03cap14f822jsn6ca8528d57ec',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url: any) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};




