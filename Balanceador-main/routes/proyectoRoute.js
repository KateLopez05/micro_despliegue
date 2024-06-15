const { Router } = require("express")
 const {
    crearProyecto,
    obtenerProyectos,
    actualizarProyecto,
    borrarProyecto
 }= require('../controllers/proyectoController')

const router = Router() 

//crear
router.post('/', crearProyecto)

//obtener
router.get('/', obtenerProyectos)   

//actualizar
router.put('/:id', actualizarProyecto)

//eliminar
router.delete('/:id', borrarProyecto )


module.exports = router 
