// function Employe(name,age,sallary){
    
//     this.name=name;
//     this.age=age;
//     this.sallary=sallary; 
// }


// Employe.prototype.ShowInfo = function(){

//     console.log(`${name} ${age} ${sallary}`);

// };





// const employe= new  Employe("ömer","33","4500");
// console.log(employe);


// function Employe(name,age,sallary){
//     this.name=name,
//     this.age=age,
//     this.sallary=sallary
// }


// function Person(name,age,sallay){
//     this.name=name,
//     this.age=age,
//     this.sallary=sallay
// }

// Person.prototype.test1=function(){
//     console.log("test1 person");
// }

// Person.prototype.test2=function(){
//     console.log("test2 person")
// }


// Employe.prototype=Object.create(Person.prototype);

// var employe=new Employe("ömer","33","4500");

// // employe.test1();

// console.log(employe);




class Person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    showInfos(){
        console.log(`${this.name} ${this.age} ${this.sallary}`);
    }

}


class Employe extends Person{
    constructor(name,age,sallary){      
        
        super(name,age);
        //super.showInfos();
        this.sallary=sallary;
    }
}



var emp=new Employe("Ömer",33,4500);
emp.showInfos();