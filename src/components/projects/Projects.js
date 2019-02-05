import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Project from "./Project";

import LuxImage from "../../assets/img/LuxuryConstruction.png";
import AzieImage from "../../assets/img/AziendeExpo.png";
import LibImage from "../../assets/img/imageFrame.png";
import PubGames from "../../assets/img/logo.png";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginBottom: 30,
    paddingLeft: 15,
    paddingRight: 15
  },
  project: {
    marginBottom: 15
  },
  rem: {
    overflowX: "hidden"
  }
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
    title: "Library Managment",
    description: "Designed and developed a library managment system. ",
    languages: "Java, SQLite",
    link: "null",
    image: LibImage,
    github: "https://github.com/zRelux/librarymanagement",
    product:
      "Library managment system developed for local libraries. Main features are book notifications and data managment.",
    problems: "Manage book data and work with local database."
  },
  {
    title: "Pub Games",
    description:
      "Designing and developing a website for pub quizzes and games.",
    languages: "HTML, CSS, JavaScript, React.js, Node.js, MongoDB",
    link: "https://pubgames.netlify.com/",
    image: PubGames,
    github: "null",
    product: "Online pub games website, trivia game is available.",
    problems: "Setup data managment, and website handling."
  }
];

class Projects extends React.Component {
  render() {
    const { classes, filter } = this.props;
    const jobs = projects.map((item, i) =>
      item.languages.includes(filter) ? (
        <Grid item key={item.title} sm={6} xl={4} className={classes.project}>
          <Project item={item} className={classes.project} />
        </Grid>
      ) : null
    );
    return (
      <div className={classes.rem}>
        <Grid container className={classes.root} spacing={16}>
          {jobs}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Projects);
