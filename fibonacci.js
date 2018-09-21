const MAX_NUM = Math.pow(10, 6)*4;

const generateFibonacciEvenSum = (...arg) => {
    if (arg.length < 2) throw new Error('Needs atleast 2 values');
    let series = [...arg];
    let sum=0;
    series.forEach(x => x % 2 === 0 ? sum += x : x);

    while (series[series.length - 1] + series[series.length - 2] < MAX_NUM) {
        series.push(series[series.length - 1] + series[series.length - 2]);
        sum = series[series.length - 1] % 2 === 0 ? sum + series[series.length - 1] : sum;
    }
    return sum;
}

console.log("Sum is:", generateFibonacciEvenSum(1,2))