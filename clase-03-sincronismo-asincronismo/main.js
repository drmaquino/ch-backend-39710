function saludar(mensaje) {
    console.log(mensaje)
    guardar(mensaje)
}

function despedirse() {
    console.log()
}

// no bloqueante !!
function guardar(texto) {
    console.log('guardado!')
}

function tardaMucho() {
    console.log()
}

function main() {
    const nombre = 'marian'
    saludar(nombre)
    tardaMucho()
    despedirse()
}

main()