//Async ve Await özellikleri ES7 ile birlikte gelmiş olup asıl kullanım amaçları Promise yapısı üzerinde düzenli ve tutarlı kod ile birlikte syntactic sugar sağlamaktır.
//Async ile yazılmış bir fonksiyon bize promise yapısı return eder, yazdığımız fonksiyonu promise içine alır.
//Await yalnızca async fonksiyonların içinde çalışır, harici bir yerde çalıştıramayız.

async function test(){ //async bir fonksiyon tanımlıyorum

    let promise = new Promise((resolve, reject) => { //fonksiyon içine bir promise yapısı oluşturuyorum
        setTimeout(() => { //2 saniye sonra promise ismini verdiğim Promise objesi "Selam, naber?" resolve edecek.
        resolve("Selam, naber?");
        },2000);
    });

    return await promise; //await ile promise objemin resolve veya reject olmasını (tamamlanmasını) bekliyorum
}


test().then(data => console.log(data)).catch(err => console.log(err)); //then ve catch ile resolve rejectleri yakalayıp konsola basıyorum