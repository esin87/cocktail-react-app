import React, { Component } from 'react';
import axios from 'axios';

class Random extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiDrink: {}
		};
	}

	componentDidMount() {
		let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
		axios.get(url).then(res => {
			console.log(res.data.drinks[0]);
			this.setState({ apiDrink: res.data.drinks[0] });
		});
	}
	render() {
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

export default Random;
