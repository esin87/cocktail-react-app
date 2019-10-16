import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
	render() {
		return (
			<div className="about">
				<p>
					This page was created using React and the Cocktails DB APi found at
					this{' '}
					<a href="https://www.thecocktaildb.com/api.php" target="_blank">
						link.
					</a>
				</p>
				<p>Made by Esin and Bonnie for GA-SEIR-826.</p>
			</div>
		);
	}
}

export default About;
