import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as serviceCines from '../../services/cines.service';


const FormularioPelicula = ({ onSubmit }) => {
  const [pelicula, setPelicula] = useState({
    name: '',
    year: '',
    imbd_votes: '',
    imdb_rating: '',
    duration: '',
    genre: '',
    cast_name: '',
    director_name: '',
    writter_name: '',
    cines: [], 
  });


  // Efecto para cargar cines al montar el componente
  useEffect(() => {
    fetchCines();
  }, []);

  // Estado para almacenar los cines
  const [cines, setCines] = useState([]); // Estado para la lista de cines

  // Función para obtener cines
  const fetchCines = async () => {
    try {
      const cinesData = await serviceCines.getCines();
      setCines(cinesData);
    } catch (error) {
      console.error("Error al obtener los cines:", error);
    }
  };

  const cargarCines = async () => {
    try {
      const cinesData = await serviceCines.agregarPeliculaCine();
      setCines(cinesData);
    } catch (error) {
      console.error("Error al obtener los cines:", error);
    }
  }


  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPelicula({
      ...pelicula,
      [name]: value,
    });
  };

  // Manejo de la carga de imágenes
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPelicula({
      ...pelicula,
      image: file,
    });
  };

  // Manejo del cambio en el select de cines (múltiples selecciones)
  const handleCinesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setPelicula({
      ...pelicula,
      cines: selectedOptions,
    });
  };

  // Crear un objeto FormData para manejar una imagen
  const formData = new FormData();
  Object.keys(pelicula).forEach((key) => {
    formData.append(key, pelicula[key]);
  });

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pelicula); // Llama a la función onSubmit pasada como prop
    setPelicula({
      name: '',
      year: '',
      imbd_votes: '',
      imdb_rating: '',
      duration: '',
      genre: '',
      cast_name: '',
      director_name: '',
      writter_name: '',
      image: null, // Limpiar la imagen después de enviar
      cines: [], // Limpiar cines después de enviar
    }); // Limpiar el formulario después de enviar
  };

  return (
    <div className="container my-5">
      <h2 className='mb-5'>Agregar Nueva Película</h2>

      <div className="text-end mt-3">
        <Link to="/home" className="btn btn-success w-50">Volver</Link>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={pelicula.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Año</label>
          <input
            type="number"
            className="form-control"
            name="year"
            value={pelicula.year}
            onChange={(e) => {
              const value = e.target.value;
              if (value === '' || (parseInt(value, 10) >= 1800 && parseInt(value, 10) <= 2030)) {
                handleChange(e);
              } else {
                setPelicula({
                  ...pelicula,
                  year: value,
                });
              }
            }}
            min="1800"
            max="2030"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Votos IMDb</label>
          <input
            type="number"
            className="form-control"
            name="imbd_votes"
            value={pelicula.imbd_votes}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value >= 1 && value <= 10) {
                handleChange(e);
              }
            }}
            min="1"
            max="10"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Clasificación IMDb</label>
          <input
            type="number"
            className="form-control"
            name="imdb_rating"
            value={pelicula.imdb_rating}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (value >= 1 && value <= 10) {
                handleChange(e);
              }
            }}
            min="1"
            max="10"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Duración</label>
          <input
            type="text"
            className="form-control"
            name="duration"
            value={pelicula.duration}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Género</label>
          <input
            type="text"
            className="form-control"
            name="genre"
            value={pelicula.genre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Elenco</label>
          <input
            type="text"
            className="form-control"
            name="cast_name"
            value={pelicula.cast_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre del Director</label>
          <input
            type="text"
            className="form-control"
            name="director_name"
            value={pelicula.director_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Escritores</label>
          <input
            type="text"
            className="form-control"
            name="writter_name"
            value={pelicula.writter_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Cines</label>
          <select
            className="form-select"
            name="cines"
            value={pelicula.cines}
            onChange={handleCinesChange}
            multiple
            required
          >
            {cines.map((cine) => (
              <option key={cine._id} value={cine._id}>
                {cine.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Agregar Película</button>
      </form>
    </div>
  );
};

export default FormularioPelicula;