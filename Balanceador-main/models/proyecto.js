const { Schema, model } = require("mongoose");


const proyectoSchema = Schema({
    nombre :{
    type: String,
    required: [true, 'Nombre requerido'],
    unique: true},
    titulo: {
        type: String,
        required: [true, 'Titulo requerido']
    },
    fechaEntrega : {
        type: Date,
        required: [true, 'Fecha de entrega requerida']
    },
    fechaCreacion :{
        type: Date,
        default : new Date()
    },
    fechaModificacion: {
        type: Date,
        default: new Date()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    tipoProyecto : {
        type : Schema.Types.ObjectId,
        ref : 'TipoProyecto'
    },
    universidad : {
        type : Schema.Types.ObjectId,
        ref : 'Universidad'
    },
    etapa : {
        type : Schema.Types.ObjectId,
        ref : 'Etapa'
    }
})

module.exports = model('Proyecto', proyectoSchema)

