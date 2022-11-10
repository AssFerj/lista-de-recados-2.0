import { Paper, Typography } from '@mui/material';
import React from 'react';
import { DefaultButton } from '../components/Buttons/DefaultButton';
import { EmailInput, PasswordInput } from '../components/Inputs/Inputs';

const Login: React.FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: '90vh',
        margin: '2rem',
        padding: '3rem',
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
        Acesse sua conta
      </Typography>
      <EmailInput id="login-email-input" label="E-mail" />
      <PasswordInput id="login-password-input" label="Senha" />
      <DefaultButton text="Entrar" />
    </Paper>
  );
};

export default Login;
