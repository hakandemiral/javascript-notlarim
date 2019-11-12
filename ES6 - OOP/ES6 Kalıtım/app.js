//ES6 Class Tabanlı Kalıtım İşlemleri

//SuperClass, BaseClass oluşturuyoruz
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log(`${this.name} kişisinin maaşı ${this.salary} ve ${this.age} yaşında.`)
    }
}

//DerivedClass, SubClass, ChildClass Oluşturuyoruz
class Employee extends Person { //extends Person diyerek bu class'ın içine Person classını dahil ediyor, genişletiyoruz.
    constructor(name,age,salary) {
        super(name, age); //superrClassımıza name ve age parametrelerini gönderiyoruz
        this.salary = salary;
    }
    showInfos(){ //Burada overriding yaptık bir employee üzerinden showinfos çağırıldığında Person'a kadar bubbling yapmayacak 
        console.log(`${this.name} kişisinin maaşı ${this.salary} ve ${this.age} yaşında.`)
    }
    toString(){ //Burada overriding yaptık bir employee üzerinden toString çağırıldığında Object'2 kadar bubbling yapmayacak 
        console.log("toString ama Employee classındaki.")
    }
    raiseSalary(amount){
        this.salary += amount;
    }
}

const emp1 = new Employee("Hakan", 21, 2800);

console.log(emp1);

emp1.raiseSalary(100);

console.log(emp1);

emp1.toString();