const calcSquare = (n) => (n * (n + 1) * (2 * n + 1)) / 6

const calcCube = (n) => (n * n * Math.pow(n + 1, 2)) / 4

const calcSumSquareDiff = (n) => calcCube(n) - calcSquare(n)

console.log(calcSumSquareDiff(100))