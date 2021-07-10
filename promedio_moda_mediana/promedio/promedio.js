// Calculando el promedio en JavaScript

// input de indicar la cantidad de número
let inputAmount = document.getElementById('inputAmount');

// Añadir datos
let containerResult = document.querySelector('.container-result .content-dividend .dividend');
let contentDivider = document.querySelector('.container-result .divider');
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

function resultMediaAritmetica() {
    const listaValores = document.querySelectorAll('.container-result .content-dividend .dividend input');
    let lista = new Array;

    for (let i = 0; i < listaValores.length; i++) {
        lista.push(Number(listaValores[i].value));
    }

    containerResultFinish.innerHTML = calcularMediaAritmetica(lista);
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

calcularMediaAritmetica([1,14,151,98]); // 66

// Reto 2
//  Media Geométrica <-
function calcularMediaGeometrica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 1, nuevoElemento) {
            return valorAcumulado * nuevoElemento;
        }
    );
    
    const promedioLista = Math.pow(sumaLista, 1/lista.length);

    return promedioLista;
}

console.log(calcularMediaGeometrica([4,25,100])); // 21.544346900318835