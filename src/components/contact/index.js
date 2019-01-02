import React from "react";

//Material imports
import { TwitterIcon, LinkedinIcon, EmailIcon } from "react-share";
import { Typography, withStyles, Divider, Grid, Fab } from "@material-ui/core";

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
              Contact
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} />
          <Grid item xs={8} sm={4}>
            <Grid container>
              <Grid item xs className={classes.socialIcon}>
                <Fab
                  aria-label="twitter"
                  className={classes.fab}
                  component="a"
                  href="https://twitter.com/Relux_EU"
                  target="_blank"
                >
                  <TwitterIcon size={48} round />
                </Fab>
              </Grid>
              <Grid item xs className={classes.socialIcon}>
                <Fab
                  aria-label="mail"
                  className={classes.fab}
                  component="a"
                  href="mailto:leonard.drici@gmail.com"
                  target="_blank"
                >
                  <EmailIcon size={48} round />
                </Fab>
              </Grid>
              <Grid item xs className={classes.socialIcon}>
                <Fab
                  aria-label="linkedin"
                  className={classes.fab}
                  component="a"
                  href="https://www.linkedin.com/in/leonardo-drici/"
                  target="_blank"
                >
                  <LinkedinIcon size={48} round />
                </Fab>
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
