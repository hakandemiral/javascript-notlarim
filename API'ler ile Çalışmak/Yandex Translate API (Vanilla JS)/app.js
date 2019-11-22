//Elementlerimi tanımlıyorum
const word = document.querySelector("#word"); //kelime giriş inputumu seçiyorum
const lang = document.querySelector("#language"); //çevrilecek dili seçtiğim elementi seçiyorum
const form = document.querySelector("#translate-form"); //formun genelini seçiyorum
form.addEventListener("submit", translateWord); //form submit olduğunda translateWord fonksiyonunu çalıştır

function translateWord(e){ //translate word fonksiyonumu tanımlıyorum
    const translate = new Translate(word.value, lang.value); //translate.js içindeki constructor'ımı kullanarak yeni bir Translate objesi oluşturuyorum
    const ui = new UI(); //ui.js içindeki constructor'ımı kullanarak yeni bir UI objesi oluşturuyorum

    translate.translateWord(function(err, word){ //translate objemin protosunda bulunan translateWord fonksiyonunu çalıştırıyorum
        if(!err){ //eğer err null döndü ise hata yok demektir(javascriptte 0 ve null genelde false yerine geçiyor)
            ui.change(lang.value ,word); //ui objemin protosunda bulunna change metoduna (eb-de-es) şeklindeki dilm kodunu ve çevrilecek stringi gönderiyorum
        }
        else{ //eğer hata varsa
            console.log(err); //konsola gelen hatayı bas
        }
    })

    e.preventDefault(); //event listener callback olarak tetiklenen elementi döndü, yani şu an e=mc2... değil e = formum, form üzeirnde preventDefault methodu ile formun submit olduğunda sayfa yenilenmesini veya bir yere gitmesini engelliyorum.
}