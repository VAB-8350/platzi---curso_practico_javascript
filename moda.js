const lista1 = [
    300,
    200, 
    600000000,
    400, 
    2,
    2,
    2,
    4,
    2,
    7,
    3,
    7,
    5,
    7,
    3
];

// const lista1count = {}; 

// lista1.map(
//     function (elemento) {
//         if(lista1count[elemento]){
//             lista1count[elemento] ++;
//         }else {
//             lista1count[elemento] = 1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1count).sort(
//     function(valorAcumulado, nuevoValor) {
//         return valorAcumulado[1] - nuevoValor[1]
//     }
// );

// const moda = lista1Array[lista1Array.length - 1];

function moda(array) {
    let listCount = [];

    for (const i of array) {
        elemento = listCount.find(a => a[0] === String(i));
        if(elemento){ 
            elemento[1] ++;      
        }else{
            listCount.push([String(i), 1]);
        }
    };

    listCount = listCount.sort(function(a,b){
        return a[1] - b[1];
    });

    return listCount[listCount.length -1];
};