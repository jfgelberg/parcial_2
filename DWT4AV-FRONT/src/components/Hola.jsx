import React from 'react'

const Hola = ( { name, lastName="ValorPorDefecto" } ) => {
  return (
    <p>Hola Amigue! {name} {lastName} </p>
  )
}
export default Hola