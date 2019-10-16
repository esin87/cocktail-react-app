var express = require('express');
var router = express.Router();

const FavoriteDrink = require('../db/Models/FavoriteDrink');

/* GET home page. */
router.get('/favorites', function(req, res) {
	FavoriteDrink.find({}).then(drink => res.json(drink));
});

module.exports = router;
