import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://admin:lnWXPCjynkBL7gAa@dw4tav-hibridas-cluster.whoab.mongodb.net/")
const db = client.db("PRODUCTORA")

export async function getCines(){
    await client.connect()
    return db.collection("cines").find().toArray()
}

export async function getCineId(id){
    await client.connect()
    const cine = await db.collection("cines").findOne({ _id: ObjectId.createFromHexString(id) })
    return cine
}

export async function agregarCine(cine){
    await client.connect()
    await db.collection("cines").insertOne(cine)
    return cine
}

export async function agregarPeliculaCine( idCine, idPelicula ){
    await client.connect()
    const pelicula = await db.collection("movies").findOne({ _id: ObjectId.createFromHexString(idPelicula) })
    const resultado = await db.collection("cines").updateOne(
        { _id: ObjectId.createFromHexString(idCine) },
        { $push: { peliculas: pelicula } }
    )
    return resultado.modifiedCount > 0 ? "Pelicula agregada" : "No se agregó la pelicula"
}