import { Box, Checkbox, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { DefaultButton } from '../components/Buttons/DefaultButton';
import { EmailInput, PasswordInput } from '../components/Inputs/Inputs';

const Login: React.FC = () => {
  return (
    <Grid
      columns={12}
      direction={'row'}
      sx={{
        padding: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center'
      }}
    >
      <Grid item xs={6}>
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
            Acesse sua conta
          </Typography>
          <EmailInput id="login-email-input" label="E-mail" />
          <PasswordInput id="login-password-input" label="Senha" />
          <Box
            sx={{
              display: 'flex'
            }}
          >
            <Checkbox
              sx={{
                marginTop: '-10px'
              }}
            />
            <Typography variant="body1">Lembrar acesso</Typography>
          </Box>
          <DefaultButton text="Entrar" />
          <Box
            sx={{
              display: 'flex',
              alignItens: 'center'
            }}
          >
            <Typography variant="body1">Não tem conta?</Typography>
            <Link
              href="/cadastrar"
              underline="none"
              variant="body1"
              sx={{
                marginLeft: '.5rem'
              }}
            >
              Cadastrar
            </Link>
          </Box>
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
  );
};

export default Login;
