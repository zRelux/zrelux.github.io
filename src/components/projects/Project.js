import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

import ModalProject from "./ModalProject";
import { Divider } from "@material-ui/core";
const styles = theme => ({
  card: {},
  media: {
    objectFit: "contain"
  },
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 60,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`
  },
  description: {},
  interior: {
    padding: "10px 10px 0 10px"
  }
});

class Project extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { title, description, link, image, github } = this.props.item;

    const viewLink =
      link !== "null" ? (
        <Button size="small" color="primary" target="_blank" href={link}>
          View Live
        </Button>
      ) : null;

    const viewCode =
      github !== "null" ? (
        <Button size="small" color="primary" target="_blank" href={github}>
          View Code
        </Button>
      ) : null;

    return (
      <>
        <Card className={classes.card} elevation={6}>
          <CardMedia
            component="img"
            alt={title + " image"}
            className={classes.media}
            height="140"
            image={image}
            title={title + " image"}
          />
          <CardContent>
            <Divider />
            <div className={classes.interior}>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography component="p" className={classes.description}>
                {description}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            {viewLink}
            {viewCode}
            <Button size="small" color="primary" onClick={this.handleOpen}>
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Modal
          aria-labelledby="Project modal"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <ModalProject project={this.props.item} />
          </div>
        </Modal>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Project);
