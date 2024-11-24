import yup from 'yup'

// _id
// name
// direccion
// ciudad
// provincia
// pais
// sala

export const cineSchema = yup.object({
    _id: yup.string(),
    name: yup.string().required(),
    direccion: yup.string().required(),
    ciudad: yup.string().required(),
    provincia: yup.string().required(),
    pais: yup.string().required(),
    sala: yup.number().required(),
})