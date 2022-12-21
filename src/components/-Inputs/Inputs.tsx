import { TextField } from '@mui/material';
import React from 'react';

interface InputProps {
  id: string;
  label: string;
}

const FirstNameInput: React.FC<InputProps> = ({ id, label }) => {
  return (
    <TextField
      id={id}
      label={label}
      type="text"
      required
      variant="outlined"
      sx={{
        margin: '1rem 0'
      }}
    />
  );
};
const LastNameInput: React.FC<InputProps> = ({ id, label }) => {
  return (
    <TextField
      id={id}
      label={label}
      type="text"
      required
      variant="outlined"
      sx={{
        margin: '1rem 0'
      }}
    />
  );
};
const EmailInput: React.FC<InputProps> = ({ id, label }) => {
  return (
    <TextField
      id={id}
      label={label}
      type="email"
      required
      variant="outlined"
      sx={{
        margin: '1rem 0'
      }}
    />
  );
};
const PasswordInput: React.FC<InputProps> = ({ id, label }) => {
  return (
    <TextField
      id={id}
      label={label}
      type="password"
      required
      variant="outlined"
      sx={{
        margin: '1rem 0'
      }}
    />
  );
};
const TaskTitleInput: React.FC<InputProps> = ({ id, label }) => {
  return (
    <TextField
      id={id}
      label={label}
      type="text"
      required
      variant="outlined"
      sx={{
        margin: '1rem 0'
      }}
    />
  );
};
const TaskDescInput: React.FC<InputProps> = ({ id, label }) => {
  return (
    <TextField
      id={id}
      label={label}
      type="text"
      required
      variant="outlined"
      sx={{
        margin: '1rem 0'
      }}
    />
  );
};

export { FirstNameInput, LastNameInput, EmailInput, PasswordInput, TaskTitleInput, TaskDescInput };
