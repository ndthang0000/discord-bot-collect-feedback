const axios = require('axios');
const config = require('../config/config');



const request = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-type': 'application/json',
    'x-api-key':config.apiAccessToken
  }, 
  timeout: 10000,
  validateStatus(status) {
    return status >= 200 && status <= 300;
  },
});

module.exports = request