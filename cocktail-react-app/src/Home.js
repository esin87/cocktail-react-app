import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import listOfCocktails from './cocktails.json';
import axios from 'axios';

let tenRandomURL =
	'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			drinks: []
		};
	}

	componentDidMount() {
		axios.get(tenRandomURL).then(res => {
			this.setState({ drinks: res.data.drinks });
		});
	}

	render() {
		//learned how to sort: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
		function compare(a, b) {
			// Use toUpperCase() to ignore character casing
			const drinkA = a.strDrink.toUpperCase();
			const drinkB = b.strDrink.toUpperCase();

			let comparison = 0;
			if (drinkA > drinkB) {
				comparison = 1;
			} else if (drinkA < drinkB) {
				comparison = -1;
			}
			return comparison;
		}

		let list = this.state.drinks.sort(compare).map(item => {
			return (
				<Link to={'/cocktail/' + item.strDrink}>
					<li key={item.id}>{item.strDrink}</li>
				</Link>
			);
		});
		return (
			<div className="home">
				<h2>May We Suggest:</h2>
				<ul>{list}</ul>
				<Link to="/random">
					<button>Show Random Cocktail</button>
				</Link>
			</div>
		);
	}
}

export default Home;
