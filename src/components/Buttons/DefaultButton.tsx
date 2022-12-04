import { Button } from '@mui/material';
import React from 'react';

interface ButtonProps {
  text: string;
}

const DefaultButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <Button variant="contained" size="large" sx={{
      margin: '1rem 0',
      padding: '.8rem'
    }}>
      {text}
    </Button>
  );
};

export { DefaultButton };
