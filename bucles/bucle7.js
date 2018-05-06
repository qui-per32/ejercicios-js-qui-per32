let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]

// ej 7
// crea un array con la gente que su nombre empieza por J o L
// utilizando el metodo filter de los arrays
// y muestralo por consola.

let ArrayLetras = gente.filter(function (name) {
    return (name.nombre.charAt(0) == 'J') || (name.nombre.charAt(0) == 'L');
});
console.log(ArrayLetras);