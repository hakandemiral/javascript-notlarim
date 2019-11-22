class Request{
    
    async get(url){
        const response = await fetch(url);
        return await response.json();
    }

    async post(url, postData){
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(postData)
        });
        return await response.json();
    }

    async put(url, editedData){
        const response = await fetch(url, {
            method: "PUT",
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(editedData)
        })
        return await response.json();
    }

    async delete(url){
        const response = await fetch(url, {
            method: "DELETE"
        })

        return "Veri silme başarılı.";
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => console.log(albums))
// .catch(err => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums",{userId: 333, title: "Bu title."})
// .then(postedAlbum => console.log(postedAlbum))
// .catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId: 43, title: "Bu title.", body: "Bu body."})
// .then(editedAlbum => console.log(editedAlbum))
// .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums")
.then(deletedAlbum => console.log(deletedAlbum))