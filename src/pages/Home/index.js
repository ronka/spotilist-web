import React, { Component } from 'react';

import Header from '../../components/global/Header';
import GenreList from '../../components/partials/GenreList';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<GenreList />
			</div>
		);
	}	
}

export default Home;
