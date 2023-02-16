import fs from 'fs'

const ruta = './static/agenda.txt'

let agenda

function contameUnCuento() {
    console.log('habia una vez...truz')
}

function cargarAgenda() {
    const json = fs.readFileSync(ruta, 'utf-8')
    agenda = JSON.parse(json)
}

function guardarAgenda() {
    const json = JSON.stringify(agenda, null, 2)
    fs.writeFileSync(ruta, json)
}

function mostrarAgenda() {
    console.log(agenda)
}

function agregarContacto(contacto) {
    agenda.push(contacto)
}

function eliminarEvidencia() {
    fs.rmSync(ruta,)
}

function operarConLaAgenda() {
    cargarAgenda()
    mostrarAgenda()
    agregarContacto({ "andres": "9834759827435" })
    mostrarAgenda()
    guardarAgenda()
}

operarConLaAgenda()
contameUnCuento()

// setTimeout(eliminarEvidencia, 5000)