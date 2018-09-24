

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
//  we can see that the 6th prime is 13.

// What is the 10001st prime number?


const isPrime = (num) => {
    let checkMax = parseInt(Math.sqrt(num));
    for (let i = 2; i <= checkMax; ++i) {
        if (num % i === 0)
            return false;
    }
    return true;
}


const generatePrime = (n) => {
    let count = 0, i = 1;
    while (count < n) {
        i++;
        if (isPrime(i))
            count++;
    }
    return i;
}

console.log(generatePrime(10001));

