//Set Veri Tipi (Küme)

const mySet = new Set();

mySet.add("hakan");
mySet.add("demiral");
mySet.add(1998);
mySet.add({a:10,b:20});
mySet.add([1,2,3]);

//console.log(mySet);


const mySet2 = new Set(["hakan","demiral",1998,{a:10,b:20},[1,2,3]]); //Bu şekilde tanımlanırken tüm veriler array içinde olmalıdır.

console.log(mySet2);

console.log(mySet2.size) //Set'in boyutunu dönen bir özellik

//Delete method => verilen değer varsa siler yoksa hiç bir işlem yapmaz, hata da dönmez.
mySet2.delete("hakan")
console.log(mySet2);

//Has method => verilen değer varsa true döner yoksa false döner

console.log(mySet2.has("demiral"));

//Ayrıca Setler içinde For Of ile gezilebilir, Array.from ile setten array oluşturulabilir.