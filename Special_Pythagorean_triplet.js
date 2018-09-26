/**
 * 

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2

For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

 */
const math = require('mathjs')
const isPerfectSquareRoot = num => Math.sqrt(num) % 1 === 0

const generatePythagoreanTriplets = (nth = 1000) => {
    let count = 0;
    let i = 25;
    let triplets = [];
    while (count <= nth) {
        if (isPerfectSquareRoot(i)) {
            for (let k = 1; k < Math.sqrt(i); k++) {
                for (let l = 1; l < Math.sqrt(i); l++) {
                    if ((k * k + l * l) === i) {
                        count++;
                        triplets.push({ c: Math.sqrt(i), a: k, b: l });
                    }
                }
            }
        }
        i++;
    }
    return triplets;
}

const imgnImpl = () => {
    for (let a = 1; a <= 30; a++) {
        for (let b = 1; b <= 30; b++) {
            if (a < b) {
                // c = Math.pow((a + b * i), 2);
                // console.log("mat",math.complex(a, b))
                c = math.complex(a, b).pow(2)
                // console.log(c.pow(2))
                // console.log(Math.abs(c.re))
                // console.log(c.im)
                console.log(math.abs(c.re) + math.abs(c.im) + math.sqrt(math.pow(c.re, 2) + math.pow(c.im, 2)))
                if (math.abs(c.re) + math.abs(c.im) + math.sqrt(math.pow(c.re, 2) + math.pow(c.im, 2)) == 1000) {

                    return math.abs(c.re) * math.abs(c.im) * math.sqrt(math.pow(c.re, 2) * math.pow(c.im, 2))

                }
            }
        }
    }
}

console.log(imgnImpl())
// console.time('normalStart')
// const goldenObject = generatePythagoreanTriplets().filter(x => x.a + x.b + x.c === 1000);

// console.timeEnd('start')

// console.log(goldenObject[0].a * goldenObject[0].b * goldenObject[0].c)

