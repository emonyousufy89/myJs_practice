/*const readline = require ('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
read.question('Please enter your name : ', (sname) => {console.log(`Hello ${sname}`),read.close() 
})
*/
/*
function isPallindrome(strg){
    const cleanStrg = strg.toLowerCase().replace(/[^a-z,A-Z,0-9]/g,'');
    return cleanStrg === cleanStrg.split('').reverse().join('');
}
const givenStrg = 'LEVEL'
console.log(isPallindrome(givenStrg)? "Pallindrom" : "Not Pallindrom")
*/
/*
function listFebunacchi(n){
const series = [0,1]
for (let i=2; i<=n; i++){
series[i] = series[i-1] + series[i-2]
}
return series.slice(1,n);
}
const n = 10;
const theSereies = listFebunacchi(n)
console.log(`the first ${n} number if febunacchi sereis is : `, theSereies.join(','))
*/
/*
function findMissingnum(arr){
    const n = arr.length + 1
    const expectedValue = (n*(n+1))/2
    const actualValue = arr.reduce((total, num) => total+num, 0)
    const missingValue = expectedValue-actualValue;
    return missingValue;
}
const givenArray = [1,2,3,4,6,7,8,9]
console.log('The missing number is : ',findMissingnum(givenArray))
*/
/*
function reversethestring(str){
    const reveredStg = str.split(' ').reverse().join(' ')
    return reveredStg
}
const theWord = 'hello world'
console.log(reversethestring(theWord))
*/
/*
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
console.log(fizbuzz(101))
*/
/*
setTimeout(() => {
    console.log('hello world')
}, 3000);
*/
/*
const num1 = 1, num2 = 10;
for (let i=num1; i<=num2; i++){
    setTimeout(()=> console.log(i),i*2000)
}
*/
/*
function mergearray(arry1, arry2=arry1){
    return [...arry1,...arry2]
}
const a = [1,2,3,4,9,0]
const b = [5,6,7,8]
console.log(mergearray(a,b))
*/
/*
function shuffleArr(start=1, end=0){
const givnarr =[]
for(let i=start; i<=end; i++)
{
    givnarr.push(i)
}
return givnarr;
}
const given = shuffleArr(1,10)
given.sort(()=> 0.5 - Math.random())
console.log(given)
*/