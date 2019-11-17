class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(endpoint,callback){
        this.xhr.open("GET", `https://jsonplaceholder.typicode.com${endpoint}`);
        
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("GET Request Esnasında Hata!",null);
            }
        }

        this.xhr.send();
    }

    post(endpoint, callback, data){
        this.xhr.open("POST", `https://jsonplaceholder.typicode.com${endpoint}`);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 201){
                callback(null, this.xhr.responseText);
            }
            else{
                callback("POST Request Esnasında Hata!", null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    put(endpoint, callback, data){
        this.xhr.open("PUT", `https://jsonplaceholder.typicode.com${endpoint}`);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null, this.xhr.responseText);
            }
            else{
                callback("PUT Request Esnasında Hata!", null);
            }
        }

        this.xhr.send(JSON.stringify(data));
    }

    delete(endpoint, callback){
        this.xhr.open("DELETE", `https://jsonplaceholder.typicode.com${endpoint}`);
        this.xhr.setRequestHeader("Content-type", "application/json");

        this.xhr.onload = () => {
            console.log(this);
            if(this.xhr.status === 200){
                callback(null, "Veri silme işlemi başarıyla tamamlandı.");
            }
            else{
                callback("DELETE Request Esnasında Hata!", null);
            }
        }

        this.xhr.send();
    }
}

const request = new Request();

// request.get("/posts", function(err,response){
//     if (err === null){
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }
// })

// request.post("/posts", function(err,response){
//     if (err === null){
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }
// }, {userId : 77, title : "Brave New World"})

// request.post("/posts", function(err,response){
//     if (err === null){
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }
// }, {userId : 77, title : "Brave New World"})

// request.put("/posts/1", function(err,response){
//     if (err === null){
//         console.log(response);
//     }
//     else{
//         console.log(err);
//     }
// }, {userId : 244, title : "Brave New World"})

request.delete("/posts/1", function(err,response){
    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});