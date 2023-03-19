import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';

export default function SwitchLabels() {
  const [theme, setTheme] = useState('light');
  const switchTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked onChange={switchTheme} />} label="Mudar Tema" />
    </FormGroup>
  );
}
