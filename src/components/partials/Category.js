import React, { Component } from 'react';

import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography';

class Category extends Component {
	render() {
		return (
		<ButtonBase style={{
			maxWidth: 275,
			height: 150,
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			backgroundColor: 'red',
			borderRadius: 5,
			alignItems: 'center'
		}}>
			<Typography variant="h4" style={{color:'#fff'}}>
				{this.props.name}
			</Typography>
		</ButtonBase>
		);
	}	
}

export default Category;