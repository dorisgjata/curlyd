import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import logo from '../assests/logo.svg';

class TopAppBar extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar className={classes.toolbar} position="static">
					<Toolbar variant="dense">
						<IconButton aria-label="menu">
							<MenuIcon />
						</IconButton>
						<div color="contrastText" className="typing">curlyD</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

TopAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};
const styles = {
	root: {
		flexGrow: 1
	},
	toolbar: {
		backgroundColor: 'primary'
	}
};
export default withStyles(styles)(TopAppBar);
