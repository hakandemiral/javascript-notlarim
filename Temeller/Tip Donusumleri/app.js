let value;

//Stringe dönüştürme işlemleri

//1.Yol

/* value = String(1); //int/number değeri => stringe
value = String(1.21); //float/number değeri => stringe
value = String(true); //boolean değeri => stringe
value = String(function(){return("Selam")}); //fonksiyonu => stringe */

//2.Yol

/* value = (1).toString(); //int/number değeri => stringe
value = (1.21).toString(); //float/number değeri => stringe
value = (true).toString(); //boolean değeri => stringe
value = (function(){return("Selam")}).toString(); //fonksiyonu => stringe */

//Sayıya dönüştürme işlemleri
/* 
- parseInt(), parseFloat()
- Number("string_veri") veya Number(degisken)
!!! Verilen stringin içindeki veri sadece float veya int olmalıdır yoksa NaN verir!!!
- NaN => Not a Number anlamına gelir, verinin içinde numbere dönüşmesi mantıksız bir şey varsa bu hata döner.
*/

/* value = Number("12");
value = Number("1.2");
value = Number("hakan"); // NaN Verecektir!
value = Number("function(){return(\"Selam\")}"); //NaN Verecektir! */


//Otomatik dönüşümler

/* 
- soldan sağa işlemektedir
- string + number durumunda => number stringe çevrilir => yan yana yazılır.
*/

/* value = "123" + 5;
value = Number("123") + 5;

console.log(value);
console.log(typeof value); */

value = "123" + 5; //burada value string "1235" olur
value = Number(value) + 5; //"1235" sayıya çevrilip 5 ile toplanır sonuç 1240 olur
console.log(value); //1240 ekrana yazdırılır