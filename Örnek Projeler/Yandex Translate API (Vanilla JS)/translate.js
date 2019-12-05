function Translate(word, lang){ //Translate constructorumu tanımlıyorum
    this.apiKey = "trnsl.1.1.20191122T144939Z.71e513f72bc0361a.d790aee85b83a0369e39556a6aec3348aa086e97"; //Yandexten aldım APIkey
    this.word = word; //çevrilecek metin
    this.lang = lang; //çevrilecek dil

    this.xhr = new XMLHttpRequest(); //XHR objemi oluşturuyorum
}
Translate.prototype.translateWord = function(callback){ //protoma translateWord metodumu tanımlıyorum, sonucu callback dönecek

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.lang}`; //endpointimi template literal ile ayarlıyorum

    this.xhr.open("GET", endpoint); //bağlantımı açıyorum

    this.xhr.onload = () => { //başarılı veya başarısız XHR objem onload olduğunda çalışacak fonksiyonu tanımlıyorum

        if (this.xhr.status === 200){ //eğer karşı taraftan gelen yanıt 200 ise
            const translatedWord = JSON.parse(this.xhr.responseText).text[0]; //dönen JSON veriyi parse edip kılçıklarından ayıklıyorum.
            callback(null,translatedWord) //ilk parametrem hata ikinci parametrem response belirtecek, bu senaryoda hata olamdığı için hata için ayırdığım yere null gönderiyorum
        }
        else{
            callback("Hata Oluştu",null) //hata mesajını döni response kısmını null gönder
        }
    }

    this.xhr.send(); //fire in the hole
}