//Elementlerin Özelliklerini Değiştirelim

//Query(CSS) Selector kullanarak değişkenime clear-todos id'li butonunu atıyorum
const element = document.querySelector("#clear-todos"); // Diyez kullanarak (#) id seçeceğimi belirttim

//Elementin özelliklerini yazdırmaya bakalım
/* console.log(element);
console.log(element.id);
console.log(element.className); //Classları string olarak getirdi
console.log(element.classList); //Classları ayırarak Dom Token olarak getirdi obje
console.log(element.classList[1]); //Array syntaxı ile indexe göre class çekebiliyoruz
console.log(element.textContent); //Seçili elementin içindeki içeriği sadece yazı olarak verir etiketleri dahil etmez
console.log(element.innerHTML); //Seçili elementin içindeki içeriği etiketler dahil olarak verir.
console.log(element.href); //Seçili elementin href özniteliğini verir.
console.log(element.style); //Seçili elementin style özellliklerini obje olarak verir. */

//Elementlerin özelliklerini ve style'larını değiştirme
/* element.className = "btn btn-success"; //Elementin classını değiştirdik, başka bir bootstrap butonu atadık.
element.style.color = "#000"; //elementimizin style özelliğine ordan da color'a gidip manüpile ettik.
element.style.marginLeft = "50px"; //elementimizin style özelliğine ve ordan da marginleft özelliğine gidip değiştirdik.
element.href = "https://hakandemiral.com.tr"; //elementin href özniteliğini editledik.
element.target = "_blank"; //elementimizin target özelliğini değiştirdik
element.textContent = "Silin"; //elementin içine text girdik, varsa tagler silinir ve bu özellikle tag eklenemez.
element.innerHTML = "<span style=\"color :#EEE\">Selam</span> Silin" //elementlerin içeriğini komple (tag dahil) editledik.
 */
//Query Selector farklı kullanımları https://www.w3schools.com/cssref/css_selectors.asp
let element2;

element2 = document.querySelector("li:last-child"); //li elementi içindeki son childi seçer
element2 = document.querySelector("li:nth-child(2)") //li elementi içindeki 2. childi seçer
element2 = document.querySelectorAll("li:nth-child(3)") //li elementi içindeki 3. childi seçer
//All kullanılması gerekenler
element2 = document.querySelectorAll("li:nth-child(odd)") //li elementi içindeki sırası tek sayı olanları seçer //NodeList (Array)
element2 = document.querySelectorAll("li:nth-child(even)") //li elementi içindeki sırası çift sayı olanları seçer //NodeList (Array)

//NodeList (Array) şeklinde dönen elementleri forEach ile toplu değiştirme
element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "red";
});

console.log(element2);