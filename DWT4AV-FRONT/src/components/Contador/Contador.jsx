import React, { useState } from 'react'

const Contador = () => {
    const [acumulador, setAcumulador] = useState(0) //estado inicial de acumulador
    
    const sumar = () => {
        console.log('sumar')
        setAcumulador(acumulador + 1)
    }

  return (
    //metodo onclick para sumar 
    // <button onClick={ ()=> console.log("sumar")} >Sumar</button>

    //metodo para sumar
    <button onClick={ sumar } >Sumar: {acumulador}</button>

    //inputs ---------------------
    //reactFragment tambien se escribe <></>
    // <React.Fragment> 
    //     <input onChange={ (e)=> setNombre(e.target.value) } />
    //     {nombre}
    // </React.Fragment>
  )
}

export default Contador