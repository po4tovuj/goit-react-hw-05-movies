import API from 'api';
export const getTrending = async ({ timeWindow = 'day', page = 1 } = {}) => {
  const trendMovies = await API.get(
    `/trending/all/${timeWindow}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  )
    .then(response => {
      return response;
    })
    .catch(err => {
      const { status_message } = err;
      console.log('status_message: ', status_message);
    });
  return trendMovies;
};
