import axios from 'axios';
import { YOUTUBE_API_PATH } from '../constants';

export const YoutubeSearch = (options, callback) => {
  if (!options.key) {
    throw new Error("Você deve fornecer uma key.");
  }

  const params = {
    part: "snippet",
    type: "video",
    ...options
  };

  axios.get(YOUTUBE_API_PATH + "/search", { params: params })
    .then(function(response) {
      if (callback) {
        callback(response.data.items, response.data.nextPageToken, response.data.pageInfo.totalResults);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
};

export const ChannelSearch = (options, callback) => {
    if (!options.key) {
        throw new Error("Você deve fornecer uma key.");
      }
    
      const params = {
        part: "snippet",
        ...options
      };
    
      axios.get(YOUTUBE_API_PATH + "/channels", { params: params })
        .then(function(response) {
          if (callback) {
            callback(response.data.items[0]);
          }
        })
        .catch(function(error) {
          console.error(error);
        });
}
