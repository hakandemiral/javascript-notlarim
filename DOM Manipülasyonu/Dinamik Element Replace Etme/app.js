//Replace Kullanımı (Todolar Başlığını Değiştireceğiz)

//Yeni Elementimizi Oluşturalım
const newElement = document.createElement("h3"); //Yeni elementimiz h3 olacak
newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "Todolar (Replaced)"; //textContent kullanım sebebi element içinde tek bir yazı kullanacak olmamız

//Eski Elementimizi Seçelim
const oldElement = document.querySelector("#tasks-title");

//Childlarını değiştireceğimiz elementi seçip replaceChild ile değişim sağlayalım
document.querySelectorAll(".card-body")[1].replaceChild(newElement, oldElement);