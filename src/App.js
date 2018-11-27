import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/Home';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/" exact component={Home} />
				</div>
			</Router>
		);
	}	
}

export default App;
