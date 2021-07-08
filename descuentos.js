// Crea una página web para calcular descuentos

const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
}

// Nos va a traer en la consola un objeto con los atributos de los valores que pedimos
/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

