import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { purple, green } from "@material-ui/core/colors/";

import Navigation from "./components/Navigation";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  status: {
    danger: "orange"
  }
});

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <Navigation />
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
