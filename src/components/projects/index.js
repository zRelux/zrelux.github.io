import React from "react";
//material imports
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import Dashboard from "@material-ui/icons/Dashboard";
import Code from "@material-ui/icons/Code";

import NavPills from "../../ui/NavPills/NavPills.jsx";

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
          <Grid item xs={2} />
          <Grid item xs={8}>
            <NavPills
              horizontal={{
                tabsGrid: { xs: 12, sm: 4, md: 4 },
                contentGrid: { xs: 12, sm: 8, md: 8 }
              }}
              tabs={[
                {
                  tabButton: "All",
                  tabIcon: Dashboard,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                      </p>
                      <br />
                      <p>
                        Dramatically visualize customer directed convergence
                        without revolutionary ROI. Collaboratively administrate
                        empowered markets via plug-and-play networks.
                        Dynamically procrastinate B2C users after installed base
                        benefits.
                      </p>
                      <br />
                      <p>This is very nice.</p>
                    </span>
                  )
                },
                {
                  tabButton: "PHP",
                  tabIcon: Code,
                  tabContent: (
                    <span>
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                      </p>
                      <br />
                      <p>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </p>
                    </span>
                  )
                }
              ]}
            />
          </Grid>
          <Grid item xs={2} />
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
