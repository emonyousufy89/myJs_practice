//const readline = require('readline')
/*
const printname = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
printname.question("Please enter your name  :", (yourname)=> {
console.log(`Hello, ${yourname}`),
printname.close()
})
*/
/*
function isPalindrome(inputWord) {
    const cleaninputword = inputWord.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaninputword === cleaninputword.split('').reverse().join('');
  }
  
  const inputString = "A man, a plan,  a caN?al, Panama";
  console.log(isPalindrome(inputString) ? "Palindrome" : "Not a palindrome");
  */
/* >>>>>>> print your nmae <<<<<
const readline = require('readline')
const printname = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
})
printname.question("Please enter your name :", (yourname)=>{
    console.log(`hello, ${yourname}`)
    printname.close()
})
*/
/* >>>> finding a pallindrome <<<<<<<<
function isPallindrome(inpitstrg){
    const inputword = inpitstrg.toLowerCase().replace(/[^a-z,0-9]/g,'')
    return inputword === inputword.split('').reverse().join('')
}
const givenWord = 'level*&'
console.log(isPallindrome(givenWord)?"Pallindrome": "not pallindrome")
*/
/* >>> Reverse the string <<<<<
const  reverseThestring = str => str.split('').reverse().join('')
const givenString = 'hello world';
console.log(reverseThestring(givenString));
*/
/* >>> fizbuzz
function fizbuzz(n){
    for(let i=n;i<=n; i++){
        if(i%3===0 && i%5===0){
            return "fizbuzz"
        }
        else if(i%3===0){
            return "fizz"
        }
        else if (i%5===0){
            return "buzz"
        }
        else{
            return i;
        }
    }
}
console.log(fizbuzz(100))
*/
/*
function findMissingNumber(arr) {
    const n = arr.length + 1; // Add 1 because one number is missing
    const expectedSum = (n * (n + 1)) / 2; // Sum of the first n natural numbers
    
    const actualSum = arr.reduce((total, num) => total + num, 0);
    
    const missingNumber = expectedSum - actualSum;
    return missingNumber;
  }
  
  // Test the function with an example array
  const numbers = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,15,16,17];
  const missing = findMissingNumber(numbers);
  console.log(`The missing number is: ${missing}`);
  */
 1