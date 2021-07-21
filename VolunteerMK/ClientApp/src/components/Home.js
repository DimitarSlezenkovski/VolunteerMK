import React from 'react';
import Container from 'reactstrap/lib/Container';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core'; 
import Search from './common/Search';
import {Card} from './common/Card.js';
import {ads} from '../repository/mockData'


const Home = () => {
  // static displayName = Home.name;

  return (
    <>
      <Container>
        <Grid style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <Typography variant="h5" component="h5" gutterBottom>{"Листа на организации кои имаат потреба од волонтери"}</Typography>
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <Search />
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          {
            <Card ads={ads} />
          }
        </Grid>
      </Container>
    </>
  );
}
export default Home;
