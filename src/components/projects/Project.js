import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    objectFit: "fit"
  }
});

class Project extends React.Component {
  render() {
    const { classes } = this.props;
    const {
      title,
      description,
      languages,
      link,
      image,
      github
    } = this.props.item;

    const viewCode =
      github !== "null" ? (
        <Button size="small" color="primary" target="_blank" href={github}>
          View Code
        </Button>
      ) : null;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title + " image"}
            className={classes.media}
            height="140"
            image={image}
            title={title + " image"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" target="_blank" href={link}>
            View Live
          </Button>
          {viewCode}
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Project);
