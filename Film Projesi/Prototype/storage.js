function Storage(){

}

Storage.prototype.addFilmsToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films))
}

Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    console.log(filmTitle)
    let films = this.getFilmsFromStorage();

    films.forEach(function(film, index){
        if(filmTitle === film.title){
            films.splice(index,1);
        }
    });

    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.clearrAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}