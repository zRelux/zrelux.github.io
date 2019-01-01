import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Project from "./Project";

import LuxImage from "../../assets/img/LuxuryConstruction.png";
import AzieImage from "../../assets/img/AziendeExpo.png";
import LibImage from "../../assets/img/imageFrame.png";

const styles = theme => ({
  root: {
    display: "inline-block",
    marginBottom: 15,
    marginLeft: 15,
    minWidth: 320
  },
  project: {}
});

const projects = [
  {
    title: "Luxury Construction",
    description:
      "Designed and developed the website of a construction company.",
    languages: "HTML, CSS, JavaScript, PHP, MySQL, Materializecss",
    link: "https://luxuryconstruction.co.uk/",
    image: LuxImage,
    github: "null",
    product:
      "Website of a construction company. Main features are the photo gallery and the services page. ",
    problems: "Develop a quality website with good UI and UX experience."
  },
  {
    title: "Aziende Expo",
    description: "Designed and developed an online expo system.",
    languages: "HTML, CSS, JavaScript, PHP, MySQL, Materializecss",
    link: "https://aziendeexpo.it/",
    image: AzieImage,
    github: "https://github.com/zRelux/AziendeExpo",
    product:
      "Website that works as an online expo system. Main features are the user managment, and paypal integration.",
    problems:
      "Develop a quality website with good UI and UX experience, user data privacy and managment."
  },
  {
    title: "Library Managment System",
    description: "Designed and developed a library managment system.",
    languages: "Java, SQLite",
    link: "null",
    image: LibImage,
    github: "https://github.com/zRelux/librarymanagement",
    product:
      "Library managment system developed for local libraries. Main features are book notifications and data managment.",
    problems: "Manage book data and work with local database."
  }
];

class Projects extends React.Component {
  render() {
    const { classes, filter } = this.props;
    return projects.map((item, i) =>
      item.languages.includes(filter) ? (
        <Grid key={i} item xs={12} sm={4} className={classes.root}>
          <Project item={item} className={classes.project} />
        </Grid>
      ) : null
    );
  }
}

export default withStyles(styles, { withTheme: true })(Projects);
