import { Router } from 'express'
import {
    createGuitarra,
    getGuitarras,
    getGuitarraById,
    updateGuitarra,
    deleteGuitarra
} from './handlers/guitarra'
import { body, param } from 'express-validator'
import { handlerInputErrors } from './middleware'

const rutas = Router()

rutas.get('/', getGuitarras)

rutas.get('/:id',
    param('id').isInt().withMessage('El ID proporcionado no tiene un formato válido'),
    handlerInputErrors,
    getGuitarraById
)

rutas.post('/',
    body('nombre')
        .notEmpty().withMessage('El campo nombre es obligatorio'),
    body('descripcion')
        .notEmpty().withMessage('El campo descripción es obligatorio'),
    body('precio')
        .isNumeric().withMessage('El precio debe ser un número')
        .notEmpty().withMessage('El precio es un campo obligatorio')
        .custom(value => value > 0).withMessage('El precio debe ser mayor a 0'),
    body('img')
        .notEmpty().withMessage('La referencia a la imagen es obligatoria'),
    handlerInputErrors,
    createGuitarra
)

rutas.put('/:id',
    param('id').isInt().withMessage('El ID proporcionado no tiene un formato válido'),
    body('nombre')
        .notEmpty().withMessage('El campo nombre es obligatorio'),
    body('descripcion')
        .notEmpty().withMessage('El campo descripción es obligatorio'),
    body('precio')
        .isNumeric().withMessage('El precio debe ser un número')
        .notEmpty().withMessage('El precio es un campo obligatorio')
        .custom(value => value > 0).withMessage('El precio debe ser mayor a 0'),
    body('img')
        .notEmpty().withMessage('La referencia a la imagen es obligatoria'),
    handlerInputErrors,
    updateGuitarra
)

rutas.delete('/:id',
    param('id').isInt().withMessage('El ID proporcionado no tiene un formato válido'),
    handlerInputErrors,
    deleteGuitarra
)

export default rutas