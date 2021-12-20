const lista1 = [
    100, 
    200, 
    300, 
    400,
];

function geometrica(array) {
    const res = array.reduce((acu, item) => {
        return acu += item
    })
    return Math.pow(res, 1/array.length);
}