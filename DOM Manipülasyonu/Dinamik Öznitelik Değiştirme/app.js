//Dinamik Attribute Değiştirme, Silme, Ekleme
let element;
//Sayfa başınsaki inputu seçiyorum
const todoInput = document.getElementById("todo");

//Seçtiğimiz elemente bakalım
element = todoInput; //Direkt inputu element olarak verdi
//element = todoInput.classList; //DOMTokenList (Object) olarak verdi

todoInput.classList.add("test"); //classList'e yeni eleman ekledik
todoInput.placeholder = "test"; //placeholderi değiştirdik
todoInput.classList.remove("test"); //eklediğimiz test classını sildik

//getAttribute metodu
element = todoInput.getAttribute("placeholder"); //belirttiğimiz niteliğin değerini döner
element = todoInput.getAttribute("name"); //belirttiğimiz niteliğin değerini döner

//setAttribute metodu
todoInput.setAttribute("placeholder", "hakan demiral"); //ilk parametre atanacak niteliğin adı, ikinci parametre niteliğe verilecek değer

//removeAttribute metodu
todoInput.removeAttribute("placeholder"); //içine verdiğin niteliği siler

//hasAttribute metodu
element = !(todoInput.hasAttribute("name")); //boolean değer döner, içine yazdığın niteliğe sahip mi? kontrolü yapar

console.log(element);