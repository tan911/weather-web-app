const request = require('request');

const geocode = (address, callback) => {
  const URL = `http://api.positionstack.com/v1/forward?access_key=937a49e0f637e025b2faee3ac93241d1&query=${address}`;

  // Make an HTTP request to the specified URL and parse the response as JSON
  request({ url: URL, json: true }, (error, response) => {
    if (error || !error) {
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
