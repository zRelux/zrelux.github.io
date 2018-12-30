import React from "react";

import Typing from "react-typing-animation";

//material imports
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: theme.spacing.unit
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px"
  },
  center: {
    WebkitAlignSelf: "center",
    alignSelf: "center"
  },
  newline: {}
});

class Showcard extends React.Component {
  viewWork = () => {
    var aboutSection = document.getElementById("About");
    window.scrollTo({
      top: aboutSection.offsetTop - 75,
      behavior: "smooth"
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={2}>
        <>
          <Typing loop speed={120}>
            <Typography variant="h5">Hi</Typography>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={2} />
            <Typography variant="h5">Ciao</Typography>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={4} />
            <Typography variant="h5">Ckemi</Typography>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={5} />
            <Typography variant="h5">Hello</Typography>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={5} />
          </Typing>
          <Typography variant="h5">I'm Leonardo Drici.</Typography>
        </>
        <div className={classes.newline}>
          <Typography variant="h5">I am a full stack developer.</Typography>
        </div>
        <div className={classes.center}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={this.viewWork}
          >
            View my work
          </Button>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Showcard);
