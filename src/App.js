import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navigation from "./components/Navigation";
import "./assets/css/main.css";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#04C2C9"
    },
    secondary: {
      main: "#1e842d"
    },
    info: {
      main: "#e25c1d"
    },
    warning: {
      main: "#efc610"
    },
    error: {
      main: "#ef0e0e"
    }
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
