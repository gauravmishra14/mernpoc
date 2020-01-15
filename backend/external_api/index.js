let City = require("../models/city.model");

var city;

function callApi(param) {
  var OAuth = require("oauth");
  var header = {
    "X-Yahoo-App-Id": "8pJUKR7i"
  };
  var request = new OAuth.OAuth(
    null,
    null,
    "dj0yJmk9NkRMZURCWFIyNEpOJmQ9WVdrOU9IQktWVXRTTjJrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTI1",
    "9fe4f9284774ca0a504fb8b804d1174f96922a85",
    "1.0",
    null,
    "HMAC-SHA1",
    null,
    header
  );
  request.get(
    "https://weather-ydn-yql.media.yahoo.com/forecastrss?location=" +
      param +
      "&format=json",
    null,
    null,
    function(err, data) {
      if (err) {
        console.log(err);
      } else {
        city = JSON.parse(data)
        const newCity = new City({location: city.location, current_observation: city.current_observation, forecasts: city.forecasts });
        newCity.save();
      }
    }
  );
}

module.exports = callApi;
