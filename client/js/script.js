'use strict';

const form = document.getElementById('form');
const input = document.getElementById('search');
const errorMessage = document.getElementById('error-message');
const main = document.querySelector('.main');

const weather__location = document.getElementById('weather__location');
const weather__time = document.getElementById('weather__time');
const weather__temperature = document.getElementById('weather__temperature');
const weather__date = document.getElementById('weather__date');
const weather__description = document.getElementById('weather__description');
const weather__humidity__value = document.getElementById(
  'weather__humidity__value'
);
const weather__wind__value = document.getElementById('weather__wind__value');
const weather__cloudy__value = document.getElementById(
  'weather__cloudy__value'
);
const weather__visibilitiy__value = document.getElementById(
  'weather__visibility__valu'
);
const weather__uvindex__value = document.getElementById(
  'weather__uvindex__value'
);
const data__error = document.querySelector('.data__error');
const data__error__message = document.querySelector('.data__error__message');

// Display error messag in main document
function displayDataError(err) {
  data__error__message.textContent = err;
}

// Display error/success in inputs
function displayError(error) {
  if (error) {
    errorMessage.classList.remove('hidden');
    input.classList.add('error');
  } else {
    errorMessage.classList.add('hidden');
    input.classList.remove('error');
  }
}

// Render data
function renderData(forecast) {
  const {
    humidity,
    uv_index,
    visibility,
    temperature,
    wind_speed,
    weather__descriptions,
    cloudcover,
  } = forecast.data.current;
  const { name, region, country, timezone_id, localtime } =
    forecast.data.location;
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let today = new Date();

  // formated date
  // ex: 5/7/2023 -> 7 May 2023
  const date = new Date(today.toLocaleDateString());
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-GB', options);

  // change information values in client
  weather__location.textContent = `${name} ${region}, ${country}`;
  weather__time.textContent = `as of ${today.toLocaleTimeString()}`;
  weather__temperature.textContent = `${temperature}℃`;
  weather__date.textContent = `${
    weekday[today.getDay()]
  }, ${today.toLocaleTimeString()}, ${formattedDate}`;
  weather__description.textContent = weather__descriptions;
  weather__humidity__value.textContent = `${humidity}%`;
  weather__wind__value.textContent = `${wind_speed}km/h`;
  weather__cloudy__value.textContent = `${cloudcover}%`;
  weather__visibilitiy__value.textContent = `${visibility}km`;
  weather__uvindex__value.textContent = `${uv_index}`;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = input.value;

  if (!location) {
    displayError('error');
  } else {
    fetch(`/weather?address=${location}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          displayDataError(data.error);
          main.classList.add('hidden');
          data__error.classList.remove('hidden');
          throw new Error(data.error);
        } else {
          renderData(data);
          data__error.classList.add('hidden');
          main.classList.remove('hidden');
        }
      })
      .catch((err) => {
        console.log(err);
      });

    displayError();
    input.value = '';
  }
});


