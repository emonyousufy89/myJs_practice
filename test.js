/*const readline = require('readline');

const printName = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

printName.question('Please enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  printName.close();
});
*/
/*
function isPallindrome(inputStr){
    const cleanStr = inputStr.toLowerCase().replace(/[^a-z,0-9]/g,"");
    return cleanStr === cleanStr.split('').reverse().join('')
}
const inputWord = "eyes"

console.log(isPallindrome(inputWord)? "Pallindrome" : "Not Pallindrome")
*/
/*
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  const inputString = "levels";
  const result = isPalindrome(inputString);
  console.log(result); // This will print 'true' for the given input
  */
/* >> Find missing number:
  function findmissingnumber(arr){
    const n = arr.length+1
    const expectedNumber = (n*(n+1)/2)
    const actualnumber = arr.reduce((total, num)=> total+num,0) 
    return expectedNumber - actualnumber
  }
  const givenNumbers = [1,2,3,4,6]
  const missingNumber = findmissingnumber(givenNumbers)
  console.log(missingNumber)

  */
/*
  function febunacci(n){
    const series = [0,1]
    for (let i=2; i<n; i++){
        series[i] = series[i-1] + series[i-2]
    }
    return series;
  }
  const n = 10;
  const febunaccisereis = febunacci(n);
  console.log(`febunacci sereis (first${n} numbers : ${febunaccisereis.join(' ,')})`)
  */
// Print the name
/*
const readline = require('readline')
const printMyname = readline.createInterface({
input: process.stdin,
output: process.stdout
})

printMyname.question('Please enter your name: ', (name)=>{
  console.log(`Good morning Mr/Mrs. : ${name}`)
  printMyname.close()
})
*/
//////// PALLINDROME
/*
function isPallindromOrNot(str){
  const clearstr = str.replace(/[^a-z,A-Z,0-9]/g,'');
  return clearstr === clearstr.split('').reverse().join('');
}
const givenWords = 'levels'
console.log(isPallindromOrNot(givenWords)? "Its Pallindrome" : "Its not palindrome!");
*/
// print febunacchi sereis
/*
function printTheFebunacci(arr){
  const series =[0,1];
  for (let i=2; i<n; i++){
    series[i] = series[i-1] + series[i-2]
  }
  return series
}
const n = 10;
const febunacchisereies = printTheFebunacci(n);
console.log(`the first ${n} number of febunacchi sereies is : ${febunacchisereies.join(' ,')}`);
*/
// fizbuzz
/*
function fizbuzzss(n){
  for (let i=n; i<=n; i++){
    if (i%3===0 && i%5===0){
      return "fizzbuzz"
    }
    else if (i%3===0){
      return "fizz"
    }
    else if (i%5===0){
      return "buzz"
    }
    else{
      return "no fizz, no buzz"
    }
  }
}
console.log(fizbuzzss(10))
*/
/*
function reverseWord(str){
  const words = str.split(' ').reverse().join(' ')
  return words;
}
const givenWords = 'Hello World'
console.log(reverseWord(givenWords))
*/
/*
async function asyncAwaitFunc() {
  try {
    console.log("Executes normally when invoked");
    await promiseReturningFunc();
    console.log("Continues the execution after promise resolution");
  } catch (err) {
    console.log("Error occurred: " + err);
  }
}
asyncAwaitFunc()
  .then(() => {
    console.log("Async function completed successfully");
  })
  .catch((err) => {
    console.error("Async function failed with an error: " + err);
  });
*/
// merge 2 arrays:
/*
function mergeArray(arr1, arr2 = arr1){
  return [...arr1, ...arr2];
}
array1 = [1,2,3,3,4]
array2 = [5,6,7,8,9]

console.log(mergeArray(array1,array2))
*/
/*
function shuffleThearrya(start=1, end=0){
  const givenArr = []
  for (let i=start; i<=end; i++){
    givenArr.push(i);
  }
  return givenArr;
}
const givenArr = shuffleThearrya(1, 10)
givenArr.sort(()=> 0.5 - Math.random());
console.log(givenArr)
*/
/*
function rangeGenFunc(start = 1, end = 0) {
  const arr = [];
  for (let i = start; i <= end; i++) {
      arr.push(i);
  }
  return arr;
}

const arr = rangeGenFunc(1, 10);
arr.sort(() => 0.5 - Math.random());

// Export the shuffled array for use in the terminal
console.log(arr);
*/
/*
const arr = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "John", age: 40 },
  { name: "Sarah", age: 35 },
];

const jonhObject = arr.find((obj) => obj.name === "John");
const doesJohnExist = jonhObject ? true : false;

console.log(doesJohnExist);
*/
// find the factorial
/*
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(6)); // Output: 120
*/
/*
function areAnagrams(str1, str2) {
  //const cleanStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
  //const cleanStr2 = str2.replace(/[^\w]/g, '').toLowerCase();
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(areAnagrams('listen', 'silent')); // Output: true
*/
/*
function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;

  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 1; i * i <= number; i += 4) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}

// Example usage:
console.log(isPrime(17)); // Output: true (17 is a prime number)
console.log(isPrime(12)); // Output: false (12 is not a prime number)
*/
// find GCD
// Function to find the Greatest Common Divisor (GCD) of two numbers
/*
function findGCD(a, b) {
  if (b === 0) {
    return a;
  } else {
    return findGCD(b, a % b);
  }
}
const gcd = findGCD(15, 18);
console.log(`GCD of ${15} and ${18} is ${gcd}`);

*/
/*
// Function to find the Lowest Common Multiple (LCM) of two numbers
function findLCM(a, b) {
  // Calculate LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
  const gcd = findGCD(a, b);
  return (a * b) / gcd;
}

// Example usage:
const num1 = 12;
const num2 = 18;

const lcm = findLCM(num1, num2);

console.log(`LCM of ${num1} and ${num2} is ${lcm}`);
*/
/*
function exampleVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10 (var is function-scoped)
}
exampleVar()
*/
/*
function exampleLet() {
  if (true) {
    let y = 20;
  }
   console.log(y); // Error: y is not defined (let is block-scoped)
}
exampleLet()
*/
/*
function exampleConst() {
  const z = 30;
 // z = 40; // Error: Assignment to constant variable (const is for constants)
  console.log(z)
}
exampleConst()
*/


function printPyramid(height){
  for(let i=1; i<=height; i++){
    row = ' '
    for (let j=1; j<=height-i;j++){
      row += ' '
    }
    for (let k=1; k<=2*i-1;k++){
      row += '*'
    }
    console.log(row)
  }
  
}
printPyramid(10)