import React from "react";
import Hola from "./components/Hola";
import List from "./components/Listado/List";
import { Button } from 'react-bootstrap';
import ContenedorImage from "./components/Carousel/ContenedorImage";
import Contador from "./components/Contador/Contador";
import FetchList from "./components/Fetch/FetchList";



function App() {
  //----------------------------------------
  //ejecutar todo el codigo de la aplicacion (js)

  console.log('hola mundo')
  const nombre = 'Pepe Chanfas';

  const estilosCss = { color: "lightblue", fontWeight: 900, backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')" }

  const usuarios = [
    { id: 1, name: 'Juan Carlos Lopez', email: 'pepe@pepe.com' },
    { id: 2, name: 'María García', email: 'maria.garcia@example.com' },
    { id: 3, name: 'Pedro Pérez', email: 'pedro.perez@example.com' },
    { id: 4, name: 'Ana Torres', email: 'ana.torres@example.com' },
    { id: 5, name: 'Luis Rodríguez', email: 'luis.rodriguez@example.com' },
    { id: 6, name: 'Carla Fernández', email: 'carla.fernandez@example.com' },
    { id: 7, name: 'Fernando Gómez', email: 'fernando.gomez@example.com' },
    { id: 8, name: 'Laura Morales', email: 'laura.morales@example.com' },
    { id: 9, name: 'José Martínez', email: 'jose.martinez@example.com' },
    { id: 10, name: 'Sofía Hernández', email: 'sofia.hernandez@example.com' }
  ];

  const imagenes = [
    { src:'./img/img_01.jpg', alt: 'imagen 01 auto', label: 'Escudería Ferrari 01 ', description: 'Auto Ferrari 01' },
    { src:'./img/img_02.jpg', alt: 'imagen 02 auto', label: 'Escudería Ferrari 02', description: 'Auto Ferrari 02' },
    { src:'./img/img_03.jpg', alt: 'imagen 03 auto', label: 'Escudería Williams 01', description: 'Auto Williams' }
  ];

  //----------------------------------------

  return (
    <div>
      <h1>Usuarios</h1>
      {/* llamo al componente List --> paso el nombre de la props de List y esto ya tiene todo resuelto */}
      <>
        <List listadoUsuarios={usuarios} style={estilosCss}>
          {/* TODO LO QUE ENVIE POR ACA TERMINA EN CHILDREN - en list, se pone children y aparece este texto de h1*/}
          <h3>hola Desde app.js - children en List.jsx</h3>
          
        </List>

        <p>Recorriendo Usuarios</p>
        <Hola name={nombre} lastName={"mio"} />
        <Button variant="info" style={{ width: '150px' }} >Color info</Button>

        <ContenedorImage imagenes={imagenes} />

        {/* Clase ---> 16/10/2024  / metodo hover y suma los hovers */}
        <Contador />
        <FetchList />
      
      </>
    </div>
  );
}

export default App;




// import React from "react";
// import Hola from "./assets/components/Hola";

// function App() {
//   //----------------------------------------
//   //ejecutar todo el codigo de la aplicacion (js)

//   console.log('hola mundo')

//   const usuarios = [
//     { id: 1, name: 'Juan Carlos Lopez', email: 'pepe@pepe.com' },
//     { id: 2, name: 'María García', email: 'maria.garcia@example.com' },
//     { id: 3, name: 'Pedro Pérez', email: 'pedro.perez@example.com' },
//     { id: 4, name: 'Ana Torres', email: 'ana.torres@example.com' },
//     { id: 5, name: 'Luis Rodríguez', email: 'luis.rodriguez@example.com' },
//     { id: 6, name: 'Carla Fernández', email: 'carla.fernandez@example.com' },
//     { id: 7, name: 'Fernando Gómez', email: 'fernando.gomez@example.com' },
//     { id: 8, name: 'Laura Morales', email: 'laura.morales@example.com' },
//     { id: 9, name: 'José Martínez', email: 'jose.martinez@example.com' },
//     { id: 10, name: 'Sofía Hernández', email: 'sofia.hernandez@example.com' }
//   ];

//   // const aviones = [
//   //   { id: 1, modelo: 'Boeing 737', aerolinea: 'American Airlines' },
//   //   { id: 2, modelo: 'Airbus A320', aerolinea: 'Delta Airlines' },
//   //   { id: 3, modelo: 'Boeing 777', aerolinea: 'United Airlines' },
//   //   { id: 4, modelo: 'Airbus A380', aerolinea: 'Emirates' },
//   //   { id: 5, modelo: 'Boeing 787', aerolinea: 'Qatar Airways' },
//   //   { id: 6, modelo: 'Boeing 747', aerolinea: 'British Airways' },
//   //   { id: 7, modelo: 'Airbus A330', aerolinea: 'Lufthansa' },
//   //   { id: 8, modelo: 'Boeing 767', aerolinea: 'Air Canada' },
//   //   { id: 9, modelo: 'Airbus A350', aerolinea: 'Singapore Airlines' },
//   //   { id: 10, modelo: 'Boeing 757', aerolinea: 'Iberia' }
//   // ];


//   //----------------------------------------

//   return (
//     <div>
//       <h1>Usuarios</h1>
//       <>
//         <ul>
//           {usuarios.map((usuario, indice) => (
//             <li key={indice}>
//               {usuario.name} - {usuario.email}
//             </li>
//           ))}
//         </ul>
//         <p>Recorriendo Usuarios</p>
//         <Hola name={nombre} lastName={"Mio"} />
//       </>
//       </div>

//   )

// }

// export default App
