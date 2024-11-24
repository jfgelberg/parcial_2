import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ListadoPeliculas = ({ listado }) => {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar las películas según el término de búsqueda
  // const filteredPeliculas = listado.filter(pelicula =>
  //   pelicula.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  //filtro por nombre, año y genero -------------------------------------
  const filteredPeliculas = listado.filter(pelicula =>
    pelicula.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pelicula.year.toString().includes(searchTerm) ||
    pelicula.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      {/* Buscador */}
      <div className="mb-4">
        <h2>Listado de Películas</h2>
      </div>

      <div className='text-end my-3'>
        <Link to="/home/nuevapelicula" className="btn btn-primary w-50">Crear Película</Link>
      </div>

      <div className="row g-3">
        <div className='col-md-12'>
          <label htmlFor="search" className="form-label">Buscar Película</label>
          <input
            type="text"
            className="form-control "
            placeholder="Buscar Película, por nombre, año o género"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
          />
        </div>

        {/* Si hay películas que coinciden con el filtro */}
        {filteredPeliculas.length > 0 ? (
          filteredPeliculas.map((pelicula) => (
            <div key={pelicula._id} className="col-md-4 col-sm-6 col-12">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={pelicula.img_link || 'https://pixabay.com/get/gcc50c9d075a7d9a723ea9da3e842c44c0da8d8f7a072bda97a29d192481645ff96e574534ed7fb569df045ac37127b83ddbbb6118bae14bf573d894266411b4f_1280.jpg'} // Imagen predeterminada si no hay img_link
                  className="card-img-top"
                  alt={pelicula.name}
                  style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-title fs-4 text-primary"><strong>{pelicula.name}</strong></p>
                  <p className="card-text"><strong>Año:</strong> {pelicula.year}</p>
                  <p className="card-text"><strong>Duración:</strong> {pelicula.duration}</p>
                  <p className="card-text"><strong>Género:</strong> {pelicula.genre}</p>
                  <p className="card-text"><strong>Certificado:</strong> {pelicula.certificate}</p>

                  <div className="my-3">
                    <p className="fs-6"><strong>Director</strong></p>
                    <p className="card-text">{pelicula.director_name}</p>
                  </div>

                  <div className="my-3">
                    <p className="fs-6"><strong>Escritores</strong></p>
                    <p className="card-text">{pelicula.writter_name}</p>
                  </div>

                  <div className="my-3">
                    <p className="fs-6"><strong>Elenco</strong></p>
                    <p className="card-text">{pelicula.cast_name}</p>
                  </div>

                  <div className="my-3">
                    <p className="fs-6"><strong>Clasificación IMDb</strong></p>
                    <p className="card-text">⭐ {pelicula.imdb_rating}({pelicula.imbd_votes} votos)</p>
                  </div>

                  <div className="my-3">
                    <p className="fs-6"><strong>Cines</strong></p>
                    {pelicula.cines && pelicula.cines.length > 0 ? (
                      <ul>
                        {pelicula.cines.map((cine, index) => (
                          <li key={index}>{cine}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="card-text">No hay cines asociados</p>
                    )}
                  </div>

                  {/* Botones --------------------  */}
                  <div className="mt-auto d-flex">
                    <Link to={"pelicula/" + pelicula._id} className="btn btn-primary w-50 me-2">Ver</Link>
                    <Link
                      to={"editar/" + pelicula._id}
                      className="btn btn-info w-50"
                    >
                      Editar
                    </Link>
                    <Link to={"eliminar/" + pelicula._id} className="btn btn-danger w-50 ms-2 btnEliminar">X</Link>
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

export default ListadoPeliculas;