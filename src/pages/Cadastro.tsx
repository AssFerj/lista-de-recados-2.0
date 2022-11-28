import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { DefaultButton } from '../components/Buttons/DefaultButton';
import { EmailInput, FirstNameInput, LastNameInput, PasswordInput } from '../components/Inputs/Inputs';

const Login: React.FC = () => {
  return (
    <Grid
      columns={12}
      container
      direction={'row'}
      sx={{
        padding: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center',
        height: '100vh'
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          padding: '2rem',
          width: '50%'
        }}
      ></Grid>
      <Grid item xs={6} component="form">
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
            Crie sua conta
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <FirstNameInput id="login-first-name-input" label="Nome" />
            <LastNameInput id="login-last-name-input" label="Sobrenome" />
          </Stack>
          <EmailInput id="login-email-input" label="E-mail" />
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
            <PasswordInput id="login-password-input" label="Senha" />
            <PasswordInput id="login-conf-password-input" label="Confirmar Senha" />
          </Stack>
          <DefaultButton text="Cadastrar" />
          <Box
            sx={{
              display: 'flex',
              alignItens: 'center'
            }}
          >
            <Link href="#" underline="none" variant="body1">
              Voltar
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
