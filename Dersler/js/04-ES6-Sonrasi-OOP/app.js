class Person {
  constructor(name, age, salary){
    this.name = name;
    this.age = age;
  }
  showInfos(){
    console.log(`İsim: ${this.name}, Yaş: ${this.age}, Maaş: ${this.salary}`);
  }
}

class Employee extends Person {
  constructor(name, age, salary){
    // this.name = name;
    // this.age = age;
    super(name,age);
    super.showInfos();
    this.salary = salary;
  }
}

const emp = new Employee("Varol", 37, 3000);
console.log(emp);
emp.showInfos();