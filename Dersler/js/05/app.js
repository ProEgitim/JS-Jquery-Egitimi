// var functional scope
// let ve const blog scope

// if(true){
//   var a = "deneme1";
//   let b = "denem2";
// }
// console.log(a);
// console.log(b);


// Hoisting - değişkenleri yukarı taşıyor ama değerleri değil.

// var name = "Ömer";
// console.log(name); // Ömer

// var surname;
// console.log(surname); // undefined

// var age;
// console.log(age); // undefined
// age=23;

// job="engineer"
// console.log(job); // engineer
// var job;

// var x = 5;
// function calc(){
//   /*
//     var x;
//     console.log(x);
//     x = 10;
//   */
//   console.log(x); // undefined
//   var x = 10;
//   console.log(x); // 10
// }
// calc();
// console.log(x); // 5


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.text())
.then(data => JSON.parse(data))
.then(parsedData => console.log(parsedData[0].title))
.catch(err => console.log(err))
