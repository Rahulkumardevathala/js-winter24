//1
let addition = (a, b) => a + b;
let add = addition(6, 2);
console.log(add);
//2
let divide = (a, b) => a / b;
let div = divide(6, 2);
console.log(div);
//3
function convert(Fahrenheit) {
  let celsius = 0;
  console.log((celsius = ((Fahrenheit - 32) * 5) / 9));
}
const farenheit = convert(33);
//4
function divisibleBy55(value) {
  if (value % 55 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
let value = divisibleBy55(550);
//5
function checklength(len) {
  return len.length;
}
let len = checklength("rahul");
console.log(len);
//6
function concat(aug1, aug2) {
  console.log(aug1 + aug2);
}
concat("Rahul", "Kumar");
