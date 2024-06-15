const {Schema, model} = require('mongoose')

const tipoProyectoSchema = Schema({
    nombre : {
        type: String,
        required: [true, "Nombre requerido"]
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaModificacion: {
        type: Date,
        default: new Date()
    }


})

module.exports = model( 'TipoProyecto', tipoProyectoSchema)