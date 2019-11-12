//Elementleri seçiyorum
const form = document.querySelector("#film-form"); //film ekleme formunun geneli
const filmTitle = document.querySelector("#title"); //Film ismi input
const filmDirector = document.querySelector("#director"); //Yönetmen input
const filmUrl = document.querySelector("#url"); //Film afiş link input
const cardBody = document.querySelectorAll(".card-body")[0]; //Üstteki kart
const secondCardBody = document.querySelectorAll(".card-body")[1]; //Alttaki kart
const filmList = document.querySelector("#films"); //Filmlerin listelendiği tablo elementi
const clean = document.querySelector("#clear-films"); //Tüm Filmleri Temizleyin Butonu

//EventListener fonksiyonumu çalıştırıyorum.
EventListener();

//EventListener fonksiyonumu tanımlıyorum.
function EventListener(){
    document.addEventListener("DOMContentLoaded", UI.loadAllFilmsToUI) //Sayfa yüklendiğinde localStorage'de bulunan filmler(varsa) yüklenecek.
    form.addEventListener("submit", addFilm); //form submit olduğunda addFilm fonksiyonu çalışacak
    secondCardBody.addEventListener("click", deleteFilm) //alttaki kart üzerinde tıklama olduğunda deleteFilm fonksiyonu çalışacak
    clean.addEventListener("click", cleanAllFilms); //Tüm Filmleri Temizleyin butonu tıklandığında cleanAllFilms fonksiyonu çalışacak
};

//addFilm (Filmleri UI ve Storage'e ekleyecek olan fonksiyon) tanımlıyorum
function addFilm(form){
    const title = filmTitle.value; //filmTitle inputununa yazılanı title a atayacak
    const director = filmDirector.value; //filmDirector inputuna yazılanı director'a atayacak
    const url = filmUrl.value; //filmUrl inputuna yazılanı url'a atayacak.

    if(title === "" || director === "" || url === ""){ //inputlardan herhangi birisi boş ise hata dönecek.
        UI.displayMessage("Eksik bilgiler var...","danger"); //UI class içinde yazdığım display message fonksiyonunu kullanarak ekrana başarısız mesajını yazdırdım
    }
    else{ //boş input yoksa
        const newFilm = new Film(title, director, url); //film.js'de oluşturudğum constructor ile bir obje oluşturuyorum

        UI.addFilmToUI(newFilm); //oluşturduğum filmi ui.js içindeki addFilmToUI fonksiyonuna gönderdim burada film arayüze eklenecek
        Storage.addFilmToStorage(newFilm); //oluşturduğum filmi storage.js içindeki addFilmToStorage fonksiyonuna gönderdim bu fonksiyon filmi local storage'e ekleyecek
        UI.clearInputs(); //inputları temizlemek için yazdığım fonksiyonu çalıştırdım
        UI.displayMessage("Film ekleme başarılı...","success"); //UI class içinde yazdığım display message fonksiyonunu kullanarak ekrana başarılı mesajını yazdırdım
    }

    form.preventDefault(); //Form submit olduğunda sayfa yenilenmesini engelledik (eventListener e objesine form objesini atayacak, form içindeki bu özellik formun amacı dışında (submit olmadan / GET veya POST etmeden) kullanılmasını sağladı)
};

//film silmemizi sağlayan fonksiyonu tanımlıyorum
function deleteFilm(film){ //eventListener bu fonksiyona parametre olarak tıklanılan elementi gönderiyor
    if(film.target.id === "delete-film"){ //eğer tıklanan bir delete-film butonu ise
        Storage.removeFilmFromStorage(film.target.parentElement.previousElementSibling.previousElementSibling.textContent); //silinmek istenen filmin title bilgisini Storage'den silmeye yarayacak fonksiyona gönderiyorum
        UI.deleteFilmFromUI(film.target); //UI'den ilgili filmi silmek için ilgili fonksiyona tıklanılan filmi gönderiyorum
        UI.displayMessage("Silme işlemi başarılı...","info"); //UI class içinde yazdığım display message fonksiyonunu kullanarak ekrana başarılı mesajını yazdırdım
    }
}

//Tüm filmleri temizleyecek fonksiyonu tanımlıyorum
function cleanAllFilms(){
    UI.cleanAllFilmsFromUI(); //tüm filmleri UI'dan silecek fonksiyonu çalıştırdım
    Storage.cleanAllFilmsFromStorage(); //tüm filmleri Storage'den silecek fonksiyonu çalıştırdım
    UI.displayMessage("Tüm filmler temizlendi...","success"); //UI class içinde yazdığım display message fonksiyonunu kullanarak ekrana başarılı mesajını yazdırdım
}