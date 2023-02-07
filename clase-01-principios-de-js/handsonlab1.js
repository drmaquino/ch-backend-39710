/**
 * @param {Array} lista 
 */
function mostrarLista(lista) {
    if (!Array.isArray(lista)) throw new Error('invalid argument')

    if (lista.length === 0) {
        console.log('lista vacia')
    } else {
        for (const elemento of lista) {
            console.log(elemento)
        }
        console.log(`longitud de la lista: ${lista.length}`)
    }
}

mostrarLista([])
mostrarLista([1, 2, 3])
mostrarLista('chaucito')

