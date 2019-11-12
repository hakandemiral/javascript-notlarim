document.getElementById("change").addEventListener("click", change); //change tuşunun click eventini dinliyoruz
function change(){ //change tıklandığında çalışacak
    const xhr = new XMLHttpRequest(); //xhr objemi oluşturuyorum

    xhr.onload = function(){ //response hazır olduğunda çalışacak
        if(this.status == 200){ //eğer hata yoksa
            const amount = Number(document.getElementById("amount").value); //amount inputuna (Euro) yazılan değeri alıp number'e çevir ve amount constuna ata
            const rate = JSON.parse(this.responseText).rates.TRY; //gelen cevabı parse eti içinden TRY kurunu al rate constuna ata
            const tl = document.getElementById("tl"); //tl karşılığının yazılacağı inpuıtu seç
            tl.value = rate * amount; //yazılan miktarı TRY kuru ile çarpıp tl inputunun value'una ata
        }
    }
    xhr.open("GET","https://api.exchangeratesapi.io/latest") //GET metodu ile bu URL'e request at (default async)
    xhr.send(); //isteği yolla
}