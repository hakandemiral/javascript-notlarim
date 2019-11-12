//Input Eventleri
const filter = document.querySelector("#filter");

/* //Ek bilgi! === DOMContentLoaded => tüm içerik yüklendiğinde gerçekleşen event
//document.addEventListener("DOMContentLoaded", run); */

/* //Focus => bir inputa odaklandığında çalışır
filter.addEventListener("focus", run);
//Blur => bir input'dan odaklanmayı kaldırırsak çalışır
filter.addEventListener("blur", run); */

/* //Paste
filter.addEventListener("paste", run);
//Copy
filter.addEventListener("copy", run);
//Cut
filter.addEventListener("cut", run); */

//Select
filter.addEventListener("select", run);

function run(event){
    console.log(event.type);
};