import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar';


const Home: React.FC = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Grid
        columns={12}
        container
        direction={'column'}
        sx={{
          padding: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItens: 'center',
          height: 'auto'
        }}
      >
        <Grid item xs={12} component="form">
          <Box
            sx={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItens: 'center'
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center'
              }}
            >
              Lista de Recados
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            padding: '2rem',
            width: '50%'
          }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Home;
