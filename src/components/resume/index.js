import React from "react";

//Material imports
import {
  Typography,
  withStyles,
  Divider,
  Grid,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
    overflowX: "hidden",
    overflowY: "hidden",
    flexGrow: 1,
    marginTop: 30,
    marginBottom: 30
  },
  about: {
    textAlign: "center",
    textDecoration: "underline",
    marginBottom: 15
  },
  fab: {
    margin: theme.spacing.unit
  },
  socialIcon: {
    textAlign: "center",
    marginBottom: 30
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
              Resume
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} />
          <Grid item xs={8} sm={4}>
            <Grid container>
              <Grid item xs className={classes.socialIcon}>
                <Button
                  variant="outlined"
                  component="a"
                  href="https://drive.google.com/open?id=11Ri8KeGZdhFfo_cpZm1MXQPx66sTDgNy"
                  target="_blank"
                >
                  VIEW MY RESUME
                </Button>
              </Grid>
            </Grid>
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
