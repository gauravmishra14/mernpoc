const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    location: {
      woeid: Number,
      city: String,
      region: String,
      country: String,
      lat: Number,
      long: Number,
      timezone_id: String
    },
    current_observation: {
      wind: {
        chill: Number,
        direction: Number,
        speed: Number
      },
      atomsphere: {
        humidity: Number,
        visibility: Number,
        pressure: Number,
        rising: Number
      },
      astronomy: {
        sunrise: String,
        sunset: String
      },
      condition: {
        text: String,
        code: Number,
        temperature: Number
      }
    },
    forecasts: [
      {
        day: String,
        date: Number,
        low: Number,
        high: Number,
        text: String,
        code: String
      }
    ],
});

const City = mongoose.model("City", citySchema);

module.exports = City;
