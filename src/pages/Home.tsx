import React from 'react';
import { Stack, Grid, Divider, Button } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar';
import { TaskTitleInput, TaskDescInput } from '../components/Inputs/Inputs';


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
        <Grid item xs={12}>
          <Stack 
            component="form"
            direction="row" 
            justifyContent="center"
            alignItems="center"
            spacing={2}>
            <TaskTitleInput id={'taskTitleInput'} label={'Título'}/>
            <TaskDescInput id={'taskDescInput'} label={'Descrição'}/>
            <Button
              variant="contained"
              size="large"
              sx={{
                margin: '1rem 0',
                padding: '.8rem'
              }}
            >
              Salvar
            </Button>
          </Stack>
        </Grid>
        <Divider />
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </>
  );
};

export default Home;
