let fruits = ["apple", "banana", "grape", "waterM", "pineapple", "cantalope"];

let leng = fruits.length;

let fruits2 = []; // to copy all uppercase in 2nd array
for (let i = 0; i < leng; i++) {
  fruits2.push(fruits[i].toUpperCase());
  //console.log(fruits[i]);
  //console.log(fruits2[i]);
}
//console.log(fruits2);

function print() {
  if (true) {
    const myName = "Salah";
    console.log(myName);
  }
  //console.log(myName);
}
print();

function outerFunct() {
  let name1 = "emon";
  function inner() {
    let name2 = " yousufy";
    return name1 + name2;
  }
  return inner();
}
console.log(outerFunct());
