//Local Storage

//setItem
/* localStorage.setItem("ad", "hakan");
localStorage.setItem("yas", 21); //local ve session storage değer eklerken ne yazarsan yaz string olarak kaydolur
 */
//Clear
//localStorage.clear(); //localStorage'ı temizler

//null durumu
/* console.log(localStorage.getItem("ad")); //eğer istediğimiz veri yoksa null object döner

if (localStorage.getItem("ad") === null){
    console.log("Sorguladığınız veri bulunamadı.");
}
else{
    console.log(`Sorguladığınız veri: ${localStorage.getItem("ad")}`);
} */

//Local Storage Array Yazma
//LocalStorage'e yazdığımız her veri stringe döneceğinden Arraylarda stringe dönerek özelliğini kaybeder.
//const a = new Array("selam","hakan","demiral");

//localStorage.setItem("yapilacak", a); //bir arrayi localstorage'e yazarsak virgülle ayrılmış (boşluksuz) şekilde yazılır

//JSON Stringify ve JSON Parse öğeleri kullanımı arrayleri daha sağlıklı şekilde storage'de tutmamızı sağlar

/* localStorage.setItem("deneme", JSON.stringify(a)); //arrayı tamamiyle stringe çevirdik

const value = JSON.parse(localStorage.getItem("deneme")); //stringify ettiğimiz arrayı parse ile tekrar geçerli bir arraya dönüştürüp value değişkenine atadık

console.log(value);
console.log(typeof value);
 */

 ///////////////////// FORM ÜZERİNDE İŞLEMLER

 //elementleri seçelim
 const form = document.querySelector("#todo-form");
 const todoInput = document.querySelector("#todo");

 form.addEventListener("submit", addTodo);

 function addTodo(e){
     let todos;

     if(localStorage.getItem("todos") === null){
         todos = [];
     }
     else{
         todos = JSON.parse(localStorage.getItem("todos"));
     }
     todos.push(todoInput.value);

     localStorage.setItem("todos",JSON.stringify(todos));

     todoInput.value = "";

     e.preventDefault();
 };
