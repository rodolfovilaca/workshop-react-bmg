import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#f99d1c', 0.15),
    '&:hover': {
      backgroundColor: fade('#f99d1c', 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'orange',
  },
  inputRoot: {
    color: 'black',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Navbar extends PureComponent {
	state = {
		search: ""
	};
	handlerInput = event => {
		this.setState({ search: event.target.value });
	};
	keyPress = (event) => {
		if(event.keyCode === 13)
			this.props.onSubmit(this.state.search);
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">					
					<Toolbar style={{ backgroundColor: 'white' }}>
            <Typography className={classes.title} variant="title" color="inherit" noWrap>
              <img alt="Banco BMG" src="https://www.bancobmg.com.br/Site/Content/assets/img/logos/logo-bmg.svg" style={{'width': 195, 'height': 79, marginTop: 20}} />
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <Input
                  placeholder="Search…"
                  disableUnderline
                  onChange={this.handlerInput}
                  onKeyDown={this.keyPress}
                  classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                  }}
              />
            </div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Navbar);