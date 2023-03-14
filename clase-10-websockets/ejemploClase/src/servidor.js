import express from 'express'
import { engine } from 'express-handlebars'
import { Server as SocketIOServer } from 'socket.io'
import { FileManager } from './FileManager.js'

const mensajesManager = new FileManager('./localStorage/mensajes.json')

const app = express()

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use(express.static('./public'))

const httpServer = app.listen(8080)
// lo mismo que me devuelve el http.createServer() !!

const io = new SocketIOServer(httpServer)

io.on('connection', async clientSocket => {
    // console.log(`nuevo cliente conectado! socket id #${clientSocket.id}`)

    // manejador/controller de nuevos mensajes 
    clientSocket.on('nuevoMensaje', async mensaje => {
        // console.log(`#${clientSocket.id} dice:`)
        // console.log(mensaje)
        await mensajesManager.guardarCosa(mensaje)
        const mensajes = await mensajesManager.buscarCosas()
        const mensajesParaFront = mensajes.map(m => ({ ...m, fecha: new Date(m.fecha).toLocaleTimeString() }))
        io.sockets.emit('actualizarMensajes', mensajesParaFront)
    })

    const mensajes = await mensajesManager.buscarCosas()
    const mensajesParaFront = mensajes.map(m => ({ ...m, fecha: new Date(m.fecha).toLocaleTimeString() }))
    io.sockets.emit('actualizarMensajes', mensajesParaFront)
})

app.get('/', async (req, res) => {
    const mensajes = await mensajesManager.buscarCosas()
    res.render('mensajes', {
        pageTitle: 'Chat'
    })
})
