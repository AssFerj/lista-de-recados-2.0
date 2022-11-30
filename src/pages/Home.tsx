import React from 'react';
import { Stack, Grid, Typography, Divider } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar';
import { TaskTitleInput, TaskDescInput } from '../components/Inputs/Inputs';
import { DefaultButton } from '../components/Buttons/DefaultButton';


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
            <DefaultButton text={'Cadastrar'} />
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
