require('dotenv').config();
const request = require('request');

const forecast = (lat, long, callback) => {
  const URL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_ACCESS_KEY}&query=${lat},${long}&units=f`;

  // Make an HTTP request to the specified URL and parse the response as JSON
  request({ url: URL, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      callback(undefined, response.body);
    }
  });
};

module.exports = forecast;
