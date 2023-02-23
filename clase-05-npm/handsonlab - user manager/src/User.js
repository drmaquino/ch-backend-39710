export class User {
    constructor({ nombre, apellido, username, password, salt }) {
        this.nombre = nombre
        this.apellido = apellido
        this.username = username
        this.password = password
        this.salt = salt
    }
}