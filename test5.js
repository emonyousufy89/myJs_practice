/* Print the name as prompt */
/*
const readline = require('readline');
const printMyname = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})
printMyname.question('Please enter your name: ', (name)=>{
    console.log(`Good Afternoon Mr/Mrs: ${name}`)
    printMyname.close()
})
*/

/* Pallindrome */
/*
function isPallindrome(theStr){
    cleanTheStr = theStr.toLowerCase().replace(/[^a-z,A-Z,0-9]/ig, "");
    return cleanTheStr === cleanTheStr.split('').reverse().join('');
}
let theRealString = 'LEveL*(&';
let showTHeResult = isPallindrome(theRealString)? "Is pallindrome" : "Is not pallindrome"
console.log(showTHeResult);
/* Febunacchi sereies */
/*
function febunacci(arrs){
    let series = [1,2];
    for (let i=2; i<arrs; i++){
        series[i] = series[i-1] + series[i-2];
    }
    return series;
}
const arrs = 10;
const febunacciSereis = febunacci(arrs);
console.log(`the first ${arrs} number of febunacchi numbers are: ${febunacciSereis}`);
*/
/* Alphabet checker */
/*
function findTheEnglishAlphabet(stg){
    let realAlphabets = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])
    let theExpectedWord = stg.toLowerCase(realAlphabets).replace(/[^a-z,A_Z]/ig,'');

    for (let alphabet of realAlphabets){
        if(!theExpectedWord.includes(alphabet)){
            return false
        }
    }
    return true;
}
let givenString = "a quick brown Fox jumped OVER the la Dogs 333"
console.log(findTheEnglishAlphabet(givenString));

*/
/* Shuffle the array */
/*
function shuffleTheArray(start = 1, end = 0){

    let firstArry = [];
    for (let i=start; i<=end; i++){
        firstArry.push(i)
    }
    return firstArry;
}
const givenArr = shuffleTheArray(1,10)
givenArr.sort(()=> 0.5 - Math.random())
console.log(givenArr);
*/
/* Missing number from an array */
/*
function findTheMissingNum(a){
    let theNumber = a.length + 1;
    let expectedNum = (theNumber*(theNumber+1))/2;
    let actualNum = a.reduce((total, num) => total + num, 0);
    return expectedNum - actualNum;
}
let givenArray = [1,2,3,5,6,7,8,9];
console.log(findTheMissingNum(givenArray));
*/

/* find multiple missing number from an array ******************/
/*
function missungNumbers(arrr){
    let max = Math.max(...arrr);
    let min = Math.min(...arrr);
    expectedNumbers = new Set();

    for (let i = min; i<=max; i++){
        expectedNumbers.add(i)
    }
    for (let numbers of arrr){
        expectedNumbers.delete(numbers)
    }
    return Array.from(expectedNumbers);
}
const givneNumbers = [1,2,3,5,8,9]

let missingNum = missungNumbers(givneNumbers)
console.log(missingNum);
*/
/* find the min and max number from an array */

/*
function findMinMax(arrs){
    let min = Math.min(...arrs);
    let max = Math.max(...arrs);
    console.log(min);
    console.log(max)
}
let givenAr = [2,4,5,6,7,5,6,7,9]
findMinMax(givenAr)
*/
/* find the sum of n numbers */
/*
let theNumber = 10;
function findTheSum(n){
    const theSum = (n*(n+1))/2;
    return theSum
}
console.log(findTheSum(theNumber));


let n = 100;
let total = 0
let i = 0

while(i<=n){
    total = total + i;
    i++;
}
console.log(total)
*/

/* GCM */
/*
function getGCM(a,b){
    if(b === 0){
        return a;
    }
    else{ 
    return getGCM(b,a%b);
}
}
const gcd = getGCM(48,18);
console.log(gcd)
*/
/* Find the factorial */
/*
function findfactorial(n){
    if (n === 0 || n === 1){
        return 1
    }
    return n*findfactorial(n-1)      
}
console.log(findfactorial(3));
*/

