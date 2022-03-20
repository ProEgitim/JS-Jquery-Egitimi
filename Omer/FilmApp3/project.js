const form=document.getElementById("film-form");
const titleElement=document.getElementById("title");
const directorElement=document.getElementById("director");
const urlElement=document.getElementById("url");
const cardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");

const ui=new UI();
const storage=new Storage();

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
        ui.displayMessage("Tüm alanları doldurun","danger");
    }else{
    
        const newFilm=new Film(title,director,url);
        ui.addFilmToUI(newFilm);
        storage.add(newFilm);
        ui.displayMessage("Kayıt işlemi tamamlandı","success");
        ui.clearInput(titleElement,urlElement,directorElement);
    }
    e.preventDefault();
}

function loadFilm(){
    let films=storage.getItems();
    ui.loadAllFilms(films);
}

function deleteFilm(e){
    if(e.target.id==="delete-film"){
        ui.deleteFilm(e.target);
        storage.remove(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Silme işlemi tamamlandı","success");
    }
}

function clearAllFilms(){
    if(confirm("Silmek istediğinizden emin misiniz?")){
        ui.deleteFilmAll();
        storage.removeAll();
        ui.displayMessage("Tüm filmler silindi","success");
    }
}