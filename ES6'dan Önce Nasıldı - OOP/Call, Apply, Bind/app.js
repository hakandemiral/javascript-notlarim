//Call

//iki adet obje tanımlıyorum
const obj1 = {
    number1 : 10,
    number2 : 20
}
const obj2 = {
    number1 : 30,
    number2 : 40
}
function addNumbers(number3,number4){
    //console.log(this) //bunu tek başına çalıştırdığımzıda this anahtar kelimesi nodejs'de global objeyi dönüyor tarayıcı da window objesini dönüyor
    console.log(this.number1 + this.number2 + number3 + number4);
}
//addNumbers bir obje => en baştaki objenin Prototype'ında call methodu bulunuyor => onu kullanarak obj1 ve obj2 objelerini bu fonksiyonlar için çağırdık. Böylelikle this anahtar kelimeleri window'a gitmeden önce obj1 veya obj2'yi ziyaret etti number1 ve number2'yi orada buldu.
addNumbers.call(obj1,1,2);
addNumbers.call(obj2,1,2);

//Apply (Call ile aynı sadece yapısı farklı)
addNumbers.apply(obj2,[200, 100]); //Tek farkı argümanları array halinde alıyor olması gibi duruyor.

//Bind (Kopya bir fonksiyon üretir)

//Bir fonksiyon üretelim
function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4
};

//Bind ile hem obj1'e göre çalıştırıp hem de kopya üretmiş olalım
const copyFunction = getNumbersTotal.bind(obj1);

//kopya fonksiyonumuzu çalıştıralım
console.log(copyFunction(200,100));