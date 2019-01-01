import React from "react";

import {
  Divider,
  Grid,
  Card,
  Typography,
  CardContent,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  languages: {
    display: "inline-block"
  },
  grid: {
    marginTop: 15
  },
  media: {
    objectFit: "cover"
  }
});

class Skill extends React.Component {
  render() {
    const { classes, group } = this.props;
    const { type, lang } = group;

    const languages = lang.map((item, i) => {
      return (
        <Grid item xs={12} sm={3} key={item.title}>
          <Card className={classes.card} elevation={6}>
            {item.image}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });

    return (
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {type}
          </Typography>
          <Divider />
          <Grid container className={classes.grid} spacing={24}>
            {languages}
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Skill);
