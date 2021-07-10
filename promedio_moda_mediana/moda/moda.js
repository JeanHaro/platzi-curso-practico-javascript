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
}

function resultModa() {
    const listaValores = document.querySelectorAll('.container-result .content-dividend .dividend input');
    let lista = new Array;

    for (let i = 0; i < listaValores.length; i++) {
        lista.push(Number(listaValores[i].value));
    }

    containerResultFinish.innerHTML = `[${calcularModa(lista)}]`;
}

function calcularModa (lista) {
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;

            } else {
                listaCount[elemento] = 1;
            }
        }
    )

    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
    });

    const moda = listaArray[listaArray.length - 1];

    return moda;
}

calcularModa([5, 8, 8, 6, 5, 5, 3, 2, 1, 4, 4,]); // ['5', 3]