import React, { PureComponent } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles/colorManipulator";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    position: "relative",
    margin: 'auto',
    borderRadius: 2,
    background: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      background: fade(theme.palette.common.white, 0.25)
    },
    "& $input": {
      transition: theme.transitions.create("width"),
      width: 200,
      "&:focus": {
        width: 250
      }
    }
  },
  search: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    font: "inherit",
    padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${
      theme.spacing.unit
    }px ${theme.spacing.unit * 9}px`,
    border: 0,
    display: "block",
    verticalAlign: "middle",
    whiteSpace: "normal",
    background: "none",
    margin: 0, // Reset for Safari
    color: "inherit",
    width: "100%",
    "&:focus": {
      outline: 0
    }
  }
});

class NavBar extends PureComponent {
  state = {
    search: ""
  };
  handleInput = event => {
    this.setState({ search: event.target.value });
  };
  submit = () => {
      this.props.onSubmit(this.state.search)
  }
  keyPress = (event) => {
    if(event.keyCode === 13){
        this.submit()
    }
  }

  render() {
    const { classes, width } = this.props;
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Youtube Example
          </Typography>
          <div
            className={classes.root}
            style={{ display: isWidthUp("sm", width) ? "block" : "none" }}
          >
            <div className={classes.search} onClick={this.onSubmit}>
              <SearchIcon />
            </div>
            <input
                onKeyDown={this.keyPress}
                id="docsearch-input"
                ref={node => {
                    this.input = node;
                }}
                onChange={this.handleInput}
                className={classes.input}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(withWidth()(NavBar));
