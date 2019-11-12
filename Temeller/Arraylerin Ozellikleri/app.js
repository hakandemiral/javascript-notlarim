let value;

//oluşma yöntemleri
const numbers = [0,1,2,3,4,5];
const numbers2 = new Array(1,2,3);

//string alabilir
const langs = ["Python", "Java", "C#",]

//her şeyi alabilir
const hersey = [1, "Python", 1.3, null, undefined, function(){return("Selam");}]

//Uzunluk alma (içindeki toplam veri sayısı) (.lenght)
value = [1,2,3,4].length;

//Index'e göre değer alma
value = numbers[0]; //1. nesne
value = numbers[1]; //2. nesne
value = numbers[2]; //3. nesne
value = numbers[numbers.length - 1]; //toplam değer sayısından 1 çıkardık, son elemana ulaştık (indexler sıfırdan başladığı için.)

//Indexteki değeri değiştirme
 numbers[0] = 1000; //0.indexin değerini değiştir.
 value = numbers; //bunu konsola valueyi yazdırdığımız için yaptık

 //IndexOf verilen değerin array içindeki ilk özdeşinin indexini verir.
value = numbers.indexOf(1000);

//Arrayin sonuna değer ekleme
numbers.push(888);
value = numbers;

//Arrayin başına değer ekleme
numbers.unshift(777);
value = numbers;

//Arrayin sonundan değer silme
numbers.pop();
value = numbers;

//Arrayin başından değer silme
numbers.shift();
value = numbers;

//Arrayin belirli bir kısmını silme (parametre olarak başlangıç ve bitiş indexleri verilir)
//bitiş index'i dahil değildir (exclude)
let numberssplit = [0,1,2,3,4,5];
console.log(numberssplit);
console.log(typeof numberssplit);

numberssplit.splice(0,3);

console.log(numberssplit);
console.log(typeof numberssplit);

//Arrayi terse çevirme Reverse
let numbersreverse = [0,1,2,3,4,5];
console.log(numbersreverse);
console.log(typeof numbersreverse);

numbersreverse.reverse();

console.log(numbersreverse);
console.log(typeof numbersreverse);

//Sort (arraydeki değerlerin ilk hanesine göre sıralar)
let numberssort = [71,42,34,76,93,19,25];
console.log(numberssort);
console.log(typeof numberssort);

numberssort.sort();

console.log(numberssort);
console.log(typeof numberssort);