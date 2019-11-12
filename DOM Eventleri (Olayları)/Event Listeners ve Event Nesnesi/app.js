//Döküman içinde bir yere tıkladığımız, odaklandığımızda, sağ tıkladığımzıda vs. bu bir event(olay)'dır.

//FOCUS EVENT
//Öncelikle bir elementi seçelim ve değişkene reference atayalım
const filterInput = document.querySelector("#filter"); // queryselector kullanacak form-control inputunun referansını filterInput'a atadım.

//ESKİ YÖNTEM
//onfocus özelliğini (property) kullanarak seçtiğim inputa odaklanıldığında bir fonksiyon çalışmasını sağlıyorum
/* filterInput.onfocus = function(){
    console.log("#filter id'sine sahip bir elemente odaklanıldı.");
}; */

//YENİ YÖNTEM
//Event Listener kullanımı
/* filterInput.addEventListener("focus",function(){ //addEventListener metodunun ilk parametresi eventin adı(string olarak), ikinci parametresine ise bir fonksiyon içine tetik sonrası çalışacak kod yazılır.
    console.log("#filter id'sine sahip bir elemente odaklanıldı.");
});
 */
//Eventin içeriğine göz atmak
/* filterInput.addEventListener("focus",function(e){ //addEventListener metodunun ilk parametresi eventin adı(string olarak), ikinci parametresine ise bir fonksiyon içine tetik sonrası çalışacak kod yazılır.
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
}); */

//SUBMIT EVENT
//Elementimizi değişkene referanslayalım
const submitButton = document.querySelector("#todo-form"); //formu seçtik

submitButton.addEventListener("submit", function(e){
    console.log("merhaba"); //henüz submitin başka bir yere gitmeye çalışmasını ve sonucunda console'daki merhaba yazısının anlık olarak kaybolmasını çözümleyemedik
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
    e.preventDefault(); //formu preventDefault ile başka bir yere gitmesini engelleyerek submitte yaptığımız işlemleri görebilmeyi sağladık. (bu özellik fonksiyonun sonunda kullanılması güvenlik için gereklidir).
});
