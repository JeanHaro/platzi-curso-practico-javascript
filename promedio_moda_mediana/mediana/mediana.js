// input de indicar la cantidad de número
let inputAmount = document.getElementById('inputAmount');

// Añadir datos
let containerResult = document.querySelector('.container-result .content-dividend .dividend');
let containerResultFinish = document.querySelector('.container-result .result');

// divs
let contAmount = document.querySelector('form .content-amount');
let contResult = document.querySelector('form .container-result');

function mostrarDatos() {
    contAmount.style.display = 'none';
    contResult.style.display = 'flex';

    for (let i = 0; i < inputAmount.value; i++) {
        containerResult.innerHTML += `<div class="inputBox">
                                        <input id="" type="number">
                                    </div>`;
    }
    contentDivider.innerText = inputAmount.value;
}

function resultMediana() {
    const listaValores = document.querySelectorAll('.container-result .content-dividend .dividend input');
    let lista = new Array;

    for (let i = 0; i < listaValores.length; i++) {
        lista.push(Number(listaValores[i].value));
    }

    containerResultFinish.innerHTML = calcularMediana(lista);
}

function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

/* const lista1 = [
    100,
    200,
    500,
    400000000,
]; */

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana (lista) {
    lista.sort(function (numA, numB) {
        return numA - numB;
    })    

    const mitadLista = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        return promedioElemento1y2;
    } else {
        return lista[mitadLista];
    }
}

calcularMediana ([200, 800, 400000000, 500, 100]); // 500

/* let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
} */