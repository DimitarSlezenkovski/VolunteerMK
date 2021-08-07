import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { NavMenu } from "./common/NavMenu";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
      tablet: 1024,
    },
  },
});

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <ThemeProvider theme={theme}>
      <NavMenu />
        {this.props.children}
      </ThemeProvider>
    );
  }
}
