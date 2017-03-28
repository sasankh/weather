const _ = require('lodash');

const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=3fb386fae11e2956ecdfa76da2dfc9fa';

const kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F';
};

module.exports = function(latitude, longitude) {
  const url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      return {
        city: _.capitalize(json.name),
        temperature: kelvinToF(json.main.temp),
        description: _.capitalize(json.weather[0].description)
      };
    })
};
