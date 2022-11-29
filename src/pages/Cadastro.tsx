import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { DefaultButton } from '../components/Buttons/DefaultButton';
import { EmailInput, FirstNameInput, LastNameInput, PasswordInput } from '../components/Inputs/Inputs';
import { useNavigate } from 'react-router';
import bg from '../images/bg.png';

const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  const login = navigate('/login');
  return (
    <Grid
      columns={12}
      container
      direction={'row'}
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        padding: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center',
        height: '100vh'
      }}
    >
      <Grid item 
        xl={3} 
        sm={8} 
        borderRadius={'10px'} 
        display='flex'
        flexDirection='column'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItens: 'center'
        }}
        component='form'
      >
        <Box
          borderRadius={'10px'}
          sx={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItens: 'center',
            backgroundColor: '#ffffff'
          }}
        >
          <Typography
            variant="h3"
            sx={{textAlign: 'center'}}
          >
            Crie sua conta
          </Typography>
          <Stack 
            direction='row'
            spacing={2}
            alignItems="center"
          >
            <FirstNameInput id="login-first-name-input" label="Nome" />
            <LastNameInput id="login-last-name-input" label="Sobrenome" />
          </Stack>
          <Stack>
            <EmailInput id="login-email-input" label="E-mail" />
          </Stack>
          <Stack
            direction='row'
            spacing={2}
            alignItems="center"
          >
            <PasswordInput id="login-password-input" label="Senha" />
            <PasswordInput id="login-conf-password-input" label="Confirmar Senha" />
          </Stack>
          <Stack>
            <DefaultButton text="Cadastrar" />
          </Stack>
          <Box
            sx={{
              display: 'flex',
              alignItens: 'center'
            }}
          >
            <Link href="login" underline="none" variant="body1">
              Voltar para o login
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cadastro;

