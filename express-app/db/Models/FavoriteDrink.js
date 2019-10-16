const mongoose = require('../connection.js');

// make a new schema with 2 properties, and assign it to a variable
const FavoriteDrinkSchema = new mongoose.Schema({
	strDrink: String,
	strInstructions: String,
	strDrinkThumb: String
});

// instantiate the model, calling it "Bookmark" and with the schema we just made
const FavoriteDrink = mongoose.model('FavoriteDrink', FavoriteDrinkSchema);

// export the newly created model
module.exports = FavoriteDrink;
