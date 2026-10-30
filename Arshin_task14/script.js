// Initialize
console.log("Initializing my JavaScript");
// let testCases = [153,654,407,371,19]

function isArmstrong(num) {
let sum = 0;
let temp = num;
let digits = String(num).length;

while (temp > 0) {
    let lastDigit = temp % 10;
    sum += lastDigit ** digits;
    temp = Math.floor(temp / 10);
}
if (num == sum) {
    console.log("Is it an Armstrong Number? Yes");
} else {
    console.log("Is it an Armstrong Number? No");
}

}

function digitadd(num) {
    let digitsum = 0;


    while (num > 0) {
        let lastDigit = num % 10;
        digitsum += lastDigit;
        num = Math.floor(num / 10);
    }

    console.log(`Sum of its digits: ${digitsum}`);


}


function isPrime(num) {
    let cnt = 0;

    if (num <= 1) {
        console.log("Is it a prime Number? No");
    } else {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                cnt++;
                break;
            }
        }

        if (cnt > 0) {
            console.log("Is it a prime Number? No");
        } else {
            console.log("Is it a prime Number? Yes");
        }
    }
}

function findFactor(num) {
    let i = 1;
    let factors = [];

    while (i <= num) {
        if (num % i === 0) {
            factors.push(i);
        }
        i++;
    }

    console.log(`Factors: ${factors}`);
}


for (let i = 0; i < 5; i++) {
    let n = prompt("Enter a number n:");
    console.log(`Number: ${n}`);
    digitadd(n);
    isArmstrong(n);
    isPrime(n);
    findFactor(n);
}
