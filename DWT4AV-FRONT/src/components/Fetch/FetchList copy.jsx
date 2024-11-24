import React, { useEffect, useState } from 'react'

const FetchList = () => {
    const [listado, setListado] = useState([])
    const [page, setPage] = useState(0)
    const getDatos = async (uri) => {
        const response = await fetch(uri)
        const datos = await response.json()
        setListado(datos)
        console.log( datos )
    }
    //getDatos()
    //ciclo de vida de un componente
    useEffect(() => {
        //mount --> para que getDatos se cargue los datos o el listado
        //getDatos(`https://rickandmortyapi.com/api/character/?page=${page}`)

        getDatos("http://localhost:2025/api/peliculas") //llamo a mi base de mongo

    }, [page]) 

    const paginaSiguiente = () => {
        setPage(page + 1)
    }

    const paginaAnterior = () => {
        if(page > 1 ) setPage(page - 1)
        //setPage(page - 1)
    }

    return (
        <>
            {/* <button onClick={getDatos} >FetchList</button> */}
            {/* boton paginador - set page - */}
            <button onClick={paginaAnterior} >Pagina Anterior:  </button>
            <button>página  {page} </button>
            <button onClick={paginaSiguiente} >Pagina Siguiente</button>
            <ul>
                {
                    listado.map((personaje, indice) => (
                        <li key={indice}> {personaje.titulo} - <a href= {personaje.portada} >portada</a> </li>
                    ))
                }
            </ul>
        </>
    )
}

export default FetchList