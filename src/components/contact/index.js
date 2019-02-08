import React from "react";

//Material imports
import { SocialIcon } from "react-social-icons";
import { Typography, withStyles, Divider, Grid } from "@material-ui/core";

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
                <SocialIcon url="https://github.com/zRelux" />
              </Grid>
              <Grid item xs className={classes.socialIcon}>
                <SocialIcon url="mailto:leonard.drici@gmail.com" />
              </Grid>
              <Grid item xs className={classes.socialIcon}>
                <SocialIcon url="https://www.linkedin.com/in/leonardo-drici/" />
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
