//Event Bubbling => Bir elementteki click eventimiz baloncuklanarak suyun üzerine yani en üst elemente kadar çıkar ve hepsine clicklemiş oluruz

/* document.querySelector(".container").addEventListener("click",function(){
    console.log("Div Container");

});
document.querySelector(".card.row").addEventListener("click",function(){
    console.log("Card Row");
    
});
document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("Card Body");
}); */

//Event Capturing (Delegation) => eventin tetikleyeceği fonksiyonda target özelliğini kullanarak conditional'ler kurarsak basit şekilde işlem yapabiliriz
const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click",run);

function run(event){
    if(event.target.className === "fa fa-remove"){
        console.log("Silme İşlemi");
    }
    if(event.target.id === "filter"){
        console.log("Filtreleme İşlemi");
    }
    if(event.target.id === "clear-todos"){
        console.log("Tüm Taskları Temizleme İşlemi");
    }
};