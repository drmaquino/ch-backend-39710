import fs from 'fs/promises'

export class FileManager {
    #cosas
    #ruta

    constructor(ruta) {
        this.#ruta = ruta
        this.#cosas = []
    }

    async #leer() {
        const json = await fs.readFile(this.#ruta, 'utf-8')
        this.#cosas = JSON.parse(json)
    }

    async #escribir() {
        const nuevoJson = JSON.stringify(this.#cosas, null, 2)
        await fs.writeFile(this.#ruta, nuevoJson)
    }

    async guardarCosa(cosa) {
        await this.#leer()
        this.#cosas.push(cosa)
        await this.#escribir()
        return cosa
    }

    async buscarCosas() {
        await this.#leer()
        return this.#cosas
    }

    async buscarCosaSegunId(id) {
        await this.#leer()
        const buscada = this.#cosas.find(c => c.id === id)
        if (!buscada) {
            throw new Error('id no encontrado')
        }
        return buscada
    }

    async reemplazarCosa(id, nuevaCosa) {
        await this.#leer()
        const indiceBuscado = this.#cosas.findIndex(c => c.id === id)
        if (indiceBuscado === -1) {
            throw new Error('id no encontrado')
        }
        this.#cosas[indiceBuscado] = nuevaCosa
        await this.#escribir()
        return nuevaCosa
    }

    async borrarCosaSegunId(id) {
        await this.#leer()
        const indiceBuscado = this.#cosas.findIndex(c => c.id === id)
        if (indiceBuscado === -1) {
            throw new Error('id no encontrado')
        }
        const [borrado] = this.#cosas.splice(indiceBuscado, 1)
        await this.#escribir()
        return borrado
    }

    async reset() {
        this.#cosas = []
        await this.#escribir()
    }
}