import React from "react";

//Material imports
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import Courses from "./Courses";

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
  }
});

class CourseScreen extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.about}>
              Education
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} />
          <Grid item xs={8} sm={4}>
            <Courses />
          </Grid>
          <Grid item xs={2} sm={4} />
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

export default withStyles(styles, { withTheme: true })(CourseScreen);
