import React from "react";

import {
  Divider,
  Grid,
  Card,
  Typography,
  CardContent,
  withStyles,
  CardMedia
} from "@material-ui/core";

const styles = theme => ({
  media: {
    objectFit: "contain"
  },
  date: {
    textAlign: "right"
  }
});

class Course extends React.Component {
  render() {
    const { classes } = this.props;
    const { course, image, date, info } = this.props.course;
    return (
      <Card elevation={6}>
        <CardMedia
          component="img"
          alt={course + " image"}
          className={classes.media}
          height="140"
          image={image}
          title={course + " image"}
        />
        <CardContent>
          <Divider />
          <Typography variant="h6">{course}</Typography>
          <Typography gutterBottom variant="overline" className={classes.date}>
            {date}
          </Typography>
          {info.map((item, i) => (
            <Typography key={item} variant="body2" gutterBottom>
              {item}
            </Typography>
          ))}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Course);
