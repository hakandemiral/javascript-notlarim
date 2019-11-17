//setTimeout fonksiyonu iki adet parametre almakta, ilki callback bir fonksiyon ikincisi ise gecikme süresi
//ms cinsinden girilen gecikme süresi bittiğinde callback olarka girilen fonksiyon işletilir.
//Javascript'in asenkron yapısını anlamakta güçlük çekenler için çok güzel bir deneme yanılma aracıdır.

/* setTimeout(function(){
    console.log("setTimeout 3000ms");
},3000)
setTimeout(function(){
    console.log("setTimeout 2000ms");
},2000)
setTimeout(function(){
    console.log("setTimeout 1000ms");
},1000)
setTimeout(function(){
    console.log("setTimeout 1500ms");
},1500)
setTimeout(function(){
    console.log("setTimeout 2500ms");
},2500) */

//////////////////////////////////////

//setInterval fonksiyonu iki adet parametre almakta, callback fonksiyon ve ikinci parametre olarak bir tur süresi.
//ms cinsinden girilen ikinci parametre; örn. 1000 yazıldığında ilk parametredeki callback fonksiyonu 1 saniye aralıklarla çalıştırır, önceden çalıştırdıklarının bitip bitmemesini dikkate almaz 1 saniye doldukça tekrar başlatır.
setInterval(function(){
    console.log("setInterval")
    setInterval(function(){
        console.log("test")
    }, 2000)
},1000);