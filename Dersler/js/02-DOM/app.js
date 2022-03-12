let val;

// val = document;
// val = document.all;
// val = document.all.length;
// val = document.all[6];
// val = document.all[document.all.length - 1];

// val = document.all;

// for (let i = 0; i < val.length; i++) {
//   console.log(val[i]);
// }

// val = Array.from(val);

// val = val.forEach(element => {
//   console.log(element)
// });

// val = document.getElementsByTagName("div");
// val = document.querySelector("#todo-form");
// val = document.querySelector(".list-group-item");
// val = document.querySelectorAll(".list-group-item");
// val = document.querySelector("div");
// val = document.querySelectorAll("div");

// val = document.querySelector("#clear-todos");

// console.log(val.className);
// console.log(val.classList);
// console.log(val.textContent);
// val.innerHTML = "Hepsini Sil";
// console.log(val.innerHTML);
// console.log(val.href);
// console.log(val.style);

// val.style.color = "#f3f3f3";
// val.style.marginLeft = "50px";
// val.href = "https://www.google.com/";
// val.target = "_blank";

// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//   el.style.color = "red";
//   el.style.backgroundColor = "#eee";
// })

// let element = document.querySelector("li:last-child");
// let element = document.querySelector("li:nth-child(2)");
// let element = document.querySelectorAll("li:nth-child(even)");
// let a = Array.from(element);
// a.map(function (i){
//   i.style.color = "#fff"
//   i.style.background = "#0f0f0f";
// });


// let element = document.querySelector(".list-group");
// // val = element.childNodes;

// // val = element.children[2].textContent = "Değişti";

// // val = element.lastElementChild;

// // val = element.childElementCount;
// // val = element.parentElement;
// val = element.previousElementSibling;
// val = element.nextElementSibling;

// console.log(val);

// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com/";
// newLink.target = "_blank";
// newLink.textContent = "Deneme";

// cardbody.appendChild(newLink);

// const todoList = document.querySelector("ul.list-group");
// const todos = document.querySelectorAll("li.list-group-item");

// todos[0].remove();
// todoList.removeChild(todoList.lastElementChild);

// const cardbody = document.getElementsByClassName("card-body")[1];
// const oldElement = document.querySelector("#tasks-title");

// const newElement = document.createElement("h3");

// newElement.className="card-title";
// newElement.id="tasks-title";
// newElement.textContent = "Yeni Todolar";

// cardbody.replaceChild(newElement,oldElement);

// const todoInput = document.getElementById("todo");
// let element;
// element = todoInput;
// element = todoInput.classList;
// todoInput.classList.add("yeniClass");
// todoInput.classList.remove("yeniClass");
// element = todoInput.getAttribute("placeholder");
// todoInput.setAttribute("placeholder","Selam");
// element = todoInput.getAttribute("placeholder");
// element = todoInput.hasAttribute("required");


// Event yakalama
// const filterInput = document.getElementById("filter");

// filterInput.addEventListener("focus",function(e){
//   // console.log(e);
//   // console.log(e.type);
//   // console.log(e.target);
//   console.log(e.target.placeholder);
// })

// const todoForm = document.getElementById("todo-form");

// todoForm.addEventListener("submit",submitForm);

// function submitForm(e){
//   console.log("Submit Çalıştı");
  
//   e.preventDefault();
// }

// const todoInput = document.getElementById("todo");
// const header = document.querySelector(".card-header");

// todoInput.addEventListener("keyup",changeText);

// function changeText(e){
//   header.textContent = e.target.value;
// }

// console.log(todoInput);