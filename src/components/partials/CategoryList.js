import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid'

import Category from '../../components/partials/Category';

class CategoryList extends Component {
	render() {
		return (
		<div style={{ padding: '10px 8%', fontSize: '15px' }}>
			<Grid container spacing={16}>

				<Grid item xs={6} sm={4} md={3}>

					<Category name="Rock" />

				</Grid>
			
			</Grid>
		</div>
		);
	}	
}

export default CategoryList;