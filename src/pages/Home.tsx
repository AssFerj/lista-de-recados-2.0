import React, { useState } from 'react';
import { Stack, Grid, Button, TextField } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar/ResponsiveAppBar';
import bg from '../images/bg.png';

const Home: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');

  return (
    <>
      <ResponsiveAppBar />
      <Grid
        columns={12}
        container
        direction={'column'}
        spacing={2}
        sx={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: '3rem',
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'start',
          alignItens: 'center',
          height: '100vh'
        }}
      >
        <Grid
          item
          spacing={2}
          sx={{
            background: '#ffffff',
            borderRadius: '10px'
          }}
        >
          <Stack component="form" direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <TextField
              id="task-title-input"
              label="Título"
              type="text"
              required
              variant="outlined"
              sx={{
                margin: '1rem 0'
              }}
              onChange={ev => setTaskTitle(ev.target.value)}
              value={taskTitle || ''}
            />
            <TextField
              id="task-description-input"
              label="Descrição"
              type="text"
              required
              variant="outlined"
              sx={{
                margin: '1rem 0'
              }}
              onChange={ev => setTaskDescription(ev.target.value)}
              value={taskDescription || ''}
            />
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
          <Stack component="div" direction="row" justifyContent="center" alignItems="center" spacing={2}>
            546464
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
