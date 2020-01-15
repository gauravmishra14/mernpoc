const router = require('express').Router();
let City = require('../models/city.model');
let cityApi = require('../external_api/index');



var states = ['Sunnyvale','Chicago','Dallas']





router.route('/').get((req, res) => {
    var param = req.query.city;
    param = param.trim();
    var newCity;
    if(param === "sunnyvale"){
        console.log('inside if')
        newCity = 'Sunnyvale'
    }
    console.log('param: '+param)
    console.log('newCity: '+newCity)
    // City.find()
    // .then(cities => {const a = cities.filter(city => city.location.city === newChar); a.length ? res.json(a) : cityApi(inputCity)})
    // .catch(err => res.status(400).json('Error: '+err));
});

// Object.entries(obj).length === 0 && obj.constructor === Object)

module.exports = router;