/* Find a name from an object */
/*
let person = [
    {name : "John", Age: 32},
        { name : "Matt", Age : 45,},
       { name : "Salah", Age: 34,},
       { name : "Ayah", Age: 4 }
]
const findSalah = person.find((obj) => obj.name === "alah")
console.log(findSalah? true : false);
*/
/* Find the argest number */
/* reveres string and words */
/*
function revesring(str){
   // let cleanstr = str.toLowerCase().replace(/[^a-zA-Z]/ig, '');
    return str.split('').reverse().join('')
}
mystg = 'Hello World'
console.log(revesring(mystg));
*/

/* fixbuzz */
/*
function fizzbuzz(n){
    for (let i = 1; i <= n ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }
        else if (i % 5 === 0){
            console.log('Fizz');
        }
        else if (i % 3 === 0){
            console.log('Buzz');
        }
        else{
            console.log('no match')
        }
    }
}
let n = 33
fizzbuzz(n);
*/
/*
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  
  const n = 100; // Change this to the desired range (e.g., 1 to 100)
  fizzBuzz(n);
  
*/

/* Print a pyramid */
/*
function printPyramid(height){
    for(let i = 1; i <= height; i++){
        let row = " ";
        for (let j = 1; j <= height - 1; j++){
            row += ""
        }
        for (let k = 1; k <= 2*i-1; k++ ){
            row += '*'
        }
        console.log(row)
    }
}
printPyramid(5)
*/

/*
function printPyramid2(row){
    for(let i = 1; i <= row; i++){
        let space = ' '.repeat(row - i);
        let starts = '*'.repeat(2*i-1);
        console.log(space + starts + space)
    }
}
printPyramid2(5)
*/
/* anagrams */
/* LCM */
/*
let mywords = 'ASDFGHJ    ll'
let a = 10;
let b ="5"
let sum = a + +b
console.log(mywords.toLowerCase());
console.log(mywords.toUpperCase());
console.log(mywords.trim());
console.log(sum)
let fruits = {};
let fruit = ['apple', 'banana', 'mangoes']
fruit[0] = 'pineapple'
console.log(Array.isArray(fruits))
console.log(fruit);
for (let index of fruit){
    console.log(index)
}
for (let i=0; i<fruit.length; i++){
    console.log(fruit[i])
}
let myarray = ['ayah', 'emon']
myarray.push('sajh')  // will push an elem in last
console.log(myarray)
myarray.unshift('salah') // will add element in first
console.log(myarray)
myarray.pop() // Will delete element from last
console.log(myarray)
myarray.shift() // will del elem from first
console.log(myarray)
myarray[2] = 'potato'
console.log(myarray)
let youArrray = ['saju', 'saiful']
let myarray1 = myarray.concat(youArrray);
console.log(myarray1);

function joinArr(a,b){
    return [...a, ...b]; // spread operator to copy array
}
console.log(joinArr(myarray,youArrray));

let youArrray3 = myarray.slice() // is to copy array
console.log('slice: ', youArrray3)

function printdisplay1(){
if (true){
    var m = 10;
}
console.log(m)
}
printdisplay1()
*/

function print() {
  if (true) {
    var age = 10;
  }
  console.log(age);
}
print();

console.log(Math.floor(Math.random() * 100000));
console.log(Date.now());

function printFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * printFactorial(n - 1);
  }
}
console.log(printFactorial(5));

function printSumofNthNumber(n) {
  const theTotal = (n * (n + 1)) / 2;
  console.log(theTotal);
}
printSumofNthNumber(100);

function findDuplicate(arr) {
  return [...new Set(arr)];
}
const theArr = [1, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(findDuplicate(theArr));

function shuffleArray(start = 1, end = 0) {
  const garrya = [];
  for (let i = start; i <= end; i++) {
    garrya.push(i);
  }
  return garrya;
}
const mainArr = shuffleArray(1, 10);

mainArr.sort(() => 0.5 - Math.random());
console.log(mainArr);
