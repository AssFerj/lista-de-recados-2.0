import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import LogedUserType from '../../types/LogedUserType';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectAll } from '../../store/modules/usersSlice';

export default function LoginForm() {
  const [user, setUser] = useState<LogedUserType>({} as LogedUserType);
  const UsersRedux = useAppSelector(selectAll);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    handleClear();
  }, []);

  const handleClear = () => {
    setUser({ email: '', password: '' });
  };

  const handleAddLogedUser = (log: LogedUserType) => {
    const index = UsersRedux.find(item => item.email === user.email);
    // const newLogedUser = {}
    // setUser({ email: index?.email, password: index?.password });
    // dispatch();
  };
  return (
    <>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          value={user.email}
          autoComplete="email"
          onChange={handleChange}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          value={user.password}
          autoComplete="current-password"
          onChange={handleChange}
        />
        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembrar acesso" />
        <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Entrar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Esqueceu a senha?
            </Link>
          </Grid>
          <Grid item>
            Não tem uma conta?{' '}
            <Link href="/cadastro" variant="body2">
              Cadastre-se
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
