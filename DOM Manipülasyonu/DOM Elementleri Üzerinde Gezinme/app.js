//Domlar Üzerinde Gezinme
let value;

//elementleri değişkenlere tanımlayalım
const todoList = document.querySelector(".list-group"); //list-group classını seçtik
const todo = document.querySelector(".list-group-item:nth-child(3)"); //list-group-item classına sahip 2. child'i seçtik
const cardrow = document.querySelector(".card.row"); //card ve row classlarına sahip olan elementi seçtik //en geniş elementlerden

//elementlerimize bakalım
value = todoList;
value = todo;
value = cardrow;

//ChildNodes (Text Dahil) (içerideki satır atlamalarını dahil dönüyor bu manyak)
value = todoList.childNodes; //seçtiğimiz elementin tüm childlerini NodeList(Array) olarak döndü
value = todoList.childNodes[0]; //NodeList bir Array olduğu için index bazlı çağırabiliyoruz.

//Children (Element)
value = todoList.children; //HTMLCollection şeklinde !!!sadece elementleri!!! döndü
value = todoList.children[1]; //array özelliği taşıdığı için indexli çekebiliyoruz
value = todoList.children[todoList.children.length - 1]; //array özelliği taşıdığı için indexli çekebiliyoruz, son childi çekiyoruz.
value = todoList.children[2].textContent = "Selam"; //seçili childin sadece textini Selam olarak değiştirdik

value = cardrow; //elementi verdi
value = cardrow.children; //children özelliği sayesinde HTMLCollection döndü
value = cardrow.children[0]; //bu sebeple indexli çalışabiliriz :D //başlığı seçtim
value = value.textContent = "Hakan"; //başlığı değiştirdim

value = todoList;
value = todoList.lastElementChild; //son childreni aldık
value = todoList.firstElementChild; //son childreni aldık
value = todoList.children.length; //todoliste atadığımız list-group elementinin kaç tane çocuğu olduğunu saydık
value = todoList.childElementCount; //todoliste atadığımız list-group elementinin kaç tane çocuğu olduğunu saydık

value = cardrow;
value = cardrow.parentElement; //card row classına sahip elementin annesini seçiyoruz
value = cardrow.parentElement.parentElement; //annesinin annesini seçtik

//Elemen Gardaşları
value = todo; //6.satırda todo değişkenine ul'deki 3. elementi atamıştık
value = todo.nextElementSibling; //sonra gelen kardeş "elementi" seçtik.
value = todo.previousElementSibling; //önce gelen kardeş "elementi" seçtik.
value = todo.previousElementSibling.previousElementSibling; //2 önce gelen kardeş "elementi" seçtik.
value = todo.previousElementSibling.previousElementSibling.previousElementSibling; //3 önce gelen kardeş "elementi" seçtik. ve öyle bir element olmadığı için null döndü.

console.log(value);