// //1. Deneme

// function getData(data){ //fonksiyonumu tanımlıyorum
//     return new Promise((resolve, reject) => { //bir promise objesi oluşturup return ediyorum, içine callback olarak resolve, reject parametrelerini sırasıyla alacak bir fonksiyon yazıyorum
//         setTimeout(function(){ //gerçeğe yakın bir senaryo olması için 2 saniye gecikme ekliyorum
//             if(typeof data === "number"){ //eğer data number ise
//                 resolve(data); //promise objesinin resolve özelliğine datayı dön
//             }
//             else{ //eğer number değilse
//                 reject(new Error("String bir veri göndermelisin!")); //promise objesinin reject özelliğine hata mesajı dön.
//             }
//         },2000)
//     });
// }

// getData("3") //fonksiyonu çağır ve data olarak string 3 gönder
// .then(response => console.log(`Gelen Değer: ${response}`)) //then metodu ile response'u yakala ve konsola yazdır
// .catch(err => console.error(`Gelen Hata: ${err}`)) //catch metodu ile rejecti yakala ve konsola errr olarak yazdır

//2. Deneme Chain

function addTwo(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof number === "number"){
                resolve(number + 2);
            }
            else{
                reject("Lütfen number bir değer giriniz!");
            }
        },2000);
    });
}

addTwo(5) //gelen cevap 7 olacak
.then(response => {
    console.log(response); //gelen cevabı konsola bastırdım
    return response; //gelen cevabı tekrardan return ettim
})
.then(response => console.log(response - 2)) //tekrardan return ettiğim cevabı alıp 2 çıakrttım orijinal numberi konsola yazdırdım
.catch(reject => console.err(reject))