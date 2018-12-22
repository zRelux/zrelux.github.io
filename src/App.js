import React, { Component } from "react";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { green } from "@material-ui/core/colors/";

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
