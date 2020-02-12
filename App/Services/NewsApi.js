import apisauce from 'apisauce';
import Secrets from 'react-native-config';

const create = (baseURL = 'https://newsapi.org/v2/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'X-Api-Key': Secrets.NEWS_API_SECRET,
    },
    timeout: 10000,
  });

  const getHeadlines = () => api.get('top-headlines?country=us');
  const getNewsFeed = query => api.get(`everything?q=${query}`);

  return {
    getHeadlines,
    getNewsFeed,
  };
};

export default {
  create,
};
