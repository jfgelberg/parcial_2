import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CinePelicula = () => {
  // Estado para las películas y el término de búsqueda
  const [peliculas, setPeliculas] = useState([]); // Array inicial vacío
  const [searchTerm, setSearchTerm] = useState("");

  // Simula la carga de datos (reemplázalo con una llamada a tu API)
  useEffect(() => {
    const fetchPeliculas = async () => {
      // Aquí harías la llamada a tu API
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
      setPeliculas(data);
    };

    fetchPeliculas();
  }, []);

  // Filtrar películas según el término de búsqueda
  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const term = searchTerm.toLowerCase();
    return (
      pelicula.name.toLowerCase().includes(term) ||
      pelicula.year.includes(term) ||
      pelicula.genre.toLowerCase().includes(term)
    );
  });

  return (
    <div className="container my-5">
      {/* Título y Buscador */}
      <div className="mb-4">
        <h2>Listado de Películas</h2>
      </div>

      <div className="text-end my-3">
        <Link to="/home/nuevapelicula" className="btn btn-primary w-50">
          Crear Película
        </Link>
      </div>

      <div className="row g-3">
        <div className="col-md-12">
          <label htmlFor="search" className="form-label">
            Buscar Película
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar película por nombre, año o género"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
          />
        </div>

        {/* Renderizar Películas */}
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map((pelicula) => (
            <div key={pelicula._id} className="col-md-4 col-sm-6 col-12">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={
                    pelicula.img_link ||
                    "https://pixabay.com/get/gcc50c9d075a7d9a723ea9da3e842c44c0da8d8f7a072bda97a29d192481645ff96e574534ed7fb569df045ac37127b83ddbbb6118bae14bf573d894266411b4f_1280.jpg"
                  }
                  className="card-img-top"
                  alt={pelicula.name}
                  style={{ height: "300px", objectFit: "cover", width: "100%" }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-title fs-4 text-primary">
                    <strong>{pelicula.name}</strong>
                  </p>
                  <p className="card-text">
                    <strong>Año:</strong> {pelicula.year}
                  </p>
                  <p className="card-text">
                    <strong>Duración:</strong> {pelicula.duration}
                  </p>
                  <p className="card-text">
                    <strong>Género:</strong> {pelicula.genre}
                  </p>
                  <p className="card-text">
                    <strong>Certificado:</strong> {pelicula.certificate}
                  </p>

                  <div className="my-3">
                    <p className="fs-6">
                      <strong>Director</strong>
                    </p>
                    <p className="card-text">{pelicula.director_name}</p>
                  </div>

                  <div className="my-3">
                    <p className="fs-6">
                      <strong>Escritores</strong>
                    </p>
                    <p className="card-text">{pelicula.writter_name}</p>
                  </div>

                  <div className="my-3">
                    <p className="fs-6">
                      <strong>Elenco</strong>
                    </p>
                    <p className="card-text">{pelicula.cast_name}</p>
                  </div>

                  <div className="my-3">
                    <p className="fs-6">
                      <strong>Clasificación IMDb</strong>
                    </p>
                    <p className="card-text">
                      ⭐ {pelicula.imdb_rating} ({pelicula.imbd_votes} votos)
                    </p>
                  </div>

                  <div className="my-3">
                    <p className="fs-6">
                      <strong>Cines</strong>
                    </p>
                    {pelicula.cines.length > 0 ? (
                      <ul>
                        {pelicula.cines.map((cine, index) => (
                          <li key={index}>{cine}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay cines asociados</p>
                    )}
                  </div>

                  {/* Botones */}
                  <div className="mt-auto d-flex">
                    <Link
                      to={"pelicula/" + pelicula._id}
                      className="btn btn-primary w-50 me-2"
                    >
                      Ver
                    </Link>
                    <Link
                      to={"editar/" + pelicula._id}
                      className="btn btn-info w-50"
                    >
                      Editar
                    </Link>
                    <Link
                      to={"eliminar/" + pelicula._id}
                      className="btn btn-danger w-50 ms-2 btnEliminar"
                    >
                      X
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron películas que coincidan con la búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default CinePelicula;