//Kullanacağımız elementleri const değişkenlere referanslayalım.
const form = document.querySelector("#todo-form"); //todo eklediğimiz form
const todoInput = document.querySelector("#todo"); //todo girdiğimiz input
const todoList = document.querySelector(".list-group"); //todoların listelendiği unordered list
const firstCardBody = document.querySelectorAll(".card-body")[0]; //üst kart
const secondCardBody = document.querySelectorAll(".card-body")[1]; //alt kart
const filter = document.querySelector("#filter"); //todo filtresi
const clearButton = document.querySelector("#clear-todos");

//Aşağıdaki fonksiyonu çalıştırıyoruz
eventListeners();

//Bir fonksiyon içinde tüm elementlerimize eventListenerlerimizi ekliyorum
function eventListeners() {
  form.addEventListener("submit", addTodo); //Todo ekleme formu submit olduğunda çalışacak fonksiyon
  document.addEventListener("DOMContentLoaded", loadAllTodosUI); //Sayfa yüklendiğinde loadAllTodosUI fonksiyonunu çalıştırıyorum
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
  clearButton.addEventListener("click", clearAllTodos);
}
function clearAllTodos() {
  //arayüzden todoların tümünü kaldırma
  if (confirm("Tümünü Silmek İstediğinize Emin misiniz?")) {
    while (todoList.firstElementChild != null) {
      todoList.firstElementChild.remove();
    }
    localStorage.removeItem("todos");
  }
}
function filterTodos() {
  const filterValue = filter.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");

  listItems.forEach(function(listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.setAttribute("style", "display : none !important");
    } else {
      listItem.setAttribute("style", "display : block");
    }
  });
}
function deleteTodo(e) {
  if (e.target.className == "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    showAlert("success", "Todo başarıyla silindi");
  }
}
function deleteTodoFromStorage(deleteTodo) {
  let todos = getTodosFromStorage();

  todos.forEach(function(todo, index) {
    if (todo === deleteTodo) {
      todos.splice(index, 1);
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  });
}
function loadAllTodosUI() {
  //storagedeki tüm todoların UI'ye yüklenmesini sağlıyorum
  let todos = getTodosFromStorage();

  todos.forEach(function(todo) {
    addTodoToUI(todo);
  });
}
function addTodo(e) {
  const newTodo = todoInput.value.trim(); //Form submit olduğunda inputa girilen değer newTodo değişkenine atanacak(Trim işlemi yapılarak)
  if (newTodo == "") {
    //input boş ise hata verdiriyorum
    showAlert("danger", "Bir todo girmelisin!");
  } else {
    showAlert("success", "Başarıyla eklendi!"); //bir sorun yoksa success mesajı bastırıyorum
    addTodoToStorage(newTodo); //inputtaki veriyi storage'e ekliyorum
    addTodoToUI(newTodo); //inputtaki veriyi arayüze de ekliyorum
  }
  e.preventDefault(); //formun submit olduğunda başka sayfaya gitmesini engelliyorum
}
function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage(); //getTodosFromStorage fonksiyonum ile storagede veri varsa alıyorum yoksa boş array dönüyor
  todos.push(newTodo); //inputtan aldığım veriyi todos arrayine pushluyorum

  localStorage.setItem("todos", JSON.stringify(todos)); //üzerine ekleme yaptığım arrayı tekrardan storage gönderiyorum
}
function getTodosFromStorage() {
  //birden fazla yerde kullanacağım için storage veri çekme işini fonksiyonlaştırıyorum
  let todos;
  if (localStorage.getItem("todos") === null) {
    //eğer todos isimli bir key yoksa boş bir todos arrayi açıyoruz
    todos = [];
  } else {
    //halihazırda içerde veriler varsa onları alıp parse ederek todos arrayine atıyorum
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos; //eldeki todosu dönüyorum
}
function showAlert(type, message) {
  //alert göstermek için gerekli fonksiyonumu yazıyorum
  const alert = document.createElement("div"); //alert için div açtım
  alert.className = `alert alert-${type}`; //bootstrap standardına göre classname'inin ayarladım
  alert.textContent = message; //mesajımı yazdım

  firstCardBody.appendChild(alert); //ilk kartın sonuna uyarımı bastım

  setTimeout(function() {
    //1 saniye sonra kaybolmasını sağladım
    alert.remove();
  }, 1000);
}
function addTodoToUI(newTodo) {
  //String değerini newTodo olarak buraya gönderdik, şimdi arayüze ekliyoruz.
  const listItem = document.createElement("li"); //li elementi oluşturup değişkene atadık (dikkat! sadece değişkene atadık şuan sayfaya eklemedik)
  const link = document.createElement("a"); // delete butonu için a elementi oluşturduk.

  //link elementimizin özelliklerini ayarlayalım
  link.href = "#"; //href linkini ayarlayalım
  link.className = "delete-item"; //classını ayarlayalım
  link.innerHTML = "<i class = 'fa fa-remove'></i>"; //içine ikonunu ekleyelim

  //list elementimizin özelliklerini ayarlayalım
  listItem.className = "list-group-item d-flex justify-content-between";

  //list elementimizin için todo ismini ve silme butonunu ekleyelim
  listItem.appendChild(document.createTextNode(newTodo)); //inputtan aldığımız stringi textnode olarak liste elementine ekledik (todonun ismi)
  listItem.appendChild(link); //list elementine silme butonunu ekledik

  todoList.appendChild(listItem); //oluşturduğumuz list elementini ul'ye ekleme

  todoInput.value = ""; //inpuutu temizledik
}
