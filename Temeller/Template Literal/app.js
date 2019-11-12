const ad = "hakan",
    soyad = "demiral",
    departman = "Js",
    maas = "9000₺";

/* 
- Tamplate Literal ` işaretleri arasına yazılır, ptyhondaki f-string ile benzerlik gösterir.
- Stringin içinde herhangi bir yerde ${veri} şeklinde kullanılır.
- Veri yerine değişken, fonksiyon, aritmeti işlem veya herhangi bir js kodu gelebilir.
*/

//düz hali
let a = "İsim: " + ad + "\n" + "Soyisim: " + soyad + "\n" + "Maaş: " + maas;

//template literal kullanılmış hali
a = `İsim: ${ad}\nDepartman: ${soyad}\nMaaş: ${maas}`

function fonksiyon(a,b){
    return a + b;
};

a = `Merhaba ${fonksiyon(10,2)}'dır sonucu 10 + 2'nin`;

console.log(a);