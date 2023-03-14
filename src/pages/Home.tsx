import { Container, Grid } from '@mui/material';
// import bg from "../images/home-bg.png";
import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import TaskForm from '../components/TaskForm/TaskForm';

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
          <AppBar />
          <Grid
            item
            xl={12}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              maxWidth: '30%',
              padding: '1rem',
              margin: '1rem',
              borderRadius: '.5rem'
            }}
          >
            <TaskForm />
          </Grid>
          <Grid
            item
            xl={12}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: '1rem',
              margin: '1rem',
              borderRadius: '.5rem'
            }}
          >
            RIGHT
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
