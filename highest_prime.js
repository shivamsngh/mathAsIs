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

// Quadratic Sieve


// pollard's rho



const isPrime = (num) => {
    let checkMax = parseInt(Math.sqrt(num));
    for (let i = 2; i <= checkMax; ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Highest prime is:", largestPrime(13195));