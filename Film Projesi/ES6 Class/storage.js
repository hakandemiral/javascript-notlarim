//Storage işlemlerim için bir class açıyorum
class Storage{
    static addFilmToStorage(newFilm){ //yeni bir filmi storage'e eklemek için statik fonksiyon açtım

        let films; //films isimli bir değişken deklare ediyorum, bunu storage işlemleri için bir tampon bellek gibi kullanacağız

        if(localStorage.getItem("films") === null){ //eğer localstorage'de films keyli bir item yoksa
            films = []; //films değişkenine boş bir array ata
        }
        else{ //eğer storage'de hali hazırda films varsa
            films = JSON.parse(localStorage.getItem("films")); //films(tampon) değişkenine storagedeki verileri parse ederek ata
        }

        films.push(newFilm); //films arrayime yeni filmimi push ediyorum

        localStorage.setItem("films",JSON.stringify(films)); //hazırladığım arrayi stringe dönüştürüp tekrar localsotrage'e yazıyorum
    }

    static removeFilmFromStorage(filmTitle){ //bir filmi storage'den silmek için fonksiyon yazdık, içine filmin title'ını dönüyorum

        const films = JSON.parse(localStorage.getItem("films")); //films isimli bir değişken açıyorum,  içine storagedeki films'i parse ediyorum

        films.forEach(function(film,index){ //filmlerin içinde forEach ile geziyorum
            if(film.title === filmTitle){ //silinmesini istediğim film adı eşleşiyorsa
                films.splice(index,1); //splice metodu ile bulunduğum indexi siliyorum
            }
        });

        localStorage.setItem("films",JSON.stringify(films)); //işlemleri biten films'i stringe çevirip localstorage'e atıyorum
    }

    static cleanAllFilmsFromStorage(){ //çalıştığında storage üzerindeki films item'ı silecek
        localStorage.removeItem("films");
    }
}