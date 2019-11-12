//Yeni Element Oluşturma (Tüm Taskları Temizleyin butonundan sonra bir buton daha ekleyeceğiz)
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

//Create element ile bir a etiketi ekleyecek olan değişkeni tanımlıyoruz
const newLink = document.createElement("a");

//Ekleme yapacağımız yer 2. card-body classlı element
const cardbody = document.getElementsByClassName("card-body")[1];

//newLink değişkenimizde oluşan elemente özellik ve niteliklerini ekliyoruz
newLink.id = "clear-todos";
newLink.className = "btn btn-success";
newLink.href = "https://hakandemiral.com.tr";
newLink.target = "_blank";

//AppendChild => seçili elemente child ekleme.
newLink.appendChild(document.createTextNode("Buraya Tıklayınız")); //newLink içinde derleyip topladığımız a elementinin son childinden sonraya bir textNode ekledik (innerHTML veya textContent kullansaydık sorun olurdu)

cardbody.appendChild(newLink);

console.log(newLink);
