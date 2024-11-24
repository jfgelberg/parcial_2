import { call } from "./api.service"

export async function getCines() {
    return call({ uri: "cines" });
}

export async function getCineId(id) {
    return call({ uri: `cines/${id}` });
}

export async function agregarCine(cine) {
    return call({ uri: "cines", method: "POST", body: cine });
}

export async function agregarPeliculaCine(idCine, idPelicula) {
     return call({ uri: "cines/pelicula", method: "POST", body: { idCine, idPelicula } });
}




