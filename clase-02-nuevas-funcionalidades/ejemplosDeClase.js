// console.log(Math.pow(5, 2))
// console.log(5 ** 2)

// console.log([1, 2, 3, 4, 5, 6].includes(3))
// console.log([1, 2, 3, 4, 5, 6].includes(8))

// const numbers = [1, 2, 3, 4, 5, 6]
// for(const num of numbers) {
//     console.log(num)
// }

// const numbers = [10, 20, 30, 40, 50, 60]
// for (const key in numbers) {
//     console.log(numbers[key])
// }

// console.log(Object.keys({ nombre: 'marian', edad: 36 }))
// console.log(Object.values({ nombre: 'marian', edad: 36 }))
// console.log(Object.entries({ nombre: 'marian', edad: 36 }))

// const persona = { nombre: 'marian', edad: 36 }
// const datosNuevos = { direccion: 'rivadavia 123', nombre: 'profe marian' }
// const copiaPersona = { ...persona, ...datosNuevos }
// console.log(copiaPersona)

// const numbers = [1, 2, 3, 4, 5]
// const datosNuevos = [8, 9, 10]
// const copiaNumbers = [...numbers, ...datosNuevos]
// console.log(copiaNumbers)

// const numbers = [1, 2, 3, 4, 5]

// function mostrar(priArg, segArg, terArg, ...losQueQuedan) {
//     // priArg = arguments[0]
//     // segArg = arguments[1]
//     // terArg = arguments[2]
//     // losQueQuedan[0] = arguments[3]
//     // losQueQuedan[1] = arguments[4]
//     console.log(priArg)
//     console.log(segArg)
//     console.log(terArg)
//     console.log(losQueQuedan)
//     console.log(arguments)
// }

// console.log('hola', 'chau', 'jajajja')

// mostrar(...numbers)
// equivale a hacer: mostrar(1, 2, 3, 4, 5)
// mostrar(1, 2, 3, 4, 5)

// function mostrar(...args) {
//     console.log(args[0])
//     console.log(args[1])
//     console.log(args)
// }

// mostrar(1, 2, 3, 4, 5)

// function crearPunto(x, y) {
//     console.log({ x, y })
// }

// crearPunto(5, 7)

// function sumatoria(...numeros) {
//     // numeros es un array con los argumentos enviados
//     // let suma = 0
//     // for (const num of numeros) {
//     //     suma += num
//     // }
//     // return suma
//     return numeros.reduce((acumulado, actual) => acumulado + actual, 0)

//     // 0  [1,2,3,4]
//     // 1  [2,3,4]
//     // 3  [3,4]
//     // 6  [4]
//     // 10 []
// }

// console.log(sumatoria(1, 4, 6, 8, 12, 46))


// function ver(cosas) {
//     console.log(cosas)
// }

// const o = { hola: 'mundo' }
// ver(...Object.entries(o))

// const mensaje = '     hola      '
// console.log(mensaje.trim())
// console.log(mensaje.trimStart())
// console.log(mensaje.trimEnd())

// console.log([1, 2, 3, 4, [5, 6, 7, [8, 9, 10]]].flat(3))

// // import estatico
// import fs from 'fs'
// // import dinamico
// async function f() {
//     if (1 == 1) {
//         const fs = await import('fs')
//     }
// }

// if ('string no vacio da true') {
//     console.log('wow que loco')
// }

// console.log('' || 'tu casa')

// let tamanioEnCm
// if (true) {
//     tamanioEnCm = 0
// }
// console.log(tamanioEnCm ?? 'tamaño invalido')

const contenedor = new Contenedor()
contenedor.agregar(new Persona({ nombre: 'marian', edad: 36 }))
contenedor.agregar(new Persona({ nombre: 'pepe', edad: 37 }))
contenedor.agregar(new Persona({ nombre: 'anderson', edad: 35 }))
console.log(contenedor.obtenerTodo())
// [Persona {nombre:'marian', edad: 36}, Persona {nombre:'pepe', edad: 37}, Persona {nombre:'anderson', edad: 35}]
console.log(contenedor.obtenerPorNombre('marian'))
// Persona { nombre:'marian', edad: 36 }