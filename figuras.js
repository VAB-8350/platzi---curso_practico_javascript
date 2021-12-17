// codigo de cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
};

function areaCuadrada(lado){
    return lado * lado;
};


// codigo de triangulo


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


// codigo de circulo

function circunferencia(diametro) {
    return diametro * Math.PI;
};

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
};

// aqui interactuamos con html
function calcularPerimetroCuadrado() {
    const value = document.getElementById('inputCuadrado').value;
    alert('El perimetro de su cuadrado es de: '+perimetroCuadrado(value));
};
function calcularAreaCuadrado() {
    const value = document.getElementById('inputCuadrado').value;
    alert('El area de su cuadrado es de: '+areaCuadrada(value));
};