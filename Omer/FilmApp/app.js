
let form =document.getElementById("film-form");



addEventListeners();

function addEventListeners(){

  
    form.addEventListener("submit",formSubmit);

}


function formSubmit(e){
    createFilm();
    e.preventDefault();
};

function createFilm(){
        let title = document.getElementById("title");
        let yonetmen = document.getElementById("director");
        let link =document.getElementById("url");
        createTr(title.value,yonetmen.value,link.value);
    }


function createTr(title,director,link){

        let tbody=document.getElementById("films");
        tbody.innerHTML+=`<tr>

        <td> <img src="${link}" class="img-fluid img-thumbnail" alt=""></td>
        <td>${title}</td>
        <td>${director}</td>
        <td> <a href="#" id="delete-film" class="btn btn-danger btn-sm">Filmi sil</a></td>
        </tr>`;







    }
