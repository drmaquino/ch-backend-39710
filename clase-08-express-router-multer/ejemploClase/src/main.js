import express from 'express'
import { webRouter } from './routers/webRouter.js'
import { apiRouter } from './routers/apiRouter.js'

const app = express()

app.use((req, res, next) => {
    console.log('llega la peticion al servidor')
    next()
})

app.use('/', webRouter)

app.use('/api', apiRouter)

app.use((req, res, next) => {
    console.log('sigo cargando middlewares')
    next()
})

// app.use('/api', apiRouter)

const PORT = 8080
const server = app.listen(PORT, () => { console.log(`escuchando en ${PORT}`) })