function CalcularPrecioConDescuento(precio, descuento){
    return (precio*(100 - descuento))/100
}

const cupones = [
    {
        name: 'cupon1',
        descuento: 5
    },
    {
        name: 'cupon2',
        descuento: 10
    },
    {
        name: 'cupon3',
        descuento: 15
    }
]
function validarCupon(name) {
    return cupones.find(cupon => cupon.name === name)
}

function printDescuento() {
    const p = document.getElementById('resultP');
    const pC = document.getElementById('nameCupon');
    const inputPrice = document.getElementById("precio").value;
    const inputCupon = document.getElementById("cupon").value;

    if (validarCupon(inputCupon)) {
        const result = CalcularPrecioConDescuento(inputPrice, validarCupon(inputCupon).descuento);
        pC.innerText = 'Tu cupon es: ' + inputCupon + ', y tu descuento es de: ' + validarCupon(inputCupon).descuento + '%';
        p.innerText = 'El precio con el descuento es de: $' + result
    }else {
        p.innerText = 'el cupon "' + result +'" es invalido.'
    }

    
}
