import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import bg from '../images/bg.png';
import { addUser } from '../store/modules/UserSlice';
import { UserType } from '../types';
import { useAppDispatch } from '../store/hooks';

const Cadastro: React.FC = () => {
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = useCallback(
    (user: UserType) => {
      dispatch(addUser(user));
    },
    [dispatch, password, confirmPassword, firstName, lastName, email]
  );

  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);

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
              id="register-first-name-input"
              label="Nome"
              type="text"
              required
              fullWidth
              variant="outlined"
              sx={{
                margin: '1rem 0'
              }}
              onChange={ev => setFirstName(ev.target.value)}
              value={firstName || ''}
            />
            <TextField
              id="register-last-name-input"
              label="Sobrenome"
              type="text"
              required
              fullWidth
              variant="outlined"
              sx={{
                margin: '1rem 0'
              }}
              onChange={ev => setLastName(ev.target.value)}
              value={lastName || ''}
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
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                margin: '1rem 0',
                padding: '.8rem'
              }}
              onClick={() => handleSubmit(user)}
            >
              Cadastrar
            </Button>
          </Stack>
          <Stack></Stack>
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
// function dispatch(arg0: any) {
//   throw new Error('Function not implemented.');
// }
