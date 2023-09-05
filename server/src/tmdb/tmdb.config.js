const baseUrl = 'https://image.tmdb.org/t/p/original/' ;
const key = '2a7e511b76d47a007c0cdcebdad8df5c';

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };