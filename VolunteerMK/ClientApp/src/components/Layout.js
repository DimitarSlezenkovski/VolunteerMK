import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { NavMenu } from "./common/NavMenu";
import Footer from "./common/Footer";
import Sponsors from "./common/Sponsors";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 600,
      lg: 900,
      xl: 1200,
      tablet: 1024,
    },
  },
});

export class Layout extends Component {
  static displayName = Layout.name;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavMenu />
        <ThemeProvider theme={theme}>
        {this.props.children}
        </ThemeProvider>
        <Sponsors />
        <Footer />
        </>
    );
  }
}
