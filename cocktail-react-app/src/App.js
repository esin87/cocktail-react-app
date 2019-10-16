import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cocktail from './Cocktail';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<h1>React Cocktails</h1>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/about">About</Link>
					</nav>
				</header>
				<main>
					<Switch>
						<Route exact={true} path="/" component={Home} />
						<Route exact={true} path="/about" component={About} />
						<Route
							exact={true}
							path="/cocktail/:strDrink"
							render={routerProps => (
								<Cocktail
									match={routerProps.match}
									strDrink={this.props.strDrink}
								/>
							)}
						/>
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
