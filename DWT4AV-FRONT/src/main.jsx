import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//rutas de mi aplicacion-------------------------
import Login from "./components/Login/Login";
import Register from './components/Login/Register.jsx';
import Logout from './components/Login/Logout.jsx';
import Home from './pages/Home.jsx';

import ProtectedRoute from './components/Rutas/ProtectedRoute.jsx';
import Layout from './components/Layout/Layout.jsx';
import DetallePelicula from './components/Peliculas/DetallePelicula.jsx';
import NuevaPelicula from './pages/NuevaPelicula.jsx';
import Editar from './pages/Editar.jsx';
import Eliminar from './pages/Eliminar.jsx';

import NuevoCine from './pages/NuevoCine.jsx';
import Cine from './pages/Cine.jsx';
import CinePelicula from './pages/CinePelicula.jsx';
//------------------------------------------------

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Inicio</div>,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <ProtectedRoute> <Home /> </ProtectedRoute>,
      },
      {
        path: "/cine",
        element: <ProtectedRoute> <Cine /> </ProtectedRoute>,
      },
      {
        path: "/home/pelicula/:id",
        element: <ProtectedRoute> <DetallePelicula /> </ProtectedRoute>,
      },
      {
        path: "/home/nuevaPelicula",
        element: <ProtectedRoute> <NuevaPelicula /> </ProtectedRoute>,
      },
      {
        path: "/home/peliculaCargada",
        element: <ProtectedRoute> <peliculaCargada /> </ProtectedRoute>,
      },
      {
        path: "/home/editar/:id",
        element: <ProtectedRoute> <Editar /> </ProtectedRoute>,
      },
      {
        path: "/home/eliminar/:id",
        element: <ProtectedRoute> <Eliminar /> </ProtectedRoute>,
      },
      {
        path: "/home/cine/nuevoCine",
        element: <ProtectedRoute> <NuevoCine /> </ProtectedRoute>,
      },
      {
        path: "/home/cines/peliculas",
        element:  <CinePelicula /> ,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/logout",
        element: <Logout />
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
