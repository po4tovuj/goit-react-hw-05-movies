import API from 'api';
import { Notify } from 'notiflix';
export const getTrending = async ({ timeWindow = 'day', page = 1 } = {}) => {
  return await API.get(
    `/trending/all/${timeWindow}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      Notify.failure(`Oops! ${err.message || "Can't find anything"}`);
      throw err;
    });
};
export const searchMovies = async params => {
  const searchParams = new URLSearchParams(params).toString();

  return await API.get(
    `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&${searchParams}`
  )
    .then(response => response.data)
    .catch(err => {
      Notify.failure(`Oops! ${err.message || "Can't find anything"}`);
      throw err;
    });
};
export const getMovieDetails = id => {
  return API.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then(response => response.data)
    .catch(err => {
      Notify.failure("Can't get details");
      throw err;
    });
};
export const getActorsDetails = async movieId => {
  return await API.get(
    `movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then(({ data: { cast = [] } } = {}) => cast)
    .catch(err => {
      Notify.failure(`Oops! ${err.message || "Can't find actors"}`);
      throw err;
    });
};
export const getReviews = async ({ movieId, page = 1 }) => {
  return await API.get(
    `movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  )
    .then(response => {
      return response.data;
    })
    .catch(err => {
      Notify.failure(`Oops! ${err.message || "Can't find reviews"}`);
      throw err;
    });
};
