const text = document.getElementById("txt");
document.getElementById("btn").addEventListener("click",function(){

    const xhr = new XMLHttpRequest(); //XHR objemi oluşturuyorum

/*     //ESKİ BİR YÖNTEM
    xhr.onreadystatechange = function(){ //xhr objemizdeki onreadystatechange özelliği state değiştikçe çalışacak, içerde if bloğu ile 200 & 4 durumunu yakalayacak.

        if(this.status == 200 && this.readyState == 4){ //eğer status 200 ve readystate 4(response ready) ise
            console.log(this.responseText) //response'u kullandık.
        }
    } */

    //Yeni nesil yöntemler
    xhr.onprogress = function(){ //readyState 3 olduğunda yani istek işleme alındığında çalışır
        console.log("İstek işleniyor") //konsola isteğin işlemde olduğunu basıyorum.
    }
    xhr.onload = function(){ //istek bittiğinde çalışacak
        if(this.status == 200){ //eğer status 200 ise (onload olabilmesi için zaten readyState 4 olmuş olmak zorunda olduğundan :) onu kontrol etmiyoruz)
            text.value = this.responseText; //gelen response veri ile istediğini yap
        }
        else{ //200 harici bir durumdaysak bir sorun var demektir
            console.log(this.status); //HTTP hata kodunu konsola bas
            text.value = `Bir hata oluştu: ${this.status}`; //HTTP hata kodunu kullanıcıya göster (isteğe bağlı tabi)
        }
    }

    xhr.open("GET", "data.txt", true); //İlk parametre metod, ikinci parametre istek yapılacak yer, üçüncü parametre senkron/asenkron ayrımı (true = async / false = sync)
    xhr.send(); //hazırladığımız ilmek ilmek işlediğimiz requesti artık gönderiyoruz
})