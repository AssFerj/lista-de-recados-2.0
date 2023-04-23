import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import UserType from '../../types/UserType';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/modules/usersSlice';

export default function Registerform() {
  const [user, setUser] = useState<UserType>({} as UserType);
  const [valid, setValid] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    user.firstName.length >= 3 || user.lastName.length >= 3 || user.email.length >= 3 || user.password.length >= 3
      ? setValid(true)
      : setValid(false);
  }, [user]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addUser(user));
    handleClear(user);
  };

  const handleClear = (user: UserType) => {
    setUser({ firstName: '', lastName: '', email: '', password: '', consfirmPassword: '' });
  };

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="Nome"
            autoFocus
            value={user.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Sobrenome"
            name="lastName"
            autoComplete="family-name"
            value={user.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={user.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="new-password"
            value={user.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="confirmPassword"
            label="Confirmar Senha"
            type="confirmPassword"
            id="confirmPassword"
            autoComplete="confirm-password"
            value={user.consfirmPassword}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Quero receber novidades, promoções e atualizações por e-mail."
          />
        </Grid>
      </Grid>
      <Button
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => handleSubmit()}
        disabled={!valid}
      >
        Cadastrar
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          Já tem uma conta?{' '}
          <Link href="/login" variant="body2">
            Acesse
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
