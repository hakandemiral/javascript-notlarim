//Klavye eventlerini inceleyelim

//keypress
/* document.addEventListener("keypress",run); //keypress Eventi insert,arrow key, delete gibi tuşları algılamaz.

function run(hakan){
    console.log(hakan.which); //basılan tuşun ASCII değerini döner
    console.log(hakan.key); //basılan tuşun kendisini döner
}; */

//KEYDOWN TUŞA BASILDIĞINDA ÇALIŞIR --- KEYUP TUŞ BIRAKILDIĞINDA ÇALIŞIR

//keydown
/* document.addEventListener("keydown", run);

function run(e){
    if (e.key == "ArrowUp"){
        document.querySelector("#clear-todos").className = "btn btn-success";
    }
    else if (e.key == "ArrowDown"){
        document.querySelector("#clear-todos").className = "btn btn-warning";
    }
}; */

//keyup
/* document.addEventListener("keyup", run);

function run(e){
    if (e.key == "ArrowUp"){
        document.querySelector("#clear-todos").className = "btn btn-success";
    }
    else if (e.key == "ArrowDown"){
        document.querySelector("#clear-todos").className = "btn btn-warning";
    }
}; */

//Bir Todo Girin inputuna yazılan şeyi Todo List başlığına basacağız ve keyup kullanılacak.
const cardHeader = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", run);

function run(){
    cardHeader.textContent = todoInput.value;
}