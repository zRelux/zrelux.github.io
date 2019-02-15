import React from "react";

//material imports
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typist from "react-typist";

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
  state = {
    typing: true
  };

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };

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
          {this.state.typing ? (
            <Typist
              onTypingDone={this.done}
              stdTypingDelay={250}
              avgTypingDelay={250}
              cursor={{ show: false }}
            >
              <Typography variant="h5">Hi</Typography>
              <Typist.Backspace count={2} delay={200} />
              <Typography variant="h5">Ciao</Typography>
              <Typist.Backspace count={4} delay={200} />
              <Typography variant="h5">Ckemi</Typography>
              <Typist.Backspace count={5} delay={200} />
              <Typography variant="h5">Hello</Typography>
              <Typist.Backspace count={5} delay={200} />
              <Typography variant="h5">こんにちは</Typography>
              <Typist.Backspace count={5} delay={200} />
            </Typist>
          ) : (
            ""
          )}

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
