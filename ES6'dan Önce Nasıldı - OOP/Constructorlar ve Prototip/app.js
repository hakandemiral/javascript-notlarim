//Constructor (Yapıcı Element)'lar OOP'nin temelidir, bir çalışanlar listesi yaparak nasıl çalıştığına bakalım.

function Employee(name,surname,age,salary){ //Constructor atanırken baş harf büyük olur
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.salary = salary
}
Employee.prototype.selam = function(){ //prototype'a fonksiyon eklerken arrow function kullanamıyoruz sanırım this ile ilgili
    console.log(this.name + " sizi selamlıyor!");
}

//İşçi oluşturalım
let emp1 = new Employee("Hakan", "Demiral", 21, 9000)
let emp2 = new Employee("Hakans", "Demirals", 212, 90002)

//console.log(emp1.selam());
emp1.selam();
emp2.selam();