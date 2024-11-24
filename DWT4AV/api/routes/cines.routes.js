import { Router } from "express";
import * as controller from "../controllers/cines.controller.js"
import { validateToken } from "../../middleware/token.validate.middleware.js"

const route = Router()

route.get( "/cines",     [validateToken]  ,controller.getCines )
route.get( "/cines/:id", [validateToken]  ,controller.getCineId )
route.post( "/cines",    [validateToken]  ,controller.agregarCine )
route.post( "/cines/pelicula", [validateToken] ,controller.agregarPeliculaCine ) //Guardar 

// route.put("/cines/:id", controller.reemplazarPelicula)       //Reemplaza
// route.patch("/cines/:id", controller.actualizarPelicula)     //Actualiza
// route.delete("/cines/:id", controller.borrarPelicula)        //Eliminar

export default route