// let val = document.all;

// val = val[17]

// console.log(val);

// let array = Array.from(val);

// array.forEach(element => {


//     let value=String(element);
//     console.log(value);
//     let isValue=value.indexOf("html");

//     console.log(element,isValue);
// });


// console.log(document.forms[0].id)


// console.log(document.forms[0].getAttribute("id"))


// console.log(document.getElementById("todo-form"))

// console.log(document.getElementsByName("form"))


// console.log(document.getElementsByClassName("list-group-item"))



// let val = document.getElementsByClassName("card-body")[1];

// let newlink = document.createElement("a");


// newlink.textContent="Google Git";
// newlink.className="btn btn-danger";
// newlink.href="https:\\www.google.com";
// newlink.target="_blank";

// val.appendChild(newlink)


// let list=document.getElementsByClassName("list-group")[0];

// let items=document.getElementsByClassName("list-group-item").length;

// let newUlList= document.createElement("li");
// newUlList.className="list-group-item d-flex justify-content-between";
// newUlList.textContent=`Todo ${items+1}`;


// let ahref= document.createElement("a");
// ahref.className="delete-item";
// ahref.href="#";


// let icon = document.createElement("i");
// icon.className="fa fa-remove";


// ahref.appendChild(icon);

// newUlList.appendChild(ahref);

// list.appendChild(newUlList);


const val = document.getElementsByClassName("card-body")[1];

const title=document.querySelector("ul.list-group");

const todo=document.querySelectorAll("li.list-group-item");

const titleRemove=title.lastElementChild;
title.removeChild(titleRemove);
todo[0].remove();

//titleRemove2.remove();

//titleRemove.remove();



let newUlList= document.createElement("li");
newUlList.className="list-group-item d-flex justify-content-between";
newUlList.textContent=`Todo 10`;


let ahref= document.createElement("a");
ahref.className="delete-item";
ahref.href="#";


let icon = document.createElement("i");
icon.className="fa fa-remove";

ahref.appendChild(icon);
newUlList.appendChild(ahref);



title.replaceChild(newUlList,todo[1]);







console.log(todo);


