import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
