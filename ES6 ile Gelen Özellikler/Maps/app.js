/* //Map veri tipi => Key ve Value değerlerini alır

let myMap = new Map(); //bu şekilde oluşturulur

//test etmek için üç farklı tipte veri oluşturalım değişkenlere atayalım.
const key1 = "hakan"
const key2 = {a:10,b:20}
const key3 = () => 2;

//Set => değişkenlerimizi map'e eklemek
myMap.set(key1,"String Değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Fonksiyon Değer");

//Get => maplerden veri çekmek
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

//Tüm mapi almak
console.log(myMap);

//Mapin boyutunu almak
console.log(myMap.size); */

//Denemelere devam

let cities = new Map(); //Map değişkenimi açıyorum

cities.set("Ankara",5)
cities.set("İstanbul",15)
cities.set("İzmir",3)

//forEach ile mapimizde gezinelim
/* cities.forEach(function(value,key){ //forEach içine value ve keyimizi göndererek her map öğesi için döngüyü çalıştırıp konsola belli bir düzende bastık.
    console.log(key,value)
}); */

/* //forOf ile gezinelim
for(let [key, value] of cities){ //cities mapindeki key ve valueleri array olarak döndü burada destructing de kullanabiliyoruz
    console.log(key,value);
}; */

/* //Map keys => sadece key veya value dönebiliyoruz
for(let key of cities.keys()){ //burada keys bir metod () kullanılmalı!
    console.log(key);
};

for(let value of cities.values()){ //burada values bir metod () kullanılmalı!
    console.log(value);
}; */

/* //Arraylerden map oluşturma
const array = [["selami",15],["şahin",16]];

let lastMap = new Map(array);

console.log(lastMap) */

//Maplerden array oluşturma
const array = Array.from(cities);
console.log(array);