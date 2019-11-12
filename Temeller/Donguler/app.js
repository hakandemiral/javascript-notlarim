//While Döngüsü => sadece koşul alır, sonsuz döngüye girmemesi için müdehale gerektirir.

/* let i = 0;

while(i < 10){
    console.log(i);
    i++;
} */

//Break ve Continue
//Break => Döngüyü kırar, sonlandırır.
//Continue => döngünün belirli turunu pas geçip başına döner.
/* let i = 0;

while(i < 10){
    if((i == 3) || (i == 7)){ //3 ve 7 için continue ile pas geçip yazdırmasını engelledik.
        i++; //bunu continue'den önce koymazsak sonsuz döngüye girerdi.
        continue;
    };
    console.log(i);
    i++;
} */

//Do While döngüleri
//en az 1 defa çalışacak sonra koşula girecek.

/* let i = 11;

do{
    console.log(i);

}
while(i < 10){
    console.log(i);
    i++;
}

console.log(i); */

//for döngüsü
//array üzerinde gezinelim

/* const langs = ["PHP", "Javascript", "SQL", "Python"];

for(let index = 0; index < langs.length; index++){
    console.log(langs[index]);
} */

//foreach
//callback olarak çalışır, array.forEach şeklinde kullanılır içinde fonksiyon yazılır
//bu fonksiyonun ilk parametresine arrayin elemanları, ikinci parametresine arrayin elemanlarının indexi atanır.
//array bitene kadar çalışır :)

/* const langs = ["PHP", "Javascript", "SQL", "Python"];

langs.forEach(function(a,b){
    console.log(a,b)
}) 

//map methodu

/* const users = [
    {name: "hakan", age: 21},
    {name: "mehmet", age: 32},
    {name: "ahmet", age: 46}
];

const names = users.map(function(user){
    return user.name;
});
const ages = users.map(function(user){
    return user.age;
});

console.log(names);
console.log(ages); */

//for in döngüsü

const users = {
    name : "hakan",
    age : 21
};

for(let key in users){
    console.log(key,users[key]);
}