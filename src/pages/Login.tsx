import { Box, Button, Checkbox, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import bg from '../images/bg.png';
import { useAppSelector } from '../store/hooks';
import { addLog } from '../store/modules/LoginSlice';
import { selectUserById } from '../store/modules/UsersSlice';

const Login: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const UserLogged = useAppSelector(state => selectUserById(state, email));

  const clear = () => {
    setLoginEmail('');
    setLoginPassword('');
    setIsLogged(false);
  };

  const handleLogin = () => {
    const newLog: any = {
      loginEmail: '',
      loginPassword: '',
      isLogged: false
    };

    if (loginEmail === 'admin@gmail.com' && loginPassword === 'admin') {
      UserLogged?.isLogged(true);
      alert('As senhas devem ser iguais e todos os campos devem ser preenchidos');
      clear();
      return;
    }
    dispatch(addLog(newLog));
    clear();
    navigate('/');
  };

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
      <Grid
        item
        xl={3}
        sm={8}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItens: 'center'
        }}
        component="form"
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
            sx={{
              textAlign: 'center'
            }}
          >
            Acesse sua conta
          </Typography>
          <TextField
            id="login-email-input"
            label="E-mail"
            type="email"
            required
            variant="outlined"
            sx={{
              margin: '1rem 0'
            }}
            onChange={ev => setLoginEmail(ev.target.value)}
            value={loginEmail || ''}
          />
          <TextField
            id="login-password-input"
            label="Senha"
            type="password"
            required
            variant="outlined"
            sx={{
              margin: '1rem 0'
            }}
            onChange={ev => setLoginPassword(ev.target.value)}
            value={loginPassword || ''}
          />
          <Box
            sx={{
              display: 'flex'
            }}
          >
            <Checkbox
              sx={{
                marginTop: '-10px'
              }}
              checked={isLogged}
              onChange={ev => setIsLogged(ev.target.checked)}
            />
            <Typography variant="body1">Lembrar acesso</Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            sx={{
              margin: '1rem 0',
              padding: '.8rem'
            }}
          >
            Entrar
          </Button>
          <Box
            sx={{
              display: 'flex',
              alignItens: 'center'
            }}
          >
            <Button href="cadastro" variant="text">
              N??o tem conta?
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
function navigate(arg0: string) {
  throw new Error('Function not implemented.');
}

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
