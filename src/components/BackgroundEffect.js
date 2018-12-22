import React from "react";
//material imports
import { withStyles } from "@material-ui/core/styles";

import Particles from "react-particles-js";

const drawerWidth = 240;

const styles = theme => ({
  body: {
    backgroundColor: "#222"
  }
});

class BackgroundEffect extends React.Component {
  render() {
    const { classes, width, height } = this.props;
    console.log(classes, width, height);
    return (
      <Particles
        canvasClassName={classes.body}
        width={width}
        height={height}
        params={{
          particles: {
            number: {
              value: 65
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      />
    );
  }
}
export default withStyles(styles, { withTheme: true })(BackgroundEffect);
