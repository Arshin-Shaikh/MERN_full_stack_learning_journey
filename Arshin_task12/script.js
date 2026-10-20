let p = Number(prompt("Enter the principal (p):"));
let r = Number(prompt("Enter the rate of interest (r):"));
let n = Number(prompt("Enter the number of times interest is compounded per year (n):"));
let t = Number(prompt("Enter the time in years (t):"));

let a = (1 + (r / (100 * n))) ** (n * t);
a = p * a;

let ci = a - p;

console.log("Compound amount after " + t + " years is " + a.toFixed(2));
console.log("Compound interest after " + t + " years is " + ci.toFixed(2));