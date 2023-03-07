import express, { Router } from 'express'
import { FileManager } from './FileManager.js'
import { randomUUID } from 'crypto'
import { Persona } from './Persona.js'

export const apiRouter = Router()

apiRouter.use(express.json())
apiRouter.use(express.urlencoded({ extended: true }))

const personasManager = new FileManager('./database/cosas.json')

apiRouter.get('/personas', async (req, res, next) => {
    try {
        const personas = await personasManager.buscarCosas()
        res.json(personas)
    } catch (error) {
        next(error)
    }
})
apiRouter.get('/personas/:pid', async (req, res, next) => {
    try {
        const persona = await personasManager.buscarCosaSegunId(req.params.pid)
        res.json(persona)
    } catch (error) {
        next(error)
    }
})
apiRouter.post('/personas', async (req, res, next) => {
    try {
        const persona = new Persona({
            id: randomUUID(),
            ...req.body
        })
        const agregada = await personasManager.guardarCosa(persona)
        res.json(agregada)
    } catch (error) {
        next(error)
    }
})
apiRouter.put('/personas/:pid', async (req, res, next) => {
    let personaNueva
    try {
        personaNueva = new Persona({
            id: req.params.pid,
            ...req.body
        })
    } catch (error) {
        next(error)
        return
    }

    try {
        const personaReemplazada = await personasManager.reemplazarCosa(req.params.pid, personaNueva)
        res.json(personaReemplazada)
    } catch (error) {
        next(error)
    }
})
apiRouter.delete('/personas/:pid', async (req, res, next) => {
    try {
        const borrada = await personasManager.borrarCosaSegunId(req.params.pid)
        res.json(borrada)
        // res.sendStatus(204)
    } catch (error) {
        next(error)
    }
})
