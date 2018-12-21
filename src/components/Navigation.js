import React from "react";

import { withStyles } from "@material-ui/core/styles";

//components
import PropTypes from "prop-types";

//Navigation

const styles = theme => ({});

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <main>
          <div />
          <p>Sorry no react router</p>
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Navigation);
