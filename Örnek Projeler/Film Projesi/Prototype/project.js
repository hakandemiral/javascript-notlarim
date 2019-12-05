//Elementlerimizi Seçiyoruz

const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondsCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

//UI objesini oluşturuyoruz
const ui = new UI();

//Storage objesini oluşturuyoruz
const storage = new Storage();

//EventDinleyecilerimizi kapsayan fonksiyonumuzu çağırıyoruz
eventListeners();

function eventListeners(e){
    form.addEventListener("submit", addFilm); //film eklediğimiz form submit olduğunda addFilm çalışacak
    
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    })

    document.addEventListener("click", deleteFilm)
    document.addEventListener("click", clearAllFilms)
}

function addFilm(e){ //tetiklenen eventi callback olarak dönüyor "e"ye dönecek

    //formdaki inputların değerlerine addFilm fonksiyonu içindeki değerlerine atıyorum
    const title = titleElement.value; 
    const director = directorElement.value;
    const url = urlElement.value;

    //Form inputlarının boş olmasına karşın hata kontrolü yapıyorum
    if (title === "" || director === "" || url === ""){
        //Hata döndür
        ui.displayMessage("Tüm alanları doldurun...","danger");
    }
    else{
        //Hata olmadığı durumda yeni bir film oluşturuyoruz
        const newFilm = new Film(title,director,url);
        //Yeni filmimizi arayüze ekliyoruz
        ui.addFilmToUI(newFilm);
        //Inputlarımızı temizliyoruz (Ekleme başarılıysa)
        ui.clearInputs(titleElement,directorElement,urlElement);
        storage.addFilmsToStorage(newFilm);
        //Başarı mesajı döndür
        ui.displayMessage("Başarılı...","success");
    }

    e.preventDefault(); //formun preventDefaultunu boşalttık ve artık submit olmayacak(Sayfa yenilenmeyecek!)
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Başarıyla silindi...","info");
    }
}

function clearAllFilms(){
    if(confirm("Emin misin?")){
    ui.clearAllFilmsFromUI();
    storage.clearrAllFilmsFromStorage();
    }
}