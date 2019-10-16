const mongoose = require('./connection');
// import json file
const seeds = require('./seeds.json');

const FavoriteDrink = require('./Models/FavoriteDrink.js');

FavoriteDrink.deleteMany({})
	.then(() => {
		console.log('deleted all drinks');
	})
	.then(() => {
		return FavoriteDrink.insertMany(seeds);
	})
	.then(() => {
		console.log('inserted seeds');
		process.exit();
	});
