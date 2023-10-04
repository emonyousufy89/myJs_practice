// encapsulation, abstraction, inheritance, polymorphism
// without encapsulation

let baseSalary= null
let overTime= null
let rate= null

function grossSalary(baseSalary, overTime,rate){
    return baseSalary + (overTime * rate);
}
//console.log(grossSalary(4,4,3));

// with encapsulation

let netSalary = {
    basesalary: 20000,
    overtime: 30,
    Rate: 70,
    getSalary: function(){
        return this.basesalary + (this.overtime*this.Rate);
    }
};
// console.log(netSalary.getSalary());

// Factory Function  >> if 'return' in the function that is called factory function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('circle created');
        }
    }
}
let showCircle = createCircle(1);
showCircle.draw();



// Constructor Function >> if 'this & new' in the function that is called constructor function if 'new' is not used the global variable will be used for the object

function Thesquare(length){
    console.log('this', this);
this.length = length;
this.drawAgain=function(){
console.log('square created');
}
}
let showSquare = new Thesquare(1);
showSquare.drawAgain();

// insert and delete from constructor

function ThesquareAgain(length){
this.length = length;
this.drawAgainNew=function(){
console.log('square created again');
}
}
let showSquareAgain = new ThesquareAgain(1);
showSquareAgain.width = {x:2};  // using dot notation
showSquareAgain['height of tube']= {y:5, z:7};
delete showSquareAgain['height of tube'];
//showSquareAgain.drawAgainNew();

// Ennumerate

// to ennumerate all the member in a group use [for loop] 
