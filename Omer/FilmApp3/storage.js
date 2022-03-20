function Storage(title,director,url){

    this.title=title;
    this.director=director;
    this.url=url;   

}


Storage.prototype.add=function(newfilm){


    let films=this.getItems();
    films.push(newfilm);

    localStorage.setItem("film",JSON.stringify(films));

}


Storage.prototype.remove=function(title){
   let films=this.getItems();
   films.forEach(function(f,index) {
       if(f.title===title){
           films.splice(index,1);
       }
   });

   localStorage.setItem("film",JSON.stringify(films));
}

Storage.prototype.removeAll=function(){

    localStorage.removeItem("film");

}

Storage.prototype.getItems=function(){

   let films;
   if(localStorage.getItem("film")===null){
       films=[];
   }else{
       films=JSON.parse(localStorage.getItem("film"));
   }

   return films;
}