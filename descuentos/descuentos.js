// Reto

const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

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
    resultP.style.display = 'block';
    resultP.innerText = '$' + precioConDescuento;
}