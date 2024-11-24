import React, { useEffect, useState } from 'react'

const FetchList = () => {
    const [listado, setListado] = useState([])
    const [page, setPage] = useState(0)
    const itemsPorPagina = 10
    const [elementosPaginados, setElementosPaginados] = useState([])

    const getDatos = async (uri) => {
        const response = await fetch(uri)
        const datos = await response.json()
        setListado(datos)
        console.log(datos)
    }

    // Solo llamar a getDatos al montar el componente
    useEffect(() => {
        getDatos("http://localhost:2025/api/peliculas")
    }, [])

    // Manejo el paginador -------------------------------------
    useEffect(() => {
        const inicio = page * itemsPorPagina
        const fin = inicio + itemsPorPagina
        setElementosPaginados(listado.slice(inicio, fin))
    }, [listado, page])

    const paginaSiguiente = () => {
        if ((page + 1) * itemsPorPagina < listado.length) {
            setPage(page + 1)
        }
    }

    const paginaAnterior = () => {
        if (page > 0) setPage(page - 1)
    }
    // fin - Manejo el paginador -------------------------------------

    return (
        //lista de peliculas (movies) --- 
        <>
            <h2>Lista de Peliculas - solo muestra las primeras 10 </h2>
            <button onClick={paginaAnterior} >Pagina Anterior </button>
            <button>Página {page + 1} </button>
            <button onClick={paginaSiguiente} >Pagina Siguiente</button>
            <ul>
                {
                    elementosPaginados.map((personaje, indice) => (
                        <React.Fragment key={indice}>
                            <li>{personaje.name} - <a href={personaje.img_link}>portada</a></li>
                            {/* <li>Protagonistas: {personaje.cast_name}</li> */}
                        </React.Fragment>
                    ))
                }
            </ul>

        </>
    )
}

export default FetchList