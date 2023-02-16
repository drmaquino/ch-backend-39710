import fs from 'fs'

// const rutaAbsoluta = '/home/drmaquino/Documents/CODERHOUSE/coderhouse-backend-39710/Clase4ManejoDeArchivos/ejemplosClase/timers.js'

// const raiz = '/home/drmaquino/Documents/CODERHOUSE/coderhouse-backend-39710/Clase4ManejoDeArchivos/ejemplosClase'
// const restoDeLaRuta = 'timers.js'
// const rutaRelativa = `${raiz}/${restoDeLaRuta}`

console.log(fs.readFileSync('timers/timers.js', 'utf-8'))