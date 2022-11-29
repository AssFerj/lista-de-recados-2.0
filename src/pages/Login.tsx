import { Box, Checkbox, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { DefaultButton } from '../components/Buttons/DefaultButton';
import { EmailInput, PasswordInput } from '../components/Inputs/Inputs';
import { useNavigate } from 'react-router';
import bg from '../images/bg.png';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const cadastro = navigate('/cadastro');
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
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItens: 'center'
          }}
          component='form'>
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
              href="cadastro"
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
    </Grid>
  );
};

export default Login;
