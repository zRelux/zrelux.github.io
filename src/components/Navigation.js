import React from "react";

import { withStyles } from "@material-ui/core/styles";

//components
import PropTypes from "prop-types";

//Navigation
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";

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
          <Switch>
            <Route path="/" exact render={props => <p>text</p>} />
            <Route path="/api" exact render={props => <p>api</p>} />
          </Switch>
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles, { withTheme: true })(Navigation));
