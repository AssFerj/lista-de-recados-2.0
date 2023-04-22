import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Edit from '../pages/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/editar/:id',
    element: <Edit />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Register />
  }
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
