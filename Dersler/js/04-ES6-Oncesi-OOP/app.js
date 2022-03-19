// const obj = {
//   name:"Varol",
//   age: 37
// }

// console.log(obj);

// function Employee(name, age, salary){
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
// }
// Employee.prototype.showInfos = function(){
//   console.log(`İsim: ${this.name}, Yaş: ${this.age}, Maaş: ${this.salary}`);
// }

// const emp1 = new Employee("Varol", 37, 3000);

// emp1.showInfos();

function Person(){

}
Person.prototype.test1 = function(){
  console.log("Test 1");
}
Person.prototype.test2 = function(){
  console.log("Test 2");
}

function Employee(name,age){
  this.name = name;
  this.age = age;
}
Employee.prototype = Object.create(Person.prototype)

const emp1 = new Employee("Varol",37);

emp1.test2()
console.log(emp1)