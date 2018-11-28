import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import './GenreItem.scss';

class GenreItem extends Component {
	render() {
		
		const category = this.props.data;

		return (
		<ButtonBase
		  component={Link} to="/genre"
		  style={{
		  	backgroundImage: 'url(' + category.image + ')',
		  }}
		  //component={categoryLink}
		  className="category" >
			<Typography variant="h4" className="category__name" style={{color:'#fff'}}>
				{category.name}
			</Typography>
		</ButtonBase>
		);
	}	
}

export default GenreItem;