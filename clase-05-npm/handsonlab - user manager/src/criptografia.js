import crypto from 'crypto';

// Un salt será un "código secreto" para encriptar las contraseñas
export function createSalt() {
    const salt = crypto.randomBytes(128).toString('base64')
    return salt
}

export function encriptar(sinEncriptar, salt) {
    const encriptado = crypto.createHmac('sha256', salt).update(sinEncriptar).digest('hex');
    return encriptado;
}
