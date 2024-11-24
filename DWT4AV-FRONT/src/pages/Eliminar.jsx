import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Eliminar = () => {
    const [pelicula, setPelicula] = useState({})
    const { id } = useParams()
    const navigate = useNavigate() // Para redirigir después de eliminar

    // Cargar los detalles de la película cuando el componente se monta
    useEffect(() => {
        fetch(`http://localhost:2025/api/peliculas/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => setPelicula(data))
            .catch(error => console.error('Error al cargar la película:', error))
    }, [id])

    // Función para manejar la eliminación
    const handleEliminar = async () => {
        const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar la película "${pelicula.name}"?`)
        
        if (confirmacion) {
            try {
                const response = await fetch(`http://localhost:2025/api/peliculas/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.getItem('token')
                    }
                })

                if (response.ok) {
                    alert('Película eliminada exitosamente.')
                    navigate('/home') // Redirige a la página principal
                } else {
                    alert('Error al eliminar la película.')
                }
            } catch (error) {
                console.error('Error al eliminar:', error)
                alert('Ocurrió un error al intentar eliminar la película.')
            }
        }
    }

    // Si la película no está cargada, muestra un mensaje de carga
    if (!pelicula.name) {
        return <div>Cargando...</div>
    }

    return (
        <div className="container my-5">
            <div className="row g-3">
                <div className="col-md-12 col-sm-12 col-12">
                    <h2>Eliminar Película</h2>
                    <div className="card h-100 d-flex flex-column">
                        <img
                            src={pelicula.img_link}
                            className="card-img-top"
                            alt={pelicula.name}
                            style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                        />
                        <div className="card-body d-flex flex-column">
                            <p className="card-title fs-4 text-primary"><strong>{pelicula.name}</strong></p>
                            <p className="card-text"><strong>Año:</strong> {pelicula.year}</p>

                            <div className="my-3">
                                <p className="fs-6"><strong>Director</strong></p>
                                <p className="card-text">{pelicula.director_name}</p>
                            </div>

                            {/* Botón de eliminación y cancelación */}
                            <div className="mt-auto">
                                <button onClick={handleEliminar} className="btn btn-danger w-100 my-2">Eliminar</button>
                                <Link to="/home" className="btn btn-success w-100">Cancelar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eliminar



// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// const Eliminar = () => {

//     const [pelicula, setPelicula] = useState({})
//     const { id } = useParams()


//     useEffect(() => {
//         fetch("http://localhost:2025/api/peliculas/" + id, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'auth-token': localStorage.getItem('token')
//             }
//         })
//             .then(response => response.json())
//             .then(data => setPelicula(data))
//     }, [])

//     return (

//         <div className="container my-5">
//             <div className="row g-3">
//                 <div className="col-md-12 col-sm-12 col-12">
//                     <h2>Eliminar Película</h2>
//                     <div className="card h-100 d-flex flex-column">
//                         <img
//                             src={pelicula.img_link}
//                             className="card-img-top"
//                             alt={pelicula.name}
//                             style={{ height: '300px', objectFit: 'cover', width: '100%' }} // Imagen uniforme
//                         />
//                         <div className="card-body d-flex flex-column">
//                             <p className="card-title fs-4 text-primary"><strong>{pelicula.name}</strong></p>
//                             <p className="card-text"><strong>Año:</strong> {pelicula.year}</p>

//                             <div className="my-3">
//                                 <p className="fs-6"><strong>Director</strong></p>
//                                 <p className="card-text">{pelicula.director_name}</p>
//                             </div>

//                             {/* Botón alineado al final */}
//                             <div className="mt-auto">
//                                 <Link to={"/home"} className="btn btn-danger w-100 my-2">Eliminar</Link>
//                                 <Link to={"/home"} className="btn btn-success w-100">Cancelar</Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Eliminar


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Eliminar({ pelicula }) {
//   const navigate = useNavigate();

//   const handleEliminar = async () => {
//     const confirmacion = window.confirm(`¿Estás seguro de que deseas eliminar la película "${pelicula.name}"?`);
//     if (confirmacion) {
//       try {
//         const response = await fetch(`http://localhost:2025/peliculas/${pelicula._id}`, {
//           method: 'DELETE',
//         });

//         if (response.ok) {
//           alert('Película eliminada exitosamente.');
//           navigate('/home'); // Redirige a la página principal o donde prefieras
//         } else {
//           alert('Error al eliminar la película.');
//         }
//       } catch (error) {
//         console.error('Error al eliminar:', error);
//         alert('Ocurrió un error al intentar eliminar la película.');
//       }
//     }
//   };

//   return (
//     <div className="card h-100 d-flex flex-column">
//       <img
//         src={pelicula.img_link}
//         className="card-img-top"
//         alt={pelicula.name}
//         style={{ height: '300px', objectFit: 'cover', width: '100%' }}
//       />
//       <div className="card-body d-flex flex-column">
//         <p className="card-title fs-4 text-primary">
//           <strong>{pelicula.name}</strong>
//         </p>
//         <div className="mt-auto">
//           <button onClick={handleEliminar} className="btn btn-danger w-100">
//             Eliminar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Eliminar;