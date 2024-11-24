import yup from 'yup'

export const movieSchema = yup.object({
    rank: yup.number().positive("Debe ser un valor mayor a cero").integer(),
    id: yup.string(),
    name: yup.string().required().min(2, "El nombre debe tener al menos 2 caracteres"),
    year: yup.number().required().min(1800, "El año como minimo debe ser 1800").max(2030, "El año como maximo puede ser 2030"),
    imbd_votes: yup.number().positive("Debe ser un valor mayor a cero"),
    imdb_rating: yup.number().positive("Debe ser un valor mayor a cero"),
    certificate: yup.string(), 
    duration: yup.number("Debe ser un valor mayor a cero"),
    genre: yup.string(),
    cast_id: yup.string(),
    cast_name: yup.string(),
    director_id: yup.string(),
    director_name: yup.string(),
    writter_name: yup.string(),
    writter_id: yup.string(), 
    img_link: yup.string().url(),
    image: yup.string(),
    cines: yup.array().of(yup.string())
})