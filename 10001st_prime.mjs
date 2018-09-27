

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
//  we can see that the 6th prime is 13.

// What is the 10001st prime number?

export const isPrime = (num) => {
    let checkMax = parseInt(Math.sqrt(num));
    for (let i = 2; i <= checkMax; ++i) {
        if (num % i === 0)
            return false;
    }
    return true;
}


export const generateNthPrime = primeCountLimit => {
    let count = 0, i = 1, primesArr = [];
    while (count < primeCountLimit) {
        i++;
        if (isPrime(i))
            count++;
        primesArr.push(i);
    }
    return primesArr;
}

const arrOfPrimes = generateNthPrime(10001);
console.log(arrOfPrimes[arrOfPrimes.length - 1]);




