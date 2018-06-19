import axios from 'axios';
import { YOUTUBE_API_PATH } from '../constants';

const YoutubeSearch = (options, callback) => {
  if (!options.key) {
    throw new Error("Você deve fornecer uma key.");
  }

  const params = {
    part: "snippet",
    type: "video",
    ...options
  };

  axios.get(YOUTUBE_API_PATH, { params: params })
    .then(function(response) {
      if (callback) {
        callback(response.data.items);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
};

export default YoutubeSearch;
