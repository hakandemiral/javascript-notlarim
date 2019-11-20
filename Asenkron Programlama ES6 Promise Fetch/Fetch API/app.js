// getTextFile = () => {
//     fetch("test.txt")
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
// }

// getJSONFile = () => {
//     fetch("test.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
// }

// getExternalAPI = () => { //bir fonksiyon açıyorum
//     fetch("https://api.exchangeratesapi.io/latest") //fetch ile endpointime istek gönderiyorum
//     .then(response => response.json()) //then ile veri geldiğinde response özelliği içindeki json verisini return ediyorum
//     .then(data => { //gelen json içinden TRY kuurnu alıp konsola bastırıyorum
//         console.log(data.rates.TRY);
//     })
//     .catch(err => console.error(err)); //cath ile bir hata varsa onu yakalıyorum ve konsola basıyorum
// }

const myApiKey = "";
const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${myApiKey}`;

getExternalAPI = () => { //bir fonksiyon açıyorum
    fetch(url) //fetch ile endpointime istek gönderiyorum
    .then(response => response.json()) //then ile veri geldiğinde response özelliği içindeki json verisini return ediyorum
    .then(data => { //gelen json içinden haberleri tek tek alıp başlıklarını konsola bastırıyorum
        // console.log(data.articles);
        data.articles.forEach(news => {
            console.log(news.title);
        });
    })
    .catch(err => console.error(err)); //cath ile bir hata varsa onu yakalıyorum ve konsola basıyorum
}

// getTextFile();
// getJSONFile();
getExternalAPI();