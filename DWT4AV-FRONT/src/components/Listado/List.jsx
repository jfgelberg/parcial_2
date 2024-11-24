import React, { useState, useEffect } from 'react'
import { List as MuiList, ListItem, ListItemText, CircularProgress, Typography } from '@mui/material'
import Avatar  from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

//listado de usuarios traidos de la api -------------------------------------
const List = () => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect( () => {
    fetch( 'https://jsonplaceholder.typicode.com/users')
      .then(response => response.json() )
      .then(data => {
        setItems(data)
        setLoading(false)
      } ) 
      .catch( error => {
        setError(error)
        setLoading(false)
      } )

  }, [])

  console.log(items)

  if (loading) return <CircularProgress color="danger" />

  if (error) return <Typography color="error">Error: {error.message}</Typography>

  return (
    <MuiList>
      {items.map((item, indice) => (
        <ListItem key={indice}>
          <ul className="d-flex list-unstyled">
           <li className="me-4 "> <Avatar sx={{ bgcolor: deepOrange[500] }}/> {item.Avatar} </li>
            <li><ListItemText primary={item.name} secondary={item.email} /></li>
          </ul>
        </ListItem>
      ))}
    </MuiList>
  )
}

export default List