import { TextField } from '@mui/material';
import React from 'react';

interface InputProps {
  id: string;
  label: string;
}

const FirstNameInput: React.FC<InputProps> = ({ id, label }) => {
  return <TextField id={id} label={label} required variant="outlined" />;
};
const LastNameInput: React.FC<InputProps> = ({ id, label }) => {
  return <TextField id={id} label={label} required variant="outlined" />;
};
const EmailInput: React.FC<InputProps> = ({ id, label }) => {
  return <TextField id={id} label={label} required variant="outlined" />;
};
const PasswordInput: React.FC<InputProps> = ({ id, label }) => {
  return <TextField id={id} label={label} required variant="outlined" />;
};
const TaskTitleInput: React.FC<InputProps> = ({ id, label }) => {
  return <TextField id={id} label={label} required variant="outlined" />;
};
const TaskDescInput: React.FC<InputProps> = ({ id, label }) => {
  return <TextField id={id} label={label} required variant="outlined" />;
};

export { FirstNameInput, LastNameInput, EmailInput, PasswordInput, TaskTitleInput, TaskDescInput };
