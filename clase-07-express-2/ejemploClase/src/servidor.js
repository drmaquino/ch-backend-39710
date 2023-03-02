import express from 'express'

const app = express()

app.get('/personas', (req, res) => {
    res.json({ ruta: 'personas', urlParams: req.params, queryParams: req.query })
})

app.get('/verduras', (req, res) => {
    res.send('<h1>verduras!!</h1>')
})

app.get('/cosas', (req, res) => {
    res.sendFile('cosas.html', { root: './views' })
})

app.get('/descargas', (req, res) => {
    res.download('./views/cosas.html')
})

app.get('/usuarios/:nroUsuario/propiedades', (req, res) => {

    // forma tradicional, formalmente correcta
    // if (isNaN(Number(req.params.nroUsuario))) {
    //     res.status(400).json({ message: 'formato incorrecto de numero de usuario' })
    // } else {
    //     res/*.status(200)*/.json({ ruta: 'usuarios', urlParams: req.params, queryParams: req.query })
    // }

    // early return
    if (isNaN(Number(req.params.nroUsuario))) {
        return res.status(400).json({ message: 'formato incorrecto de numero de usuario' })
    }
    res/*.status(200)*/.json({ ruta: 'usuarios', urlParams: req.params, queryParams: req.query })
})

const server = app.listen(8080)



// ejemplo hipermedios

// // /personas?nroPagina=2&cantXPag=5,
// const personas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']
// app.get('/personas', (req, res) => {
//     const { nroPagina, cantXPag } = req.query
//     // validaciones!
//     res.json({
//         elems: personas.slice(cantXPag * nroPagina, cantXPag * (nroPagina + 1))
//         prev: `/personas?nroPagina=${nroPagina - 1}&cantXPag=${cantXPag}`, // /personas?nroPagina=1&cantXPag=5,
//         next: `/personas?nroPagina=${nroPagina + 1}&cantXPag=${cantXPag}`, // /personas?nroPagina=3&cantXPag=5,
//     })
// })