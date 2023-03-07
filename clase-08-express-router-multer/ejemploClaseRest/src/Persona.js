export class Persona {
    constructor({ id, nombre, rol }) {
        if (!id) throw new Error('falta un argumento')
        if (!nombre) throw new Error('falta un argumento')
        if (!rol) throw new Error('falta un argumento')

        this.id = id
        this.nombre = nombre
        this.rol = rol
    }
}