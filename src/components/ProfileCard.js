import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// core components
import GridItem from "./Grid/GridItem.jsx";
import GridContainer from "./Grid/GridContainer.jsx";
import Card from "./Card/Card.jsx";
import CardAvatar from "./Card/CardAvatar.jsx";
import CardBody from "./Card/CardBody.jsx";

import avatar from "../assets/img/faces/avatar.JPG";

const styles = theme => ({
  card: {
    width: 200,
    height: 215,
    marginLeft: 20,
    marginTop: 67
  },
  name: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    fontSize: 20,
    color: "rgba(0, 0, 0, 0.87)"
  },
  jobTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.87)"
  },
  cardAvatar: {
    overflowX: "hidden",
    overflowY: "hidden"
  }
});

function ProfileCard(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.cardAvatar}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={2}>
            <Card profile className={classes.card}>
              <CardAvatar profile>
                <img src={avatar} alt="avatar" />
              </CardAvatar>
              <CardBody profile>
                <Typography variant="h4" className={classes.name}>
                  Leonardo Drici
                </Typography>
                <Typography variant="body1" className={classes.jobTitle}>
                  Full Stack Developer
                </Typography>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ProfileCard);
