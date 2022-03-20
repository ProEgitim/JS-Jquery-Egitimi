function UI(){



}

UI.prototype.addFilmToUI=function(newFilm){

    const tbody=document.getElementById("films");
    tbody.innerHTML+=`<tr>

    <td> <img src="${newFilm.url}" class="img-fluid img-thumbnail" alt=""></td>
    <td>${newFilm.title}</td>
    <td>${newFilm.director}</td>
    <td> <a href="#" id="delete-film" class="btn btn-danger btn-sm">Filmi sil</a></td>
    </tr>`;

}

UI.prototype.displayMessage=function(message,type){

    const cardBody=document.querySelector(".card-body");
    const div=document.createElement("div");
    div.className=`alert alert-${type}`;
    div.textContent=message;
    cardBody.appendChild(div);



    setTimeout(function(){
            div.remove();
    },2000);


}

UI.prototype.clearInput=function(input1,input2,input3){
    input1.value="";
    input2.value="";
    input3.value="";
}

UI.prototype.loadAllFilms=function(films){
    const filmlist=document.getElementById("films");
    films.forEach(function(f) {
    
        filmlist.innerHTML+=`<tr>

        <td> <img src="${f.url}" class="img-fluid img-thumbnail" alt=""></td>
        <td>${f.title}</td>
        <td>${f.director}</td>
        <td> <a href="#" id="delete-film" class="btn btn-danger btn-sm">Filmi sil</a></td>
        </tr>`
    });
}

UI.prototype.deleteFilm=function(e){
    e.parentElement.parentElement.remove();
}

UI.prototype.deleteFilmAll=function(){
    const filmList= document.getElementById("films");
    while(filmList.firstElementChild!==null){
        filmList.firstElementChild.remove();
    }
}