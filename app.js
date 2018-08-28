
// Prime Number function
function isPrime(n) {
    if (n < 2) {return false;}
    let q = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= q; i++) {
        if (n % i == 0) {return false;}
    }
    return true;
}

for (let i = 0; i < 177; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

//--------------------------------------------------------------------------------------

// Second Part find second largest num in 2D array, and print out number of even numbers.
let arr = [
    [2,3,4],
    [4,32,44],
    [40,10,23]
];

let max = 0;
let secondMax = 0;
let even = 0;
for (let x = 0; x < arr.length; x++){
    for (let y = 0; y < arr[0].length; y++){
        if (max < arr[x][y]) {
            secondMax = max;
            max = arr[x][y];
        }
        else if (secondMax < arr[x][y]) {
            secondMax = arr[x][y]
        } 
        if (arr[x][y] % 2 == 0) {
            even++;
        }
    }
}
console.log('Second largest: ' + secondMax);
console.log('Number of even numbers: ' + even);

//--------------------------------------------------------------------------------------

// Do While and For-In Array
let simpleArr = [1,2,3,4,5,6,7];

let i = 0;
do  {
    console.log(simpleArr[i]);
    i++;
}
while (i < simpleArr.length)

for (let x in simpleArr) {
    console.log(x);
}
//--------------------------------------------------------------------------------------

// Guessing game
let num = Math.floor(Math.random() * 11);
let isCorrect = false
while (!isCorrect) {
    let userInput = parseInt(prompt('Enter number: '));
    if (userInput < num) {
        alert('You guessed to little! ');
    } else if (userInput > num) {
        alert('You guessed to high! ');
    } else {
        alert('Correct !!!');
        isCorrect = true;
    }
}
//--------------------------------------------------------------------------------------
