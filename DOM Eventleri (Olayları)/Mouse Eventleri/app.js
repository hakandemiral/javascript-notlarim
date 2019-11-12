//Mouse Eventleri
const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

//Click Event => Tek tıklama
//title.addEventListener("click", run);
//DoubleClick Event => Çift tıklama
//title.addEventListener("dblclick", run);

//MouseDown Event => Tuşa Basıldığında
//title.addEventListener("mousedown", run);
//MouseUp Evenet => Tuştan Çekildiğinde
//title.addEventListener("mouseup", run);

//MouseOver => Cursor içeri girdiğinde
//cardBody.addEventListener("mouseover", run);
//MouseOut => Cursor dışarı çıktığında
//cardBody.addEventListener("mouseout", run);
//MOUSE OVER/OUT VE MOUSE ENTER/LEAVE EVENTLERİNİN FARKI; OVER/OUT SEÇİLİ ELEMENTİN CHILDLARINDA DA İŞLEMEYE DEVAM EDER ENTER/LEAVE YALNIZCA SEÇİLİ ELEMENTTE İŞLER
//Mouse Enter
//cardBody.addEventListener("mouseenter", run);
//Mouse Leave
//cardBody.addEventListener("mouseleave", run);


function run(event){
    console.log(event.type);
};