class UI{
    //Filmi UI'a ekler
    static addFilmToUI(newFilm){
        filmList.innerHTML += `
        <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>`
    }
    //Inputları temizler
    static clearInputs(){
        filmTitle.value = "";
        filmDirector.value = "";
        filmUrl.value = "";
    }
    //Ekrana mesajlarımızı basar
    static displayMessage(message, type){
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        cardBody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },1000);
    }
    //Filmi arayüzden siler
    static deleteFilmFromUI(film){
        film.parentElement.parentElement.remove();
    }
    //Tüm filmleri arayüzden siler
    static cleanAllFilmsFromUI(){
        while(filmList.lastElementChild != null){
            filmList.lastElementChild.remove();
        }
    }
    //Sayfa yüklendiğinde localStorage'de bulunan filmleri UI'a ekler
    static loadAllFilmsToUI(){
        films = JSON.parse(localStorage.getItem("films"));

        films.forEach(function(film){
            UI.addFilmToUI(film);
        });
    }
}