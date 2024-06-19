//Connect to the TMDB website to bring data
const state = {
  currrentPage: window.location.pathname,
  api: {
    key: 'be8cc648823b68ed8efebb2e69662ebb',
    baseUrl: 'https://api.themoviedb.org/3/',
  },
};
export default state;