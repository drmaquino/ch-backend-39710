import express from 'express'
import { PORT } from './config.js'
import fs from 'fs/promises'

const app = express()

async function renderizar(rutaPlantilla, contenidos) {
    let plantilla = await fs.readFile(rutaPlantilla, 'utf-8')
    for (const contenido in contenidos) {
        plantilla = plantilla.replace('{{' + contenido + '}}', contenidos[contenido])
    }
    return plantilla
}

app.get('/', async (req, res, next) => {
    const html = await renderizar('./views/plantilla.html', { titulo: 'Inicio', encabezado: 'Inicio' })
    res.send(html)
})

app.get('/contacto', async (req, res, next) => {
    let html = await renderizar('./views/plantilla.html', { titulo: 'Contacto', encabezado: 'Contacto' })

    const skills = ['codear', 'comer', 'jugar al lol', 'dormir mucho']

    html = html.replace('{{lista}}',
        `<ul>` + skills.map(sk => `<li>${sk}</li>`).join('') + `</ul>`)

    res.send(html)
})

app.get('/about', async (req, res, next) => {
    const plantilla = await fs.readFile('./views/plantilla.html', 'utf-8')
    let resultado = plantilla.replace('{{titulo}}', 'About')
    resultado = resultado.replace('{{encabezado}}', 'Acerca de...')
    res.send(resultado)
})

app.listen(PORT, () => {
    console.log(`escuchando en puerto ${PORT}`)
})