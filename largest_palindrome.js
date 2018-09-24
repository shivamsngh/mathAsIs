const isPalindrome = (num) => {
    return parseInt(num.toString().split('').reverse().join('')) === num;
}

const productPalindrome = () => {
    let max = 0;
    for (let i = 999; i >= 100; i--)
        for (let j = 999; j >= 100; j--) {
            if (isPalindrome(i * j)) {
                max = max > i * j ? max : i * j;
            }
        }
    return max;
}


console.log(productPalindrome());