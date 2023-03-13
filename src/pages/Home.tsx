import { Container, Grid } from '@mui/material';
// import bg from "../images/home-bg.png";
import React from 'react';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Grid
        container
        style={{
          height: '100vh',
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '1.5rem'
        }}
      >
        <Container
          maxWidth="xl"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Grid item xl={12}>
            LEFT
          </Grid>
          <Grid item xl={12}>
            RIGHT
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
