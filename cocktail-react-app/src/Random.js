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
			<div>
				<h1 id="cocktail-name">{this.state.apiDrink.strDrink} </h1>
				<div className="cocktail">
					<div>
						<img src={this.state.apiDrink.strDrinkThumb} />
					</div>
					<div>
						<ul>
							<li>Served in: {this.state.apiDrink.strGlass}</li>
							<li>Preparation: {this.state.apiDrink.strInstructions}</li>
							<ul>
								Ingredients:
								{this.state.apiDrink.strIngredient1 && (
									<li>
										{this.state.apiDrink.strIngredient1},{' '}
										{this.state.apiDrink.strMeasure1}
									</li>
								)}
								{this.state.apiDrink.strIngredient2 && (
									<li>
										{this.state.apiDrink.strIngredient2},{' '}
										{this.state.apiDrink.strMeasure2}
									</li>
								)}
								{this.state.apiDrink.strIngredient3 && (
									<li>
										{this.state.apiDrink.strIngredient3},{' '}
										{this.state.apiDrink.strMeasure3}
									</li>
								)}
								{this.state.apiDrink.strIngredient4 && (
									<li>
										{this.state.apiDrink.strIngredient4},{' '}
										{this.state.apiDrink.strMeasure4}
									</li>
								)}
								{this.state.apiDrink.strIngredient5 && (
									<li>
										{this.state.apiDrink.strIngredient5},{' '}
										{this.state.apiDrink.strMeasure5}
									</li>
								)}
							</ul>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Random;
