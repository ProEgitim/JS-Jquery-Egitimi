// const merhaba = function(){
//   console.log("Merhaba")
// }

// merhaba();

// Arrow Function

// const merhaba = () => {
//   console.log("merhaba");
// }
// merhaba();


// const sqrt = el => el*el;
// console.log(sqrt(4));

// Destructing
let number1,number2,arr2;
const arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

[number1,number2,...arr2] = arr;

console.log(number1);
console.log(number2);
console.log(arr2);
