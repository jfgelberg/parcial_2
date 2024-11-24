import React from 'react';
import { Link } from 'react-router-dom';

const ListadoPeliculas = ({ listado }) => {
  console.log(listado);

  return (
    <div className="container my-5">
      <div className="row g-3">
        {listado.length > 0 &&
          listado.map((pelicula) => (
            <div key={pelicula._id} className="col-md-4 col-sm-6 col-12">
              <div className="card h-100 d-flex flex-column">
                <img
                  src={pelicula.img_link}
                  className="card-img-top"
                  alt={pelicula.name}
                  style={{ height: '300px', objectFit: 'cover', width: '100%' }} // Imagen uniforme
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

                  {/* Botón alineado al final */}
                  <div className="mt-auto"> 
                    <Link to={"pelicula/" + pelicula._id} className="btn btn-primary w-100">Ver detalle</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListadoPeliculas;
