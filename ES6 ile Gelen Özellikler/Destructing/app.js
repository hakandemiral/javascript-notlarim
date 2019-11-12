//Eski Yol
/* let number1, number2;

arr= [100,200,300,400];

number1 = arr[0];
number2 = arr[1];

console.log(number1,number2); */

//Yeni Yol (Destructing)

//Arrayler için indexe göre sıralar
/* let number1, number2;
arr= [100,200,300,400];

[number1,number2] = arr;
console.log(number1,number2); */

//Objectler için key'e göre value alıp atama yapar
/* const numbers = {
    a:1,
    b:2,
    c:3,
    d:4
}

let {d:number1,b:number2,c:number3} = numbers;

console.log(number1,number2,number3); */

//İkinci bir örnek

const person = {
    name : "hakan",
    surname : "demiral",
    birth : 1998,
    showInfos : () => console.log("Bilgiler Gösteriliyor...")
}

const {name:isim,surname:soyad,birth:dogumyili,showInfos:bilgiGoster} = person;

console.log(isim,soyad,dogumyili);
bilgiGoster();