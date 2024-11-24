import React, { useState } from 'react';
import FormularioCine from '../components/Cines/formularioCine';
import * as serviceCines from '../services/cines.service';

const NuevoCine = () => {
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' }); // Estado para la alerta
  
   // Función para cerrar la alerta manualmente
   const handleCloseAlert = () => {
    setAlerta({ mensaje: '', tipo: '' });
  };

  const handleAddCine = async (cine) => {
    try {
      const response = await serviceCines.agregarCine(cine);
      console.log("Cine agregado:", response);

      // Muestra alerta de éxito
      setAlerta({
        mensaje: 'Cine agregado correctamente.',
        tipo: 'success',
        className: 'bg-success text-white',
      });

      // Oculta la alerta automáticamente después de 5 segundos
      setTimeout(() => {
        handleCloseAlert();
      }, 5000);
    } catch (error) {
      console.error("Error al agregar el cine:", error);

      // Muestra alerta de error
      setAlerta({
        mensaje: 'Error al agregar el cine. Intenta nuevamente.',
        tipo: 'danger',
        className: 'bg-danger text-white',
      });

      // Oculta la alerta automáticamente después de 5 segundos
      setTimeout(() => {
        handleCloseAlert();
      }, 5000);
    }
  };

  return (
    <div className="container my-5">
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

      <FormularioCine onSubmit={handleAddCine} />
    </div>
  );
};

export default NuevoCine;