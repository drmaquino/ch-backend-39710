import express from 'express'

const app = express()

// app.get('/usuarios/:nroUsuario/propiedades', (req, res) => {
//     console.log(req.params)
//     console.log(req.query)
//     res.send(`<h1>Aguante Express</h1>
// ${JSON.stringify(req.params)}
// ${JSON.stringify(req.query)}
// `)
// })

app.get('/usuarios/:nroUsuario/propiedades', (req, res) => {
    res.json({ ruta: 'usuarios', urlParams: req.params, queryParams: req.query })
})

app.get('/cosas', (req, res) => {
    // res.json({ ruta: 'cosas', urlParams: req.params, queryParams: req.query })
    res.sendFile('cosas.html', { root: './views' })
})

app.get('/personas', (req, res) => {
    res.json({ ruta: 'personas', urlParams: req.params, queryParams: req.query })
})

const server = app.listen(8080)