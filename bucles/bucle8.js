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


// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

function multipliclar(valor, multipliclar) {
    resto = valor % multipliclar;
    if (resto == 0)
        return true;
    else
        return false;
}

var ArrayFilter = [];

for (var i = 1; i <= 100; i++) {
    if (i) {
        ArrayFilter.push(i);
    }
    if (multipliclar(i, 3)) {
        ArrayFilter.pop(i);
        ArrayFilter.push("GEEKS");
    }
    if (multipliclar(i, 5)) {
        ArrayFilter.pop(i);
        ArrayFilter.push("HUBS");
    }
    if ((multipliclar(i, 3)) && (multipliclar(i, 5))) {
        ArrayFilter.pop(i);
        ArrayFilter.push("GEEKHUBS");
    }
}

console.log(ArrayFilter);