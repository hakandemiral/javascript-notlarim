//Mouse Eventleri
//Öncelikle üzerinde çalışacağım elementleri değişkenlere referanslıyorum
const cardBody = document.querySelectorAll(".card-body")[1]; //2. card body elementi
const title = document.querySelector("#tasks-title"); // Todolar yazan başlık

//Click Event =>
title.addEventListener("click", run);

function run(e){
    console.log(e.type);
};