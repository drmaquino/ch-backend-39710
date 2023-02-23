import fs from 'fs/promises'
import { User } from './User.js'
import { createSalt, encriptar } from './criptografia.js'

export class UserManager {
    #users
    #ruta

    constructor(ruta) {
        this.#ruta = ruta
        this.#users = []
    }

    async #leer() {
        const json = await fs.readFile(this.#ruta, 'utf-8')
        this.#users = JSON.parse(json)
    }

    async #escribir() {
        const nuevoJson = JSON.stringify(this.#users, null, 2)
        await fs.writeFile(this.#ruta, nuevoJson)
    }

    async crearUsuario({ nombre, apellido, username, password: sinEncriptar }) {
        await this.#leer()

        const existe = this.#users.find(u => u.username === username)
        if (existe) {
            throw new Error('el nombre de usuario ya existe')
        }

        const salt = createSalt()
        const password = encriptar(sinEncriptar, salt)
        const user = new User({ nombre, apellido, username, password, salt })
        this.#users.push(user)

        await this.#escribir()

        return user
    }

    async loguear({ username, password }) {
        await this.#leer()

        const user = this.#users.find(u => u.username === username)

        if (user.password === encriptar(password, user.salt)) {
            return user
        } else {
            throw new Error('credenciales invalidas')
        }
    }

    async reset() {
        this.#users = []
        await this.#escribir()
    }
}
