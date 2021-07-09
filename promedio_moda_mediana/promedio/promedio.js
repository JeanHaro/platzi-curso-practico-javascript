// Calculando el promedio en JavaScript

/* const lista1 = [
    100,
    200,
    300,
    500,
]; */

// La lista lo tendría que mandar en un array
function calcularMediaAritmetica (lista) {
    /* 
    let sumaLista = 0;

    Para sumar todo los valores numéricos del Array
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    } 
    */

    /* reduce() -> Va a recibir una función, nosotros tenemos que enviar como argumento una función a
    este método reduce() y nos va a permitir sumar cada uno de los elementos */
    const sumaLista = lista.reduce(
        // Cuando JS no nos da nada, el valor por defecto de valorAcumulado será 0 porque lo colocamos ahí
        // El nuevoElemento es el que traerá los números, y sumará con lo que se vaya acumulando en el valorAcumulado
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

calcularMediaAritmetica([1,14,151,98]); // 66