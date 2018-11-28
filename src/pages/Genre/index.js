import React, { Component } from 'react';

import Header from '../../components/global/Header';
import PlaylistList from '../../components/partials/PlaylistList';

class Genre extends Component {
	render() {
		return (
			<div>
				<Header />
				<PlaylistList />
			</div>
		);
	}	
}

export default Genre;
