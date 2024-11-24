import React, { useState, useEffect } from 'react';
import ListadoCines from '../components/Cines/ListadoCines';
import * as serviceCines from '../services/cines.service';

const Cine = () => {
  const [cine, setCine] = useState([]);

//   useEffect(() => {
//     serviceCines.getCines()
//       .then(cine => {
//         setCine(cine);
//       });
//   }, []);

useEffect(() => {
    serviceCines.getCines()
      .then(cine => {
        console.log(cine); // Verifica la estructura de los datos aquí
        setCine(cine);
      });
  }, []);

  return (
    <ListadoCines listado={cine} />
  );
};

export default Cine;