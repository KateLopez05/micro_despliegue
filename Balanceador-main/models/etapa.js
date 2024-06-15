// Se extrae las propiedad schema y model de mongoose 
const {Schema, model} =require('mongoose')

const etapaSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type : Date,
        default: new Date()},
    fechaModificacion: {
        type: Date,
        default: new Date()
    }
}
    
)

module.exports = model('Etapa', etapaSchema)
