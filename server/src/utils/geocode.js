require('dotenv').config();
const request = require('request');

const geocode = (address, callback) => {
  const URL = `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITIONSTACK_ACCESS_KEY}&query=${address}`;

  // Make an HTTP request to the specified URL and parse the response as JSON
  request({ url: URL, json: true }, (error, response) => {
    console.log(response.body.data[0]);
    if (error) {
      callback('Unable to find location!', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
        country: response.body.data[0].country,
        continent: response.body.data[0].continent,
      });
    }
  });
};

module.exports = geocode;
