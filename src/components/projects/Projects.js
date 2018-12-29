import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Project from "./Project";

import LuxImage from "../../assets/img/LuxuryConstruction.png";
import AzieImage from "../../assets/img/AziendeExpo.png";

const styles = theme => ({
  root: {},
  project: {
    marginBottom: 15
  }
});

const projects = [
  {
    title: "Luxury Construction",
    description: "test",
    languages: "HTML, CSS, JavaScript, PHP, MySQL",
    link: "https://luxuryconstruction.co.uk/",
    image: LuxImage,
    github: "null"
  },
  {
    title: "Aziende Expo",
    description: "test",
    languages: "HTML, CSS, JavaScript, PHP, MySQL",
    link: "https://aziendeexpo.it/",
    image: AzieImage,
    github: "https://github.com/zRelux/AziendeExpo"
  }
];

class Projects extends React.Component {
  render() {
    const { classes, filter } = this.props;
    return (
      <div className={classes.root}>
        {projects.map((item, i) =>
          item.languages.includes(filter) ? (
            <div key={i} className={classes.project}>
              <Grid item xs={12} sm={4}>
                <Project item={item} />
              </Grid>
            </div>
          ) : null
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Projects);
