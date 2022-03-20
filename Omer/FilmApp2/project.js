const form=document.getElementById("film-form");
const titleElement=document.getElementById("title");
const directorElement=document.getElementById("director");
const urlElement=document.getElementById("url");
const cardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");


eventListener();

function eventListener(){

    form.addEventListener("submit",addFilm);
    loadFilm();

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}


function addFilm(e){

    const title = titleElement.value;
    const director=directorElement.value;
    const url = urlElement.value;
    if(title==="" || director==="" || url===""){
        UI.displayMessage("Tüm alanları doldurun","danger");
    }else{
    
        const newFilm=new Film(title,director,url);
        UI.addFilmToUI(newFilm);
        Storage.add(newFilm);
        UI.displayMessage("Kayıt işlemi tamamlandı","success");
        UI.clearInput(titleElement,urlElement,directorElement);
    }
    e.preventDefault();
}

function loadFilm(){
    let films=Storage.getItems();
    UI.loadAllFilms(films);
}

function deleteFilm(e){
    if(e.target.id==="delete-film"){
        UI.deleteFilm(e.target);
        Storage.remove(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        UI.displayMessage("Silme işlemi tamamlandı","success");
    }
}

function clearAllFilms(){
    if(confirm("Silmek istediğinizden emin misiniz?")){
        UI.deleteFilmAll();
        Storage.removeAll();
        UI.displayMessage("Tüm filmler silindi","success");
    }
}