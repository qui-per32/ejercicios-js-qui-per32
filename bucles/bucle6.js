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

// ej 6
// crea un array con la gente que su nombre tiene 4 letras
// utilizando el metodo filter de los arrays
// y muestralo por consola.

let ArrayLetras = gente.filter(function (name) {
    return name.nombre.length == 4;
});
console.log(ArrayLetras);