import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import bg from '../images/bg.png';
import { createUser } from '../store/modules/UsersSlice';
import { useAppDispatch } from '../store/hooks';
import { UserType } from '../types';
import { useNavigate } from 'react-router-dom';

const Cadastro: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  // const userRedux = useAppSelector(selectUser);

  const clear = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = () => {
    const newUser: UserType = {
      name: '',
      email: '',
      password: '',
      tasks: [],
      isLogged: false
    };

    if (
      password !== confirmPassword ||
      password === '' ||
      confirmPassword === '' ||
      name === '' ||
      email === '' ||
      name.length < 3 ||
      email.length < 3 ||
      password.length < 3
    ) {
      alert('As senhas devem ser iguais e todos os campos devem ser preenchidos');
      clear();
      return;
    }
    dispatch(createUser(newUser));
    clear();
    navigate('/login');
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
        borderRadius={'10px'}
        display="flex"
        flexDirection="column"
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
          <Typography variant="h3" sx={{ textAlign: 'center' }}>
            Crie sua conta
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" width={'100%'}>
            <TextField
              id="register-name-input"
              label="Nome"
              type="text"
              required
              fullWidth
              variant="outlined"
              sx={{
                margin: '1rem 0'
              }}
              onChange={ev => setName(ev.target.value)}
              value={name || ''}
            />
          </Stack>
          <Stack>
            <TextField
              id="register-email-input"
              label="E-mail"
              type="email"
              required
              fullWidth
              variant="outlined"
              sx={{
                margin: '1rem 0'
              }}
              onChange={ev => setEmail(ev.target.value)}
              value={email || ''}
            />
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              id="register-password-input"
              label="Senha"
              type="password"
              required
              fullWidth
              variant="outlined"
              sx={{
                margin: '1rem 0'
              }}
              onChange={ev => setPassword(ev.target.value)}
              value={password || ''}
            />
            <TextField
              id="register-conf-password-input"
              label="Confirmar Senha"
              type="password"
              required
              fullWidth
              variant="outlined"
              sx={{
                margin: '1rem 0'
              }}
              onChange={ev => setConfirmPassword(ev.target.value)}
              value={confirmPassword || ''}
            />
          </Stack>
          <Stack>
            <Button
              variant="contained"
              size="large"
              sx={{
                margin: '1rem 0',
                padding: '.8rem'
              }}
              onClick={() => handleSubmit()}
            >
              Cadastrar
            </Button>
          </Stack>
          <Box
            sx={{
              display: 'flex',
              alignItens: 'center'
            }}
          >
            <Button href="login" variant="text">
              Voltar para o login
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cadastro;

// function useAppSelector(state: any) {
//   throw new Error('Function not implemented.');
// }
// function dispatch(arg0: any) {
//   throw new Error('Function not implemented.');
// }
