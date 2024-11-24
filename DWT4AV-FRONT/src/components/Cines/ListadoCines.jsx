import React from 'react';
import { Link } from 'react-router-dom';

const ListadoCines = ({ listado = [] }) => {

    return (
        <div>
            <h2>Listado de Cines</h2>

            <Link to="/cine/nuevoCine" className="btn btn-success mb-3">Nuevo Cine</Link>

            {/* Verificamos si hay cines */}
            {listado.length > 0 ? (
                listado.map((cine) => (
                    <div key={cine._id} className="card mb-3">
                        <div className="card-body d-flex flex-column">
                            <p className="card-title fs-4 text-primary"><strong>{cine.name}</strong></p>
                            <p className="card-title fs-6"><strong>Dirección:</strong> {cine.direccion}</p>
                            <p className="card-title fs-6"><strong>Ciudad: </strong> {cine.ciudad}</p>
                            <p className="card-title fs-6"><strong>Provincia:</strong> {cine.provincia}</p>
                            <p className="card-title fs-6"><strong>País: </strong>{cine.pais}</p>
                            <p className="card-text"><strong>Sala:</strong> {cine.sala}</p>
                        </div>

                        {/* Botones -------------------- */}
                        <div className="mt-auto d-flex">
                            <Link to={`/cine/${cine._id}`} className="btn btn-primary w-50 me-2">Ver</Link>
                            <Link to={`/editar/${cine._id}`} className="btn btn-info w-50">Editar</Link>
                            <Link to={`/eliminar/${cine._id}`} className="btn btn-danger w-50 ms-2">X</Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>No hay cines disponibles.</p>
            )}
        </div>
    );
};

export default ListadoCines;