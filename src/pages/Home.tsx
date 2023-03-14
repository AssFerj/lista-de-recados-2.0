import { Box, Button, Container, Grid, Typography } from '@mui/material';
// import bg from "../images/home-bg.png";
import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import TaskForm, { list } from '../components/TaskForm/TaskForm';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
              margin: '1rem'
            }}
          >
            {list.map(item => {
              return (
                <Box
                  key={item}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    padding: '.5rem',
                    marginBottom: '1rem',
                    borderRadius: '.5rem'
                  }}
                >
                  <Typography variant="body1" padding={'.5rem 1rem'}>
                    {item}
                  </Typography>
                  <Button>
                    <EditIcon />
                  </Button>
                  <Button>
                    <DeleteIcon />
                  </Button>
                </Box>
              );
            })}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
