// Calculando la moda en JavaScript
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

// map() - Nos ayudará a recorrer el array
lista1.map(
    function (elemento) {
        // vemos si existe ese elemento
        if (lista1Count[elemento]) {
            // Como ve que existe, entonces al atributo del objeto que es le va aumentando 1
            lista1Count[elemento] += 1;

        // si no existe el elemento
        } else {
            // para que guarde el elemento
            // Pone como atributo el valor 1 al objeto, porque apareció 1 vez
            lista1Count[elemento] = 1;
        }
        
    }
);

lista1Count; // { 1:3, 2:5, 3:2, 4:1}

// Convertimos a Array a la lista1Count
// Object.entries() - le enviamos como argumento el objeto que queremos pasarlo a Array
// Utilizamos sort() -> para ordenar nuestra lista
const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        /* Como todos son Array y queremos que nos ordene según el segundo Array de esos Array,
        le ponemos que ordene de la segunda posición Array[1] */
        return valorAcumulado[1] - nuevoValor[1];
});

list1Array //[ [ '4', 1 ], [ '3', 2 ], [ '1', 3 ], [ '2', 5 ] ]

const moda = lista1Array[lista1Array.length - 1]; // [ '2', 5 ]



