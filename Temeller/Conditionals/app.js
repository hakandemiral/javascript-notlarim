/* Karşılaştırma Operatörleri (booleand (true, false) değer dönerler)
==  Eşit ise
=== Özdeş ise (Veri tipi dahil eşit ise)
!=  Eşit değil ise
!== Eşit değil ise (Veri tipi dahil örn "1" !== 1 true döner çünkü veri tipleri dahi eşit değil)
<   Küçüktür
>   Büyüktür
<=  Küçük eşittir
>=  Büyük eşittir
*/

/* 
console.log("1" != 1); //false dönme sebebi veri tipleri kontrol edilmiyor bu sebele eşitler
console.log("1" !== 1); //true dönme sebebi veri tipleri de kontrol ediliyor ve veri tipler eşit değil
 */

/* Mantıksal Operatörler (Bağlaç)

&& ve => bağladığı verilerin değerlerinin her ikisi de true ise true döner.
|| veya => bağladığı verilerin değerlerinin birisi true ise true döner. */

/* 
console.log((1 === 1) && (2 == "2")); //true
console.log((1 === 1) && (2 == "1")); //false

console.log((1 === 1) || (2 == "1")); //true
console.log((1 === 1) || (2 == "1")); //true
console.log(("1" === 1) || (2 == "1")); //false
 */

 //if, else if, else

/* const error_control = true; */
 /*if(error_control){
     console.log("Hata oluştu!");
 }
 else{
     console.log("Hata yok.");
 } */
 
 //Ternary operator
 //basit ve kısa if else blokları yazmamıza yarar 
 //koşul(bool) ? true ise verisi : false ise verisi

const error_control = true;

 console.log(error_control ? "Hata Oluştu!" : "Hata Yok.")

/*  if(error_control) console.log("Hata!")
 else console.log("Sorun Yok") */