function alturaTriangulo (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 != lado3) {

        const media = (lado3 / 2);
        altura = Math.sqrt((lado1 * lado1) - (media * media));

        if (lado1 + lado2 > lado3) console.log(altura);
        else console.log('No es un triángulo');

    } else if (lado1 == lado3 && lado1 != lado2) {

        const media = (lado2 / 2);
        altura = Math.sqrt((lado1 * lado1) - (media * media));

        if (lado1 + lado3 > lado2) console.log(altura);
        else console.log('No es un triángulo');

    } else if (lado2 == lado3 && lado2 != lado1) {

        const media = (lado2 / 2);
        altura = Math.sqrt((lado1 * lado1) - (media * media));
        
        if (lado2 + lado3 > lado1) console.log(altura);
        else console.log('No es un triángulo');

    } else {
        console.log('No es un triángulo isósceles');
    }
}

alturaTriangulo(8, 8, 10); //6.244997998398398

