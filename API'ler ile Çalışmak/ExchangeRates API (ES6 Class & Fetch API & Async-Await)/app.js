//Elementlerime kolay ulaşmak için değişkenlere referanslıyorum
const amount = document.querySelector("#amount");
const baseCurrency = document.querySelector("#baseCurrency");
const secondCurrency = document.querySelector("#secondCurrency");
const outputFirst = document.querySelector("#outputFirst");
const outputSecond = document.querySelector("#outputSecond");
const result = document.querySelector("#outputResult");
const symbolSelect = document.querySelector("#symbol-selector");

//Karşı sunucuya mümkün olduğunca az istek atmak için gerekli işler...
Currency.setRates(baseCurrency.value); //İlk açılışta rate değerlerini default birime göre alıyorum

//her dakika storage'de bulunan veriyi yeniliyorum
setInterval(() => {Currency.setRates(baseCurrency.value)}, 60000);

//base veya second para birimlerinden herhangi biri değiştiğinde hesaplamayı tetikliyorum ayrıca ui üzerindeki para birimlerini değiştiriyorum
symbolSelect.addEventListener("change", () => {

    if(event.target.id === "baseCurrency"){ //eğer base değişmişse tekrardan istek atmamız gerekiyor
        Currency.setRates(baseCurrency.value).then(() => { //isteği atıyoruz fakat fetch'in resolve olmasını da beklememiz gerekiyor
            UI.changeSymbol();
            calc();
        });
    }
    else{
        UI.changeSymbol();
        calc();
    
    } 
}); 

amount.addEventListener("keyup", calc); //miktar değiştirildikçe tekrardan hesaplanacak

function calc(){ //hesaplama fonksiyonumu tanımlıyorum
    
    const rate = Currency.getRate(secondCurrency.value); //rate değişkenime getRate fonksiyonu ile güncel kuru aldım 
    const total = rate * amount.value; //güncel kuru miktar ile çarpıp totale atadım

    UI.changeResult(total); //UI classı içindeki changeResult fonksiyonuna küsüratlarını silerek gönderdim
};