import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
	primary: green,
  },
});


class Header extends Component {
	render() {
		return (
		<MuiThemeProvider theme={theme}>
			<AppBar position="static" color="primary" >
				<Toolbar>
					<Grid alignContent="center" xs={12}>
						<Typography variant="title" align="center" color="inherit">
							React & Material-UI Sample Application
						</Typography>
					</Grid>
				</Toolbar>
			</AppBar>
		</MuiThemeProvider>
		);
	}	
}

export default Header;
