import React from "react";

//Material imports
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
//Icons
import Dashboard from "@material-ui/icons/Dashboard";
import Code from "@material-ui/icons/Code";
import NavPills from "../../ui/NavPills/NavPills.jsx";

import Projects from "./Projects";

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

class ProjectsScreen extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.about}>
              Projects
            </Typography>
          </Grid>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <NavPills
              horizontal={{
                tabsGrid: { xs: 12, sm: 12, md: 2 },
                contentGrid: { xs: 12, sm: 12, md: 10 }
              }}
              tabs={[
                {
                  tabButton: "All",
                  tabIcon: Dashboard,
                  tabContent: <Projects filter=" " />
                },
                {
                  tabButton: "PHP",
                  tabIcon: Code,
                  tabContent: <Projects filter="PHP" />
                },
                {
                  tabButton: "Java",
                  tabIcon: Code,
                  tabContent: <Projects filter="Java," />
                }
              ]}
            />
          </Grid>
          <Grid item xs={1} sm={2} />
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <Divider />
          </Grid>
          <Grid item xsxs={1} sm={2} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProjectsScreen);
/* <NavPills
horizontal={{
                tabsGrid: { xs: 12, sm: 12, md: 2 },
                contentGrid: { xs: 12, sm: 12, md: 10 }
              }}
              tabs={[
                {
                  tabButton: "All",
                  tabIcon: Dashboard,
                  tabContent: <Projects filter=" " />
                },
                {
                  tabButton: "PHP",
                  tabIcon: Code,
                  tabContent: <Projects filter="PHP" />
                }
              ]}
            />

               */
