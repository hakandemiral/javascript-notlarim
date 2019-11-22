class Request{ //Request sınıfımı oluşturdum

    get(url){ //get requestlerim için bir metod yazıyorum
        return new Promise((resolve, reject) => { //get methodu bir promise dönecek, içinde resolve ve reject tanımlıyorum
            fetch(url) //verdiğim URL'e istek atar
            .then(response => response.json()) //then ile response döndüğünde yakalayıp gelen verideki json objesini return ediyorum
            .then(data => resolve(data)) //üst satırda return ettiğim json objesini data olarak alıp resolve şeklinde dışarıya gönderiyorum
            .catch(err => reject(err)); //hata olursa oluşan hatayı err'e atıp dışarıya reject olarak gönderiyorum
        })
    }

    post(url,data){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
              .then(response => response.json())
              .then(data => resolve(data))
              .catch(err => reject(err))
        });
    }

    put(id,url,data){
        return new Promise((resolve, reject) => {
            fetch(`${url}/${id}`,{
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    delete(id,url){
        return new Promise((resolve,reject) => {
            fetch(`${url}/${id}`,{
                method: "DELETE"
            })
            .then(resolve("Veri Silme İşlemi Başarılı"))
            .catch(err => reject(err))
        })
    }
}

const request = new Request(); //bir request objesi oluşturuyorum

request.get("https://jsonplaceholder.typicode.com/albums") //request objem üzerinden get metoduma endpointimi gönderiyorum, bana bir promise dönecek
.then(albums => { //dönen promise içinden resolve'u yakalıyoruz ve albumse atıyoruz
    console.log(albums); //albums'u konsola basıyorum
})
.catch(err => { //reject döndü ise onu yakalayıp konsola basıyorum
    console.log(err); 
})

// request.post("https://jsonplaceholder.typicode.com/albums", {title: "This Title", body : "This Body", userId : 333})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err))

// request.put(4,"https://jsonplaceholder.typicode.com/albums", {title: "Bu Title Değişti", body: "Bu Body Değişti", userId: 333})
// .then(replaceAlbum => console.log(replaceAlbum))
// .catch(err => console.log(err));

// request.delete("1","https://jsonplaceholder.typicode.com/albums")
// .then(message => console.log(message))
// .catch(err => console.log(err))