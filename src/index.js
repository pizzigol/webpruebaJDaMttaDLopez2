import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaPrincipal from './routes/PaginaPrincipal';
import QuienesSomos from './routes/QuienesSomos';
import Contactos from './routes/Contactos';
import Alquileres from './routes/Alquileres';
import Error from './routes/Error';
import './Componentes/Menu.css';
import './Componentes/Footer.css';
import './Componentes/Hero.css';












const router = createBrowserRouter([
  {
     path: '/',
     element: <PaginaPrincipal/>,
     errorElement:<Error/>
  },
  {
    path: '/quienessomos',
    element: <QuienesSomos/>
 },
 {
  path: '/contactos',
  element: <Contactos/>
},
{
  path: '/alquileres',
  element: <Alquileres/>
},

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
