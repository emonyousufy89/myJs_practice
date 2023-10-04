// Object_Mosh Lecture

let house = {
    builtYear: 2010,
    city: 'franklin',
    Street: 18,
    isInspected: true
};

// we can change the value of an object property using DOT notation
house.builtYear= 2012;
console.log(house.builtYear);
// we can change the value of an object property using Bracket notation
house['city']= 'framingham';
console.log(house.city);


// arrays

let shoppingList = ['milk', 'egg'];

shoppingList[2] = 'tomato'

console.log(shoppingList.concat('market basket'));

// function >> performing a task

function greet(name){
    console.log('hello ' + name)
}
greet(' Emon');


function square(number){
return number*number;
}
console.log(square(5));

function square2(number){
    return number*number;
    }
    let result = square2(3);
    console.log(result);