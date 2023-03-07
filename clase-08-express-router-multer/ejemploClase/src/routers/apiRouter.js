import express, { Router } from 'express'
import { personasRouter } from './personasRouter.js'
import { ventasRouter } from './ventasRouter.js'

export const apiRouter = Router()

apiRouter.use((req, res, next) => {
    console.log('pasa por el api router')
    next()
})

// function json(req, res, next){
//     //extraer el cuerpo de la peticion
//     //req.body = JSON.parse(cuerpo)
//     next()
// }

// function urlencoded(req, res, next) {
//     const queryString = req.url.split('?')[0]
//     // parseo el queryString
//     req.body = 'queryStringParseado'
//     next()
// }

apiRouter.use(express.json())
apiRouter.use(express.urlencoded({ extended: true }))

apiRouter.use('/personas', personasRouter)
apiRouter.use('/ventas', ventasRouter)