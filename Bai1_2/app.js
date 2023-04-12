// Bài 1
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

function showPrimes() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let result = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) {
            result += i;
        }
    }
    document.getElementById("result").innerHTML = result;
};

// Bài 2

function numberOneTriangle() {
    let n = parseInt(document.getElementById("n").value);
    let triangle = '';
    for (let i = 1; i <= n/2; i++) {
        for (let j = 1; j <= i; j++) {
            triangle += '* ';
        }
        triangle += '<br>';
    }
    document.getElementById("triangle").innerHTML = triangle;
};
