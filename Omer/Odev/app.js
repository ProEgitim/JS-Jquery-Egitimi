let todo = document.getElementById("todo");
let todoList= document.querySelector("ul.list-group");
let filter=document.getElementById("filter"); 
let carbody=document.querySelectorAll(".card-body")[0];
let remove=document.querySelectorAll(".card-body")[1];
let removeAll=document.getElementById("clear-todos");
let form =document.getElementById("todo-form");


addEventListeners();



function addEventListeners(){

    removeAll.addEventListener("click",clearAllTodos);
    remove.addEventListener("click",removeTodos);
    filter.addEventListener("keyup",filterElement)
    form.addEventListener("submit",formSubmit);
    document.addEventListener("DOMContentLoaded",loadAllTodo)

}

function clearAllTodos(e){
    while(todoList.firstElementChild!=null){
        todoList.removeChild(todoList.firstElementChild);
      
    }
    localStorage.removeItem("todos");
    showAlert("Tüm Todo Silme işlemi tamamlandı","success");
};


function removeTodos(e){
 if(e.target.className==="fa fa-remove"){
    e.target.parentElement.parentElement.remove();
    removeTodoLocalStorage(e.target.parentElement.parentElement.textContent);
    showAlert("Silme işlemi tamamlandı","success");
 }
};



function formSubmit(e){
createElement();
e.preventDefault();
};


function createElement(){
    let todo = document.getElementById("todo");
    if(todo.value ===""){
        showAlert("Bir todo giriniz...","danger");
        return;
    }


    //console.log(todo);
    let createElement=document.createElement("li");
    createElement.textContent=todo.value;
    createElement.className="list-group-item d-flex justify-content-between";
    

    let newa=document.createElement("a");
    newa.className="delete-item";
    newa.href="#";

    let newIcon=document.createElement("i");
    newIcon.className="fa fa-remove";

    newa.appendChild(newIcon);
    createElement.appendChild(newa);
    todoList.appendChild(createElement);
    addTodoLocalStorage(todo.value.trim());
    todo.value="";



   showAlert("Başarılı Şekilde Eklendi","success");

}

function filterElement(){

    let filter=document.getElementById("filter");
    let todoList= document.querySelectorAll("li.list-group-item");
    let array=Array.from(todoList);

    

    array.map(function(e){
        
        if(String(filter.value).trimEnd().trimStart()==""){
            e.style.visibility="";
            return;
        }
        
        if(String(e.textContent).trimEnd().trimStart() != String(filter.value).trimEnd().trimStart()){
            e.style.visibility="hidden";
        }else{
            e.style.visibility="";
        }

    });
}

function showAlert(mesaj,type){

//     <div class="alert alert-primary" role="alert">
//     This is a primary alert—check it out!
//   </div>

   const alert= document.createElement("div");
   alert.className=`alert alert-${type} mt-3`;
   alert.textContent=mesaj;
   carbody.appendChild(alert);


   setTimeout(function(){

        alert.remove();

   },2000);

}

function getTodosLocalStorage(){

    let todos;

    if(localStorage.getItem("todos")===null){
        todos=[];

    }else{

        todos=JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

function addTodoLocalStorage(newTodo){
    if(newTodo===""){
        return;
    }
    let todos=getTodosLocalStorage();
    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));

}

function removeTodoLocalStorage(deleteTodo){
    let todos=getTodosLocalStorage();
    todos.forEach((todo,index) => {
        if(todo===deleteTodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllTodo(){
    let localTodolist=getTodosLocalStorage();
    //console.log(localTodolist);
    localTodolist.forEach(function(todo){
        const listItem = document.createElement("li");
        listItem.className="list-group-item d-flex justify-content-between"

        const link = document.createElement("a");
        link.href="";
        link.className="delete-item";
        link.innerHTML="<i class='fa fa-remove'></i>";

        listItem.appendChild(document.createTextNode(todo));
        listItem.appendChild(link);
        todoList.appendChild(listItem);


    });
}



