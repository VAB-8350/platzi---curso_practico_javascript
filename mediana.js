const lista1 = [
    300,
    200, 
    600000000,
    400, 
];


function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

function mediaAritmetica(array){ 
    var acum = 0;
    for (const i of array) {
        acum += i;
    }
    return acum / array.length;
}


function mediana(array) {
    array = array.sort();

    let mediana;
    const mitadLista = parseInt(lista1.length / 2);

    if (esPar(array.length)) {
        const elemento1 = array[mitadLista];
        const elemento2 = array[mitadLista - 1];

        mediana = mediaAritmetica([elemento1, elemento2]);
    }else {
        mediana = array[mitadLista]
    }

    return mediana
}