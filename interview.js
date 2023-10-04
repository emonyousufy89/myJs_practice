 
function Test(xym){
    this.xym = xym;
   // console.log(this)
}
const ab = new Test('this is a title');

for (let i=0;i<=5; ++i ){
    if(i%2 == 0){
        //console.log(i)
    }
}
const person = {fname:"John", lname:"Doe", age:25};
const person2 = ['john','Doe',25];


for (let x in person) {
  //console.log(x, person[x])
}
for(persons of person2){
   // console.log(persons)
}
let age = 0;
while(age<50){
   // console.log("you are 34")
    age++
}

function greet(name){
    return `good morning ${name}`
}
//console.log(greet('emon'));
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const person1 = new Person('Bob', 28);
  //console.log(person1.name,person1.age)
  
 // let i = 0;
//while (i < 3) {
 // console.log(i); // Outputs: 0, 1, 2
  i++;
//}

