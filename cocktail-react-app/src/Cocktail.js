import React, { Component } from 'react';
import axios from 'axios';

class Cocktail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDrink: this.props.match.params.strDrink,
			apiDrink: {}
		};
	}

	componentDidMount() {
		let url =
			'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' +
			this.state.selectedDrink;
		axios.get(url).then(res => {
			this.setState({ apiDrink: res.data.drinks[0] });
		});
	}

	render() {
		// attempted to figure out how to get ingredients nested loop
		//array for ingredients
		//array for measurements
		// strIngredient1, strMeasure1
		// function getIngredients() {
		// 	let ingredients = [];
		// 	for (let i = 21; i < 36; i++) {
		// 		let temp = Object.entries(this.state.apiDrink)[i];
		// 		ingredients.push(temp);
		// 	}
		// 	console.log(this.state.apiDrink);
		// }

		// getIngredients();
		return (
			<div className="cocktail">
				<h1>{this.state.apiDrink.strDrink} </h1>
				<img src={this.state.apiDrink.strDrinkThumb} alt="picture of drink" />
				<ul>
					<li>Served in: {this.state.apiDrink.strGlass}</li>
					<li>Preparation: {this.state.apiDrink.strInstructions}</li>
				</ul>
			</div>
		);
	}
}

export default Cocktail;
