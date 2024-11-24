import React from 'react';
import ListImage from './ListImage';
import { Container, Row, Col } from 'react-bootstrap';
import './listImage.css';

// Componente ContenedorImage ---- 
const ContenedorImage = ({ imagenes }) => {
    return (
        <Container fluid="md" className='ContenedorImg' >
            <Row>
                <Col>
                    {/* Mapeo de las imágenes pasadas como prop */}
                    {imagenes && imagenes.length > 0 && (
                        <ListImage imagenes={imagenes} className="contenidoImg"/>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default ContenedorImage;