import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import listOfCocktails from './cocktails.json';

class Home extends Component {
	render() {
		let list = listOfCocktails.map(item => {
			return (
				<Link to={'/cocktail/' + item.strDrink}>
					<li key={item.strDrink}>{item.strDrink}</li>
				</Link>
			);
		});
		return (
			<div>
				<ul>{list}</ul>
			</div>
		);
	}
}

export default Home;
