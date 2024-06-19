import state from "./state.js";
//Fetch call
//Connect to the TMDB website to bring data
const fetchData = async (endpoint) => {
  const API_KEY = state.api.key;
  const API_URL = state.api.baseUrl;
//if I want to translate the data in the original website
//so I will add here after ${API_KEY}&language=sv-SE
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}`
  );

  const data = await response.json();
  return data;
};

export default fetchData;
//----------------------------------------------