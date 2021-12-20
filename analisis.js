// function helpers
function esPar(numero) {
    return (numero % 2 === 0);
};

const salariosArg = argentina.map((persona) => {
    return persona.salary
});
const salarioInOrder = salariosArg.sort((salaryA, salaryB) => {
    return salaryA - salaryB
});

// calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const persona1 = lista[mitad];
        const persona2 = lista[mitad - 1];
        return (persona1 + persona2) / 2;
    }else{
        return lista[mitad];
    }
}

const medianaArg = medianaSalarios(salarioInOrder);


// mediana top 10%
const spliceStart = (salarioInOrder.length * (90))/100;
const spliceEnd = salarioInOrder.length - spliceStart;

const salarios10Top = salarioInOrder.splice(spliceStart, spliceEnd);

const medianaTop10Arg = medianaSalarios(salarios10Top);

console.log({
    medianaArg,
    medianaTop10Arg,
})