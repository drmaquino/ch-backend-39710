import { Router } from 'express'

export const personasRouter = Router()

function antesDelGet(req, res, next) {
    console.log('pasa por el get a personas')
    next()
}

function getController(req, res, next) {
    res.json()
}

personasRouter.get('/', antesDelGet, getController)

personasRouter.post('/', (req, res, next) => { res.json([]) })

personasRouter.put('/', (req, res, next) => { res.json([]) })

personasRouter.delete('/', (req, res, next) => { res.json([]) })

