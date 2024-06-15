const {Schema, model}=require('mongoose')

const clienteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique : true},
    email: {
        type : String,
        required: [true, 'Email requerido'],
        unique: true},
    fechaCreacion: {
        type : Date,
        default: new Date()},
    fechaModificacion: {
        type : Date,
        default : new Date()
    }

    })

    module.exports = model('Cliente',clienteSchema)