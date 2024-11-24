import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://admin:lnWXPCjynkBL7gAa@dw4tav-hibridas-cluster.whoab.mongodb.net/")
const db = client.db("PRODUCTORA")

export async function getActoresPelicula(idPelicula){
    await client.connect()
    const pelicula = await db.collection("peliculas").findOne( { _id: ObjectId.createFromHexString(idPelicula) } )
    console.log(pelicula.actores)
    return pelicula.actores
}


export async function agregarActoresPelicula(idPelicula, actores){
    await client.connect()
    const resultado = await db.collection("peliculas").updateOne(
        { _id: ObjectId.createFromHexString(idPelicula) },
        { $push: {actores: { $each: actores }} } //agrega los actores al array actores de la pelicula
    )
    return resultado.modifiedCount > 0 ? "Actores agregados" : "No se agregaron actores"
} 


// export async function agregarActoresPelicula(idPelicula, actores){
//     await client.connect()
//     const pelicula = await db.collection("peliculas").findOne( { _id: ObjectId.createFromHexString(idPelicula) } )
//     if( pelicula.actores === undefined ){
//         pelicula.actores = []
//     }    
//     pelicula.actores.push(...actores)

//     const resultado = await db.collection("peliculas").replaceOne({ _id: ObjectId.createFromHexString(idPelicula)}, pelicula)

//     return resultado.modifiedCount > 0 ? "Actores agregados" : "No se agregaron actores"
// } 