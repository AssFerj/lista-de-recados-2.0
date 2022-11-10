import { Button } from '@mui/material';
import React from 'react';

interface ButtonProps {
  text: string;
}

const DefaultButton: React.FC<ButtonProps> = ({ text }) => {
  return <Button variant="contained">{text}</Button>;
};

export { DefaultButton };
