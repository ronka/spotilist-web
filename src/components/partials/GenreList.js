import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid'

import GenreItem from '../../components/partials/GenreItem';



class GenreList extends Component {
	render() {
		const genres = [
			{
				name: 'רוק',
				slug: 'rock',
				image: 'https://images.unsplash.com/photo-1504637929313-c8eebe7c27af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=03f18f5a17062544b8b92ee4189aef23&auto=format&fit=crop&w=1348&q=80'
			},
			{
				name: 'היפ הופ',
				slug: 'hip-hop',
				image: 'https://images.unsplash.com/photo-1527684002373-02a02a68e86f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1debe1a90ad0be0d448cd2b115bde98e&auto=format&fit=crop&w=1295&q=80'
			},
			{
				name: 'אינדי',
				slug: 'indie',
				image: 'https://images.unsplash.com/photo-1474959783111-a0f551bdad25?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ebfa447f1006e2e9d5afc531980cf73&auto=format&fit=crop&w=1350&q=80'
			},
		]
		return (
		<div style={{ padding: '10px 8%', fontSize: '15px' }}>
			<Grid container spacing={16}>

				{genres.map( genre => {
					return(
						<Grid item xs={6} sm={4} md={3}>
							<GenreItem data={genre} />
						</Grid>
					)
				} )}

			
			</Grid>
		</div>
		);
	}	
}

export default GenreList;