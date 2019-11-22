//Elementlerimi tanımlıyorum
const word = document.querySelector("#word"); //kelime giriş inputumu seçiyorum
const lang = document.querySelector("#language"); //çevrilecek dili seçtiğim elementi seçiyorum
const form = document.querySelector("#translate-form"); //formun genelini seçiyorum
word.addEventListener("keyup", translateWord); //inputtaki harflere bastıkça fonksiyon çalışacak, bu deneme projesi olduğundan sakıncası yok, yandexin free api sınırını aşmam pek mümkün değil
lang.addEventListener("change", translateWord); //dil değiştikçe fonksiyon çalışacak, eventlistener üzerinde change dinlemek bazı tarayıcılarda sorun çıkartabilir, son kullanıcıya direkt çıkacağınızda bunun yerine onchanges özelliğine fonksiyon atamak daha iyi olacaktır.

function translateWord(){ //translate word fonksiyonumu tanımlıyorum
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
}