//SessionStorage pencere veya sekme kapatılana kadar tarayıcının depolama alanında tutabilediğimiz
//key ve value yani bir anahtar ve bu anahtarın değerini tutabildiğimiz depolama alanıdır.

//Butonlarımızı değişkenlerimize tanımlayalım.
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//Inputlarımızı değişkenlerimize tanımlayalım.
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

//Butonların click eventini dinleyip çalışacak fonksiyonları atayalım.
add.addEventListener("click",addItem);
del.addEventListener("click",delItem);
clear.addEventListener("click",clearItems);

//Fonskyonlarımızı yazalım.
function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value);
};
function delItem(e){
    sessionStorage.removeItem(deletekey.value);
};
function clearItems(e){
    sessionStorage.clear();
};