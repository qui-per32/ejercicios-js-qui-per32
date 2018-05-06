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

// ej 4
// crea un array con la gente mayor de 25 años.
// y muestralo por consola.
// Sin utilizar el metodo filter de los arrays
// Utilizad el bucle for of

var olderThan25 = [];

for (const obj of gente) {
    if (obj.edad > 25) {
        olderThan25.push(obj);
    }
}

console.log(olderThan25);

