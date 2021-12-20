const lista1 = [
    100, 
    200, 
    300, 
    400,
];

function mediaAritmetica(array){
    // var acum = 0;
    // for (const i of array) {
    //     acum += i;
    // }

    const sum = array.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    return sum / array.length;
}