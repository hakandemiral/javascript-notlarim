//Fonksiyonlar
/* 
program içinde yapacağımız işlemler için fonksiyon yazarak aynı kodu birden fazla kez yazmaktan kurtuluruz
çok daha düzenli kod yapılarımız olur, aynı kodu farklı yerlerde farklı verileri işlemek için kullanabiliriz.
*/

//fonksiyonun oluşturulması
/* function Fonksiyonum(){
    console.log("Merhaba");
} */

//fonksiyonun çağrılması
/* Fonksiyonum();
//veya (fonksiyonu değişkene atadıysak)
const degisken_fonksiyon = function(){
    console.log("Değişkene atanmış bir fonksiyonum ben!")
}
degisken_fonksiyon(); */

//kontrollü fonksiyon, burada isim veya yaş yoksa varsayılan bir değer atadık.
/* function merhaba(ad, yas){
    if(ad === undefined){
        ad = "*****"
    }
    if(yas === undefined){
        yas = "**"
    }
    console.log(`Merhaba, adım ${ad}, ${yas} yaşındayım.`);
}
merhaba(undefined,21); */

//bunu daha kısa yoldan yapalım
/* function merhaba(ad = "****", yas = "**"){ //burada belirlenen parametreler için varsayılan değer belirledik.
console.log(`Merhaba, İsmim ${ad}, ${yas} yaşımdayım.`);
}

merhaba("Hakan",25); */

//return (return bir fonksiyonu sonlandırır, fonksiyon içinde kullanılan returndan sonra gelen kodların hiçbirisi çalışmaz!)
//örnek return kullanımı
/* function kare(x){return Math.pow(x,2);}
function kup(x){return Math.pow(x,3);}

console.log(kup(kare(2))); */

//!!!fonksiyon global(dışarda) ise fonksiyondur, bir objenin içindeyse metod'dur.

// Immediately Invoked Function Expression (IIFE)
//fonksiyonu oluşturup anlık kullanmayı sağlar
// (function(name){
//     console.log("Merhaba: " + name);
// })("Murat");

(function(name){
    console.log("Merhaba: " + name);
})("Hakan")