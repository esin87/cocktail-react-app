import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Cocktail from './Cocktail';
import Random from './Random';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<nav>
						<div>
							<h1>React Cocktails</h1>
						</div>
						<div>
							<Link to="/">Home | </Link>
						</div>
						<div>
							<Link to="/about">About </Link>
						</div>
					</nav>
				</header>
				<main>
					<Switch>
						<Route exact={true} path="/" component={Home} />
						<Route exact={true} path="/about" component={About} />
						<Route
							path="/cocktail/:strDrink"
							render={routerProps => (
								<Cocktail
									match={routerProps.match}
									strDrink={this.props.strDrink}
								/>
							)}
						/>
						<Route exact={true} path="/random" component={Random} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
