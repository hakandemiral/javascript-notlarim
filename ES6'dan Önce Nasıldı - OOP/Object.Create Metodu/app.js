/* //1. Örnek

//Prototip olarak kullanmak üzere iki adet fonksiyon içeren bir obje tanımlıyorum.
const obj = {
    test1 : function(){
        console.log("1.Test Ediliyor...")
    },
    test2 : function(){
        console.log("2.Test Ediliyor...")
    }
};

//Object Create kullanarak bir obje tanımlayalım.
const emp1 = Object.create(obj); //create metoduna verdiğim parametre emp1 objesinin prototipini obj isimli objeye yönlendiriyor.

//Objeme özellik ekliyorum
emp1.name = "Hakan";
emp1.age = 21;

//Sorun olmadığını görüyoruz.
//console.log(emp1);

//Burada da sorun yok, prototip başarıyla eklenmiş, içinde olmayan bir özelliği prototipine giderek buldu.
emp1.test1();
emp1.test2(); */

//2. Örnek (Kalıtım)

//Bir tane constructor açalım ismi person ve içi boş olacak
function Person() {

}

//Test1 ve Test2 olacak şekilde iki adet prototip ekleyelim.
Person.prototype.test1 = function(){
    console.log("Test...1");
}
Person.prototype.test2 = function(){
    console.log("Test...2");
}

//Bir tane daha constructor yapalım
function Employee(name,age) {
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype) //Employee'a prototip atadım kaynak olarak ise Person'un prototipini gösterdim.
Employee.prototype.myTest = function() {console.log("My Test...");} //Employee'un kendi prototipine bir fonksiyon yazdım