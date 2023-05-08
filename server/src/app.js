const path = require('path');
const express = require('express');
const hbs = require('hbs');

const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

const app = express();
const port = process.env.PORT || 3000;

// Define paths for express config
const clientPathDirectory = path.join(__dirname, '../../client');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(clientPathDirectory));

// Home page
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather app',
    headerTitle: 'Weather',
  });
});

// About page
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About page',
    headerTitle: 'About',
  });
});

// Help page
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help page',
    headerTitle: 'Help',
  });
});

// Weather
app.get('/weather', (req, res) => {
  const address = req.query.address;

  if (!req.query.address) {
    return res.send({
      error: 'Please provide an address!',
    });
  }

  geocode(address, (error, response) => {
    // error
    if (error) {
      return res.send({ error: error });
    }

    // success
    const { latitude, longitude } = response;

    forecast(latitude, longitude, (error, forecaseData) => {
      // error
      if (error) {
        return res.send({ error: error });
      }

      // success
      res.send({
        data: forecaseData,
      });
    });
  });
});

// Page not found
app.get('/help/*', (req, res) => {
  res.render('not-found-page', {
    title: 'Not found page!',
    headerTitle: 'Help',
    messageTitle: 'Help article not found!',
    message: 'The page your looking for does not exist!',
  });
});

// 404 page
app.get('*', (req, res) => {
  res.render('404', {
    title: 'Page not found!',
    messageTitle: '404 page not found!',
    message: 'This is not a web page you are looking for.',
  });
});

app.listen(port, () => {
  console.log('server runner of port ' + port);
});
