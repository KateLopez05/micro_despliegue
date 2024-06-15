const {Schema, model} = require('mongoose')

const universidadSchema = Schema ({
    nombre: {
        type :String,
        required: [true, 'Nombre requerido'],
        unique: true},
    fechaCreacion : {
        type :Date,
        default: new Date()},
    fechaModificacion: {
        type : Date,
        default : new Date()}
    }
)

module.exports = model('Universidad', universidadSchema)