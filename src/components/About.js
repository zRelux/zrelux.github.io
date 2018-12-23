import React from "react";
//material imports
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

// core components
import Card from "./Card/Card.jsx";
import CardAvatar from "./Card/CardAvatar.jsx";
import CardBody from "./Card/CardBody.jsx";

import avatar from "../assets/img/faces/avatar.JPG";

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

class Introduction extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.about}>
              About
            </Typography>
          </Grid>
          <Grid item xs={1} sm={2} />
          <Grid item xs={10} sm={8}>
            <Card profile className={classes.card}>
              <CardAvatar profile>
                <img src={avatar} alt="avatar" />
              </CardAvatar>
              <CardBody profile>
                <Typography variant="h4" className={classes.name} gutterBottom>
                  Leonardo Drici
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.desc}
                  gutterBottom
                >
                  I'm a Full Stack Developer based in London, Uk. I have serious
                  passion for developing amazing websites and mobile apps. I
                  enjoy developing apps designed beautifully and I often
                  challenge myself trying to get the best UI and UX experience I
                  can offer.
                </Typography>
                <Typography
                  variant="body2"
                  className={classes.focus}
                  gutterBottom
                >
                  <strong>Current Focus:</strong> React // Node.js // Express.js
                </Typography>
              </CardBody>
            </Card>
          </Grid>
          <Grid item xs={1} sm={2} />
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

export default withStyles(styles, { withTheme: true })(Introduction);
