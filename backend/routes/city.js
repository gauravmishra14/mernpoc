const router = require("express").Router();
let City = require("../models/city.model");
let cityApi = require("../external_api/index");

let capitalCaseStates = ["Sunnyvale", "Chicago", "Dallas"];
let smallCaseStates = ["sunnyvale", "chicago", "dallas"];

router.route("/").get((req, res) => {
  var inputCity = req.query.city;
  var newChar;
  if (inputCity === smallCaseStates[0]) {
    newChar = capitalCaseStates[0];
  } else if (inputCity === smallCaseStates[1]) {
    newChar = capitalCaseStates[1];
  } else {
    newChar = capitalCaseStates[2];
  }

  City.find()
    .then(cities => {
      const a = cities.filter(city => city.location.city === newChar);
      a.length ? res.json(a) : cityApi(inputCity);
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Object.entries(obj).length === 0 && obj.constructor === Object)

module.exports = router;
