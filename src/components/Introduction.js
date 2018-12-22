import React from "react";
import BackgroundEffect from "./BackgroundEffect.js";

//material imports
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = theme => ({
  container: {
    overflowX: "hidden"
  },
  introduction: {
    position: "absolute",
    zIndex: 2
  },
  effect: {
    position: "absolute",
    zIndex: 1
  }
});

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.update);
  }

  update = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    this.setState({
      width,
      height
    });
  };

  render() {
    const { width, height } = this.state;
    const { classes, open } = this.props;
    return (
      <div className={classes.container} style={{ height: height }}>
        <div className={classes.effect}>
          <BackgroundEffect
            width={open ? width - drawerWidth - 16 : width - 16}
            height={height}
          />
        </div>
        <div
          className={classes.introduction}
          style={{ left: width / 2, top: height / 2 }}
        >
          Fraa
        </div>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Introduction);
