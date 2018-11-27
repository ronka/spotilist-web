import React, { Component } from 'react';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import './Category.scss';

class Category extends Component {
	render(props) {
		
		const category = this.props.data;

		return (
		<ButtonBase style={{
			backgroundImage: 'url(' + category.image + ')',
		}} className="category" >
			<Typography variant="h4" className="category__name" style={{color:'#fff'}}>
				{category.name}
			</Typography>
		</ButtonBase>
		);
	}	
}

export default Category;