import React from 'react';
import { ThemeProvider } from '@mui/material';
import { themeLight } from './configs/Theme/Theme';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ThemeProvider theme={themeLight}>
        <AppRoutes />
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
