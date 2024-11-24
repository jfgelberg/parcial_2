//import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import FormularioPelicula from '../components/Peliculas/FormularioPelicula';
//import * as servicePeliculas from '../services/peliculas.service';
import * as serviceCines from '../services/cines.service';

const NuevaPelicula = () => {
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' }); // Estado para la alerta

  // Función para cerrar la alerta manualmente
  const handleCloseAlert = () => {
    setAlerta({ mensaje: '', tipo: '' });
  };

  const handleAddPelicula = async () => {
    // if (!idCine) {
    //   console.error("Faltan datos: idCine ");
    //   setAlerta({
    //     mensaje: "Por favor, selecciona un cine.",
    //     tipo: "danger",
    //     className: "bg-danger text-white",
    //   });
    //   return;
    // }

    try {
      // Aquí ya tienes los cines dentro de la película
      const response = await serviceCines.agregarPeliculaCine();

      if (response.ok) {
        const data = await response.json();
        console.log("Película agregada:", data);
      } else {
        console.error("Error en la respuesta del servidor:", response.statusText);
      }


      // Muestra alerta de éxito
      setAlerta({
        mensaje: 'Película agregada correctamente.',
        tipo: 'success',
        className: 'bg-success text-white',
      });

      setTimeout(() => {
        handleCloseAlert();
      }, 5000);
    } catch (error) {
      console.error("Error al agregar película:", error);

      setAlerta({
        mensaje: 'Error al agregar la película. Intenta nuevamente.',
        tipo: 'danger',
        className: 'bg-danger text-white',
      });

      setTimeout(() => {
        handleCloseAlert();
      }, 5000);
    }
  };





  return (
    <div className="container my-5">
      {/* <h2 className="mb-3">Agregar Nueva Película</h2> */}

      {/* Muestra la alerta si hay un mensaje */}
      {alerta.mensaje && (
        <div className={`alert alert-${alerta.tipo} alert-dismissible fade show`} role="alert">
          {alerta.mensaje}
          <button
            type="button"
            className="btn-close"
            onClick={handleCloseAlert}
            aria-label="Close"
          ></button>
        </div>
      )}

      {/* Formulario de nueva película */}
      <FormularioPelicula onSubmit={(pelicula) => {
        console.log("Datos de la película enviados:", pelicula);
        handleAddPelicula(pelicula._id, pelicula.cines[0]);
      }} />



    </div>
  );
};

export default NuevaPelicula;