function UI(){ //UI constructorumu tanımlıyorum
    this.outputImage = document.querySelector("#outputImage"); //ülke bayrağı
    this.outputLang = document.querySelector("#outputLanguage"); //çevrilen dilin ismi
    this.outputWord = document.querySelector("#outputWord"); //çevrilen metin
}
UI.prototype.change = function(img, word){ //UI'in prototipine change metodu ekliyorum, app.js'de gönderdiğim iki veriyi burada karşılıyorum
    this.outputLang.textContent = document.querySelector(".selected").textContent; //zihnisinir bir yöntemle dropdown-listimde seçili olan seçeneğin adını buraya alıyorum, böylece yeni dil seçenekleri eklemek çok kolay olacak
    this.outputImage.src = `images/${img}.png`; //images klasörümde her dilin bayrak şeklinde bir ikonu var, ikon isimleri ve dil kodları uyuşmakta, bu sebeple direkt olarak yandexAPI'e gönderdiğim dil kodunu burada da karşılayıp template literal yardımıyla kullanıyorum
    this.outputWord.textContent = word; //çevirilen metni app.js üzerinde buraya yollamıştım, karşılayıp çevrilen metin kısmına basıyorum
}