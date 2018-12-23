import React from "react";
//material imports
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    overflowX: "hidden",
    overflowY: "hidden",
    flexGrow: 1,
    marginTop: 30
  },
  about: {
    textAlign: "center",
    textDecoration: "underline"
  },
  card: {
    marginTop: 67,
    alignItems: "auto"
  },
  name: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    fontSize: 20,
    color: "rgba(0, 0, 0, 0.87)"
  },
  desc: {
    textAlign: "left"
  },
  focus: {
    textAlign: "left",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.87)"
  }
});

class Projects extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.about}>
              Projects
            </Typography>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={9}>
            da
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <Divider />
          </Grid>
          <Grid item xs={1} sm={2} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Projects);
