//Window objesi

let value;

//document windows objesinin bir alt objesidir, sayfadaki tüm dökümanı içinde barındırır.
value = document;
value = document.all; //.all ile kullanırsak html collection olarak dönüş yapar
 
    //indexlerine bu şekilde ulaşabiliriz
value = document.all[1];
value = document.all[2];
value = document.all[3];
    //son indexe ulaştık
value = document.all[document.all.length - 1];

//for döngüsü ile tüm elementleri ekrana yazdıralım
// const elements = document.all; //elements değişkenine document objesinin tüm elementlerini html collection olarak atadık.

/* for(let i = 0; i < elements.length; i++){
    console.log(elements[i]);
}; */

//foreach ile tüm elementleri ekrana yazdıralım. (foreach arraylerde çalıştığından html collection gelen veriyi tanımaz, önce veriyi array yapalım.)
/* const collection = Array.from(document.all);
collection.forEach(function(element){
    console.log(element)
}) */

//

//diğer alt elementlere bakalım
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;

//documentin URL'ine erişelim
value = document.URL;

//documentin charsetine erişelim(head kısmında tanımlanan)
value = document.characterSet;

//documentimiz içindeki scriptlere erişelim
// !!!!!! ÖNEMLİ DETAY !!!!!!
// eğer çalıştığımız javascript dosyası veya html içine gömülmüş ise kodu
//body'nin en altında değilse kendinden sonra gelen elementleri görmez!!!
value = document.scripts;
value = document.scripts.length;
value = document.scripts[0];

//documentimiz içindeki linklere erişelim
value = document.links;
value = document.links[3]; //index ile eriştik
value = document.links[document.links.length - 1]; //en sondaki linke eriştik

value = document.links[document.links.length - 1].getAttribute("class"); //son linkin class'ına eriştik //getAttribute fonksiyonu içine girilen özniteliği çeker
value = document.links[document.links.length - 1].getAttribute("href") // href özniteliğinin değerini çektik
value = document.links[document.links.length - 1].className; //direkt olarak class ismini çekmeye yarayan özellik
value = document.links[document.links.length - 1].classList; //classların tümünü liste (token list) halinde veriyor.


//document içindeki formlarda gezelim (dosyadaki ikinci texbox bir form değil sadece input)
value = document.forms; //collection objesi döner
value = document.forms[0]; //obje döner

value = document.forms.length; //kaç form olduğunu döner
value = document.forms["form"]; //name="form" olan objeyi döner
value = document.forms[0].id; //0.indexte bulunan formun id'sini döner
value = document.forms[0].getAttribute("id"); //bir üsttekiyle aynı işi yapar
value = document.forms[0].getAttribute("name"); //0.indexteki formun name değerini döner
value = document.forms[0].name; //bir üsttekiyle aynı işi yapar

//formun methodunu öğrenme
value = document.forms[0].method;
//value = document.forms[0].getAttribute("method"); //!!!BU KULLANIM YANLIŞTIR!!! //getAttribute elementinin böyle bir işlevi yoktur.

console.log(value);
console.log(typeof value);
console.log(typeof value);