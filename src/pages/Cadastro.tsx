import { Alert, Box, Button, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import bg from '../images/bg.png';

const Cadastro: React.FC = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const login = navigate('/login');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // const handleSubmit = () => {

  // };

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
      <Grid item position={'absolute'}>
        <Alert variant="filled" severity="success">
        This is a success alert — check it out!
        </Alert>
      </Grid>
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
              id="login-first-name-input"
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
              id="login-email-input"
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
              id="login-email-input"
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
              id="login-password-input"
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
              id="login-conf-password-input"
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
