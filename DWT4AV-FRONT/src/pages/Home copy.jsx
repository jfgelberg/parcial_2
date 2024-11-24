//profe 2 ------------------------------------------------------------------------------
// import React,{ useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import ListadoPeliculas from '../components/Peliculas/ListadoPeliculas'
// import * as servicePeliciulas from '../services/peliculas.service'

// const Home = () => {
//     const [peliculas, setPeliculas] = useState([])

//     useEffect( () => {
//         servicePeliciulas.getPeliculas()
//         .then( peliculas => {
//             setPeliculas(peliculas)
//         })
//     },[] )

//     return (
//         <ListadoPeliculas listado={peliculas} />
//     )
// }

// export default Home






// javi ------------------------------------------------------------------------------
//import React, { useEffect, useState } from 'react';
// const Home = () => {
//     useEffect(() => {
//         const fetchPeliculas = async () => {
//             try {
//                 const response = await fetch('http://localhost:2025/api/peliculas', {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'auth-token': localStorage.getItem('token')
//                     }
//                 });

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }

//                 const data = await response.json();
//                 console.log(data);
//             } catch (error) {
//                 console.error('Error fetching películas:', error);
//             }
//         };

//         fetchPeliculas();
//     }, []);

//     return <div>Home</div>;
// };

// export default Home;



import React,{ useEffect, useState } from 'react'
import ListadoPeliculas from '../components/Peliculas/ListadoPeliculas'
import * as servicePeliciulas from '../services/peliculas.service'
const Home = () => {
    const [peliculas, setPeliculas] = useState([])

    useEffect( () => {
        servicePeliciulas.getPeliculas()
        .then( peliculas => {
            setPeliculas(peliculas)
        })
    },[] )

    return (
        <ListadoPeliculas listado={peliculas} />
    )
}

export default Home

// profe ----------------------------------------------------------------------------
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import ListadoPeliculas from '../components/Peliculas/ListadoPeliculas'

// const Home = () => {
//   const navigate = useNavigate()
//   const [peliculas, setPeliculas] = useState([])

//   useEffect( () => {

//     fetch('http://localhost:2025/api/peliculas', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'auth-token': localStorage.getItem('token')
//       }

//     })
//     .then ( response => {
//       if( response.status >= 300 ) navigate('/login')
//       return response.json()
//     })
     
//     //.then ( data => console.log(data) ) 
//     .then ( data => setPeliculas(data) ) 
//     .catch( error => navigate('/login') )

//   }, [] )

//   return (
//     <ListadoPeliculas listado={peliculas} />
//   )

// }

// export default Home