import React from "react";

//material imports
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import AboutIcon from "@material-ui/icons/Person";
import ProjectsIcon from "@material-ui/icons/Assessment";
import SkillsIcon from "@material-ui/icons/BarChart";
import EducationIcon from "@material-ui/icons/School";
import ContactIcon from "@material-ui/icons/Email";
import ResumeIcon from "@material-ui/icons/Description";

import ProfileCard from "./introduction/ProfileCard";

import Introduction from "./introduction/";
import About from "./about/";
import Projects from "./projects/";
import Skills from "./skills/";
import Education from "./education/";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  toolbar: {
    marginBottom: 50
  },
  middleContent: {
    margingLeft: 100
  }
});

const nav = [
  {
    title: "About",
    icon: <AboutIcon />
  },
  {
    title: "Projects",
    icon: <ProjectsIcon />
  },
  {
    title: "Skills",
    icon: <SkillsIcon />
  },
  {
    title: "Education",
    icon: <EducationIcon />
  },
  {
    title: "Contact",
    icon: <ContactIcon />
  },
  {
    title: "Resume",
    icon: <ResumeIcon />
  }
];
class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedIndex: 0
    };
  }

  handleToggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  handleListItemClick = (event, index, title) => {
    this.setState({ selectedIndex: index });
    window.scrollTo({
      top: this.refs[title].offsetTop - 75,
      behavior: "smooth"
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classNames(classes.appBar)}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Toggle drawer"
              onClick={this.handleToggleDrawer}
              className={classNames(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Personal Porfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <div className={classes.profile}>
            <ProfileCard />
          </div>
          <List component="nav">
            {nav.map((section, index) => (
              <ListItem
                button
                selected={this.state.selectedIndex === index}
                onClick={event =>
                  this.handleListItemClick(event, index, section.title)
                }
                key={section.title}
              >
                <ListItemIcon>{section.icon}</ListItemIcon>
                <ListItemText primary={section.title} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <section id="Introduction" ref="Introduction">
            <Introduction open={open} />
          </section>
          <section id="About" ref="About">
            <About />
          </section>
          <section id="Projects" ref="Projects">
            <Projects />
          </section>
          <section id="Skills" ref="Skills">
            <Skills />
          </section>
          <section id="Education" ref="Education">
            <Education />
          </section>
        </main>
      </div>
    );
  }
}
//TODO: Fix projects tab for mobile and desktop
export default withStyles(styles, { withTheme: true })(Navigation);
