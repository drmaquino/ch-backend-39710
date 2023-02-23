import { UserManager } from './UserManager.js'
import colors from 'colors'

const um = new UserManager('./database/usuarios.json')
await um.reset()

try {

    const user = await um.crearUsuario({
        nombre: 'marian',
        apellido: 'aquino',
        username: 'marian',
        password: '123456'
    })

    console.log(user)

    const loggedUser = await um.loguear({
        username: 'marian',
        password: '123456'
    })

    console.log(loggedUser)
} catch (error) {
    console.log(error.message)
}

console.log(colors.magenta('fin'))