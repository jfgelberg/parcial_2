import React from 'react';
import { Carousel } from 'react-bootstrap'; // Asegúrate de importar Carousel



const ListImage = ({ imagenes }) => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        {imagenes.map((imagen, indice) => (
          <Carousel.Item key={indice}>
            <img
              className="d-block w-100"
              src={imagen.src} // Asegúrate de pasar un objeto con el src de la imagen
              alt={imagen.alt}
            />
            <Carousel.Caption>
              <h2>{imagen.label}</h2>
              <p>{imagen.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ListImage;