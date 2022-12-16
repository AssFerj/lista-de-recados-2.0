import { ThemeProvider } from '@mui/material';
import React from 'react';
import { themeLight } from './configs/Theme/Theme';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeLight}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
