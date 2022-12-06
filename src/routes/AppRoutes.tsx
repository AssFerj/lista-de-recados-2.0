import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
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
