import express from 'express'
import { FileManager } from './FileManager.js'
import { randomUUID } from 'crypto'
import { Persona } from './Persona.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const personasManager = new FileManager('./database/cosas.json')

app.get('/personas', async (req, res) => {
    try {
        const personas = await personasManager.buscarCosas()
        res.json(personas)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/personas/:pid', async (req, res) => {
    try {
        const persona = await personasManager.buscarCosaSegunId(req.params.pid)
        res.json(persona)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

app.post('/personas', async (req, res) => {

    const persona = new Persona({
        id: randomUUID(),
        ...req.body
    })

    const agregada = await personasManager.guardarCosa(persona)
    res.json(agregada)
})

app.put('/personas/:pid', async (req, res) => {
    let personaNueva
    try {
        personaNueva = new Persona({
            id: req.params.pid,
            ...req.body
        })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

    try {
        const personaReemplazada = await personasManager.reemplazarCosa(req.params.pid, personaNueva)
        res.json(personaReemplazada)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

app.delete('/personas/:pid', async (req, res) => {
    try {
        const borrada = await personasManager.borrarCosaSegunId(req.params.pid)
        res.json(borrada)
        // res.sendStatus(204)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

const server = app.listen(8080)
