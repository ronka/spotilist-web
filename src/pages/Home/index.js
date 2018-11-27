import React, { Component } from 'react';

import Header from '../../components/global/Header';
import CategoryList from '../../components/partials/CategoryList';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<CategoryList />
			</div>
		);
	}	
}

export default Home;
