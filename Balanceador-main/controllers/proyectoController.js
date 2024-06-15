const Proyecto = require('../models/proyecto')

const { request, response } = require('express')

const crearProyecto = async (req = request,
    res = response) => {
    try {

        console.log(req.body)

        const body = req.body

        const proyecto = new Proyecto(body)

        await proyecto.save()

        return res.status(201).json(proyecto)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }

}

const obtenerProyectos = async (req = request,
    res = response) => {
    console.log('peticion a getProyectos...')

    try {
        const clientes = await Proyecto.find()

        return res.status(200).json(clientes)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}


const actualizarProyecto = async (req = request,
    res = response) => {
    try {

        const id = req.params.id

        const { nombre, fechaEntrega, fechaModificacion, cliente,
            tipoProyecto, universidad, etapa } = req.body
        const data = {
            nombre,
            fechaEntrega,
            fechaModificacion,
            cliente,
            tipoProyecto,
            universidad,
            etapa
        }
        data.fechaModificacion = new Date()

        const proyecto = await Proyecto.findByIdAndUpdate(id, data, { new: true })

        return res.status(201).json(proyecto)
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }

}

const borrarProyecto = async (req = request,
    res = response) => {
    try {
        const id = req.params.id
        await Proyecto.findByIdAndDelete(id)
        return res.status(204).json({ mensaje: 'Proyecto eliminado' })
    } catch (error) {
        return res.status(500).json({ mensaje: error })
    }
}

module.exports = {
    crearProyecto,
    obtenerProyectos,
    actualizarProyecto,
    borrarProyecto
}