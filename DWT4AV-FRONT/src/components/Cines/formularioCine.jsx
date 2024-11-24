import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormularioCine = ({ onSubmit }) => {
  const [cine, setCine] = useState({
    name: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    pais: '',
    sala: '',
  });

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCine({
      ...cine,
      [name]: value,
    });
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cine); 
    setCine({
      name: '',
      direccion: '',
      ciudad: '',
      provincia: '',
      pais: '',
      sala: '',
    }); // Limpiar el formulario después de enviar
  };



  return (
    <div className="container my-5">
      <h2 className='mb-5'>Agregar Nuevo Cine</h2>

      <div className="text-end mt-3">
        <Link to="/cines" className="btn btn-success w-50">Volver</Link>
      </div>

      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="mb-3">
          <label className="form-label">Nombre del Cine</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={cine.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campos de ubicación */}
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            name="direccion"
            value={cine.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ciudad</label>
          <input
            type="text"
            className="form-control"
            name="ciudad"
            value={cine.ciudad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Provincia</label>
          <input
            type="text"
            className="form-control"
            name="provincia"
            value={cine.provincia}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">País</label>
          <input
            type="text"
            className="form-control"
            name="pais"
            value={cine.pais}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Sala</label>
          <input
            type="text"
            className="form-control"
            name="sala"
            value={cine.sala}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Agregar Cine</button>
      </form>
    </div>
  );
};

export default FormularioCine;