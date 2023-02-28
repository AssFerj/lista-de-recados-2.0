import React from 'react';
import { ThemeProvider } from '@mui/material';
import { themeLight } from './configs/Theme/Theme';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
