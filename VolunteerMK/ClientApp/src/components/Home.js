import React from "react";
import Container from "reactstrap/lib/Container";
import { Grid } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Search from "./common/Search";
import { Card } from "./common/Card.js";
import { ads } from "../repository/mockData";

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

const Home = () => {
  // static displayName = Home.name;

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginTop: "4vh",
        }}
      >
        <Typography variant="h5" component="h5" style={{ marginTop: "6.5vh" }}>
          {"Листа на организации кои имаат потреба од волонтери"}
        </Typography>
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          marginTop: "4vh",
        }}
      >
        <Search />
      </Grid>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "4vh",
        }}
      >
        <Grid
          item
          container
          sm={6}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card ads={ads} />
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
