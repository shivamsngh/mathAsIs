const largestPrime = (num) => {
    if (isPrime(num)) {
        return num;
    }
    else {
        // divide the num in half and check
        let checkmax = parseInt(num / 2);
        for (let i = checkmax; i > 1; i--) {
            if (isPrime(i)) {
                if (num % i === 0)
                    return i;
            }
        }

    }
}

const isPrime = (num) => {
    let checkMax = parseInt(Math.sqrt(num));
    for (let i = 2; i <= checkMax; ++i) {
        console.log(i)
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Solved in class 8th/9th :(
const divsorAlgothim = (n) => {
    let i;
    for (i = 2; i < n / 2; i++) {
        if (n % i == 0)
            n /= i;
    }
    return n;
}

console.time('start')
console.log("Highest prime is:", brudivsorAlgothimte(600851475143));
console.timeEnd('start')

