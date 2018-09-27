/**
 * 
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 * 
 */

import { isPrime } from './10001st_prime.mjs';

const generatePrime = (valueLimit) => {
    console.time('gen')
    let sum = 0;
    for (let i = 2; i <= valueLimit; i++) {
        if (isPrime(i))
            sum = sum + i;
    }
    console.timeEnd('gen')
    return sum;
}

console.log(generatePrime(2000000))