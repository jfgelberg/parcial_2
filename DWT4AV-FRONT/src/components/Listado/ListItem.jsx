import React, { useState } from 'react'
import "./listitem.css"
import { Button } from 'react-bootstrap'


const ListItem = ({item}) => {
    const [contador, setContador] = useState(0) //necesito esto por el hook useState. inicializo el contador en 0
    const mifuncionClick = () => {
        console.log('Click')
        setContador(contador + 1) //cada vez que hago click, sumo 1 al contador
    }
 
  return (
    <li className="listItem">
      {item.name} - {item.email}
       {/* eventos de boton */}
       <Button onClick={mifuncionClick} variant="info" style={{ width: '250px' }}>Evento Click {contador}</Button>
    </li>
  )
}

export default ListItem