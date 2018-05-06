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


// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el metodo filter de los arrays
// Utilizad el bucle for of
// y muestralo por consola.


var startForJ = [];

for (const obj of gente) {
    if (obj.nombre[0] == "J") {
        startForJ.push(obj);
    }
}

console.log(startForJ);
