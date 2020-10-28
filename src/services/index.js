import axios from 'axios';

export const configureAxios = () => {
  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      //TODO handle some errors
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      //TODO handle some errors
      return Promise.reject(error);
    },
  );
};
