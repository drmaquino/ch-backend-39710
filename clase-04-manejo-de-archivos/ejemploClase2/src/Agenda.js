import fs from 'fs/promises'
import { randomUUID } from 'crypto'

class Agenda {
    constructor(ruta) {
        this.ruta = ruta
    }

    async cargarAgenda() {
        const json = await fs.readFile(this.ruta, 'utf-8')
        this.agenda = JSON.parse(json)
    }

    async guardarAgenda() {
        const json = JSON.stringify(this.agenda, null, 2)
        await fs.writeFile(this.ruta, json)
    }

    async mostrarAgenda() {
        await this.cargarAgenda()
        console.log(this.agenda)
    }

    async agregarContacto(contacto) {
        await this.cargarAgenda()
        this.agenda.push(contacto)
        await this.guardarAgenda()
    }

    async eliminarEvidencia() {
        await fs.rm(this.ruta)
    }
}

const agenda = new Agenda('./static/agenda.txt')

await agenda.mostrarAgenda()
await agenda.agregarContacto({ "andres": "9834759827435" })
await agenda.mostrarAgenda()

console.log(randomUUID())