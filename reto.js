var fondo = [];


function addIngreso() {
    const ingreso = document.getElementById('ingreso').value;
    fondo.push({tipo: 'ingreso', value: ingreso});
    actualizarPantalla();
}

function addEgreso() {
    const egreso = document.getElementById('egreso').value;
    fondo.push({tipo: 'egreso', value: egreso});
    actualizarPantalla();
}

function actualizarPantalla() {
    var sumIngreso = 0;
    var sumEgreso = 0;
    const monto = document.getElementById('monto');
    const ingresos = fondo.filter(ingresos => ingresos.tipo === 'ingreso');
    const egresos = fondo.filter(egresos => egresos.tipo === 'egreso');

    if (ingresos.length > 0) {
        const totalIngreso = ingresos.map((item) => {
            return Number(item.value);
        });
        sumIngreso = totalIngreso.reduce((sum, item) => sum + item);
    };
    
    if (egresos.length > 0) {
        const totalEgreso = egresos.map((item) => {
            return Number(item.value);
        });
        sumEgreso = totalEgreso.reduce((sum, item) => sum + item);
    };
    
    const total = sumIngreso - sumEgreso;
    monto.innerText = '$ '+ total;
    total >= 0 ? monto.style.color = 'green' : monto.style.color = 'red'
    
}