import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cocktailList from './cocktails.json';

class Cocktail extends Component {
	render() {
		console.log(this.props.match.params.strDrink);
		let thisDrink = cocktailList.find(drink => {
			return drink.strDrink === this.props.match.params.strDrink;
		});
		console.log(thisDrink.strDrinkThumb);

		return (
			<div>
				<h1>Welcome to the {thisDrink.strDrink} page</h1>
				<img src={thisDrink.strDrinkThumb} alt="picture of drink" />
				<ul>
					<li>Served in {thisDrink.strGlass}</li>
					<li>How to prepare: {thisDrink.strInstructions}</li>
				</ul>
			</div>
		);
	}
}

export default Cocktail;
