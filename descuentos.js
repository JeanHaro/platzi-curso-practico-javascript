// Reto

const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

/* function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const inputDiscount = document.getElementById('inputDiscount');
    const valuePrice = inputPrice.value;
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, valueDiscount);

    const resultP = document.getElementById('resultP');
    resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
} */

/* const coupons = ['Basic', 'Expert', 'Expert+']; */

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('inputPrice');
    const valuePrice = inputPrice.value;
    const selectCoupons = document.getElementById('inputCoupons');
    const valueCoupons = selectCoupons.value;

    let discount;

    switch (valueCoupons) {
        case '0': 
            discount = 15;
            break;
        case '1':
            discount = 25;
            break;
        case '2':
            discount = 35;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(valuePrice, discount);
    const resultP = document.getElementById('resultP');
    resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
}