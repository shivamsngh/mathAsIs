const MAX_NUM = 10;

const calculateSum = (...arg) => {
    const mulArr = [];
    arg.forEach(num => {
        mulArr.push(generateMultiples(num));
    });
    // return createDistinctArrays(mergeArrays(mulArr)).reduce((x, y) => x + y, 0);
    return [...new Set([].concat(...mulArr))].reduce((x, y) => x + y, 0);
}

const generateMultiples = (n) => {
    const mulArr = [];
    for (let i = n; i < MAX_NUM; i++)
        i % n === 0 ? mulArr.push(i) : mulArr;
    return mulArr;
}

const mergeArrays = (arr) => {
    return [].concat(...arr);
}

const createDistinctArrays = (arr) => {
    return [...new Set(arr)];
}

console.log("Sum is :", calculateSum(3, 5, 7))
