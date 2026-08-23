import multiply from "./module.js";

//string literal
const studentName = "Levis";
//const notify = "My name is " + studentName;
//const notify = "My name is " + "Levis";
const notify = `My name is ${studentName}`;

console.log(notify);

//function
//1.Normal Function

function sayHello(name){
    console.log(`Hello my friend! ${name}`);
    return `Hello my friend! ${name}`;
}

console.log(sayHello("Thanh"));

//2.Arrow Function

// const sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(3,4));


function sum(...args) {
  let total = 0
	for (let i = 0; i < args.length; i++) {
		total += args[i]
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)) // 15

console.log(multiply(3, 9));