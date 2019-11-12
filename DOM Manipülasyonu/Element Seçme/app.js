// Element seçme
let element;

// Element Id'e göre seçme
//html içersinde id benzersiz (unique) olduğu için getAttribute("id") şeklinde bir kullanımla elementlerimizi seçeceğiz
element = document.getElementById("todo-form"); //id'si uyuşan elementi seçecek, yoksa null olur(id unique)

// Element Class'a göre seçme
element = document.getElementsByClassName("list-group-item"); //Array(HTMLCollection) şeklinde bu class'a sahip tüm elementleri seçti

// Element Tag'e göre seçme
element = document.getElementsByTagName("a"); //Array(HTMLCollection) şeklinde bu tag'e sahip tüm elementleri seçti

//QuerySelector - (Css Selector)
/* CSS'de elementleri nasıl seçiyorsak öyle çalışır
                (#)     =>  id  =>      diyez(sharp)
                (.)     =>  class =>    nokta
                (div)   =>  tag =>      etiket
    Sayfada bulduğu ilk elementi seçer
 */

//Tek bir elementi seçer
element = document.querySelector("li");

//Tüm elementleri seçer (NodeList olarak seçer, arraya benzer bir yapı)
element = document.querySelectorAll("div");
//forEach ile nodelistteki tüm gelen elementleri ayrı ayrı loglayalım
element.forEach(function(e){
    console.log(e);
})

//console.log(element);