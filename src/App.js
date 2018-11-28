import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home';
import Genre from './pages/Genre';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/" exact component={Home} />
					<Route path="/genre" exact component={Genre} />
				</div>
			</Router>
		);
	}	
}

export default App;
