import React from 'react';
import { ThemeProvider } from '@mui/material';
import { themeLight } from './configs/Theme/Theme';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store/store';

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
