const largestPrime = (num) => {
    // divide the number by half
    let checkmax = parseInt(num / 2);
    // start from last prime num
    for (let i = checkmax; i > 1; i--) {
        if (isPrime(i)) {
            if (num % i === 0)
                return i;
        }
    }
}

const isPrime = (num) => {
    for (let i = 2; i <= parseInt(num / 2); ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Highest prime is:", largestPrime(600851475143));