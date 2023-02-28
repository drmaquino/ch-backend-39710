// throw 

function division(dividendo, divisor) {
    if (divisor === 0) throw new Error('no se puede dividir por cero')
    const cociente = dividendo / divisor
    return cociente
}

function main() {
    const resultado = division(10, 0)
    console.log(resultado)
}

try {
    main()
} catch (error) {
    console.log(error)
    // console.log(error.message)
}

