//Dinamik Element Silme

//Listeyi komple alıyorum
const todoList = document.querySelector("ul.list-group");

//Childları NodeList(Array) şeklinde alıyorum
const todos = document.querySelectorAll("li.list-group-item");

//Remove Metodu
todos[0].remove(); //todos değişkenine list-group-item elementlerini NodeList şeklinde atamıştık, 0.indexe remove methodu uyguladık.

//RemoveChild Metodu
todoList.removeChild(todoList.lastElementChild); //todoList değişkenine komple ul elementini atamıştık, removeChild metoduna parametre olarak lastElementChild ile ul'nin son çocuğunu verdik.