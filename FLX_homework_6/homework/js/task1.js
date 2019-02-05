let value1 = prompt('Insert a', '');
let value2 = prompt('Insert b', '');
let value3 = prompt('Insert c', '');

function quadraticFunction(a, b, c) {
    let discriminant = (b * b - 4 * a * c)
    console.log(`D = ${discriminant}`)
    if (discriminant < 0) {
        return console.log('no solution');
    }
    let value1 = (-b - Math.sqrt(discriminant)) / (2 * a)
    let value2 = (-b + Math.sqrt(discriminant)) / (2 * a)
    if (discriminant === 0 && value1 === 0) {
        return console.log('x = 0')
    }
    console.log(`x1 = ${value1} and x2 = ${value2}`);
}
quadraticFunction(value1, value2, value3)