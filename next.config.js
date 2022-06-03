// module.exports = {
//   reactStrictMode: true,
// }

const path = require('path');
// our api
require('dotenv').config();

module.exports = {
  // do this to access our api from any where
  // and this will run in the server
  // use const { API_URL } = process.env;
  env: {
    API_URL: process.env.API_URL,
    IMG_URL: process.env.IMG_URL,
    MY_KEY: process.env.MY_KEY,
  },

  // this will run in the server and in the client (we can use this when get href of nagetations link in navbar and put them)
  // use const { publicRuntimeConfig } = getConfig();
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },

  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');

    return config;
  },
};
