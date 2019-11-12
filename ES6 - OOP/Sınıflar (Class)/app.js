//ES6 Class - Sınıflar
//ES6 bize Constructor, Prototype, Inheritence gibi noktalarda SyntacticSugar sağlar.

//Öncelikle bir class açıyoruz
class Employee {
    constructor(name, age, salary){ //Burada yapıcı(constructor) elementimizi yazıyoruz.
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    //Employee Class'a bir prototype yazalım
    showInfos(){
        console.log(`Bu İşçinin adı ${this.name}, yaşı ${this.age}, maaşı ${this.salary}₺'dir.`);
    }
}

var emp1 = new Employee("Hakan", 21, 2888);

emp.showInfos();