// primitivos

// java
// int edad = 5;
// String nombre = 'marian';
// bool puedeVolar = true;

// typescript
// const edad: int = 5;
// const nombre: string = 'marian';
// const puedeVolar: bool = true;

// javascript
const edad = 5
const nombre = 'marian'
const puedeVolar = true

//--------------------------------------------

// compuestos (de tipo objeto)

// javascript

// objetos literales/array asociativo/diccionarios
const objetoLiteral = { hola: 'mundo' }
// es un atajo de:
new Object() // pero nunca lo vamos a crear así

// tienen formato de diccionario, es decir, consisten de pares clave:valor, separados por comas

// array (internamente son arrays asociativos tambien, pero con claves numericas
// , y una propiedad 'length' que se ajusta automaticamente)
const array = []
// es atajo de:
new Array() // pero nunca lo vamos a crear así

// Diccionario (Map)
const dict = new Map()
// tienen formato de diccionario, es decir, consisten de pares clave:valor, pero tiene metodos para operar con su contenido