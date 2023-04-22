import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Registerform() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required fullWidth id="lastName" label="Sobrenome" name="lastName" autoComplete="family-name" />
        </Grid>
        <Grid item xs={12}>
          <TextField required fullWidth id="email" label="Email" name="email" autoComplete="email" />
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
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Quero receber novidades, promoções e atualizações por e-mail."
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Cadastrar
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          Já tem uma conta?{' '}
          <Link href="#" variant="body2">
            Acesse
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
