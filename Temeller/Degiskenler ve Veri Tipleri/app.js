// değişken atama

/* var a = 1,
    b = 2,
    c = 3;
console.log(a);
console.log(b);
console.log(c); */

//// primitive(ilkel) veri tipleri

//number
/* var a = 1,
    b = 1.4;
console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b); */

//string
/* var a = "hakan";
console.log(a);
console.log(typeof a); */

//boolean
/* var a = true;
console.log(a);
console.log(typeof a); */

//null
/* var a = null;
console.log(a);
console.log(typeof a); //object vermesi javascriptin bir bugu */

//undefined
/* var a;
console.log(a);
console.log(typeof a); */

//----------------------------------------------//

//// reference veri tipleri

//array
/* var a =[1,2,3,4,5,"hakan"];
console.log(a[0]);
console.log(typeof a[0]); //array bir objedir, index değeriyle bir veriye ulaşıldığında o verinin değerinin türü döner */

//object
/* var insan = {
    firstname: "hakan",
    lastname: "demiral",
    age: 21
};
console.log(insan.firstname);
console.log(typeof insan); */

//function
/* var fonksiyonum = function(){
    return("Bu bir fonksiyondur.")
    };

console.log(fonksiyonum());
console.log(typeof fonksiyonum); */

//////farkları

//primitive (ilkel) veri tipleri birbirlerine atandıklarında asıl değer değiştiğinde atama yapılan değer değişmez!
/* var a = 10;

var b = a;

var a = 15;

console.log(a);
console.log(b); //b aynı şekilde 10 kalacaktır*/

//reference veri tiplerini değişkene atadığımızda ve o değişkeni tekrar bir değişkene atadığımızda iki değişken de aynı adresi gösterecektir, birini kullanarak yaptığımız değişiklik diğerini etkileyecektir denemez ikisi de aynı şeyi gösterdiği için ikinci değişken de aynı değeri dönecektir.

var a = [1,2,3];
var b = a;
a.push(4,5);
console.log(a);
console.log(b); //b de aynı adresi gösterdiği için array 1,2,3,4,5 şeklinde dönüyor.



