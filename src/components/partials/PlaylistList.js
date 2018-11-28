import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';


import green from '@material-ui/core/colors/green';

import './PlaylistList.scss';

const theme = createMuiTheme({
  palette: {
	primary: green,
  },
});


class PlaylistList extends Component {
	render() {
		const playlists = [
			{
				name: "This Is Queen",
				image: "https://images.unsplash.com/photo-1506628150-ab62050f199c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=539c1a20a3329320b77faae1b74d4c82&auto=format&fit=crop&w=1350&q=80",
			},
		]
		return (
		<MuiThemeProvider theme={theme}>
			<div style={{ padding: '10px 8%', fontSize: '15px' }}>
				<Grid container spacing={16}>

					{playlists.map( playlist => {
						return(
							<Grid item xs={12}>
								<Card className="playlist">
									<CardMedia
										className="playlist__media"
										image={playlist.image}
										title={playlist.name}
									/>
									<CardContent
										className="playlist__content"
									>

										<Typography variant="h3" color="textSecondary">
											{playlist.name}
											{console.log(this.props)}
										</Typography>

										<div>

											<Hidden smDown>
												<Fab className="playlist__btn playlist__btn--report" color="secondary" size="small">
													<ReportProblemIcon />
												</Fab>
											</Hidden>

											<Fab className="playlist__btn playlist__btn--play" color="primary">
												<PlayArrowIcon />
											</Fab>
							
										</div>

									</CardContent>
								</Card>
							</Grid>
						)
					} )}
				</Grid>
			</div>
		</MuiThemeProvider>
		);
	}	
}

export default PlaylistList;