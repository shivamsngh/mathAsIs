const matrix = {}

matrix.new = function (n) {
    const a = new Array(n);
  
    for (var i = 0; i < n; i++) a[i] = new Float64Array(n);
    return a;
} 

matrix.T = function (a, n) {
    const y = matrix.new(n)
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            y[i][j] = a[j][i]
        }
    }
    return y
}

matrix.mul = function (a, b, n) {
    const y = matrix.new(n)
    const c = matrix.T(b, n)
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            var sum = 0;
            for (var k = 0; k < n; k++) sum = sum + a[i][k] * c[j][k]
            y[i][j] = sum;
        }
    }
    return y
}

matgen = function (n) {

    const y = matrix.new(n)
    const tmp = 1 / n / n
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            y[i][j] = tmp * (i - j) * (i + j)
        }
    }
    return y
}

let n = 100;
if (arguments[0]===true) {
    console.log(arguments[0]===true)
    n = parseInt(arguments[0]);
}

console.time('start')
let a = matgen(n);
let b = matgen(n);
let c = matrix.mul(a, b, n);
console.timeEnd('start');
console.log("c is:",c[(n/2)][(n / 2)]);
