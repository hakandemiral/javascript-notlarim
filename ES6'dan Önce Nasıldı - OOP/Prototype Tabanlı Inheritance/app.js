/* //Inheritance - Kalıtım

//Person constructoru açıyorum
function Person(name, age){
    this.name = name;
    this.age = age;
}

//Person objemin prototipine showInfos isimli bir fonksiyon ekliyorum.
Person.prototype.showInfos = function(){
    console.log("İsim: " + name + " Yaş: " + age)
}

//Employee constructoru açıyorum (İşçiler aynı zamanda persondur)
function Employee(name,age,salary){
    Person.call(this,name,age); //Person objesini içeri çağırdık, name ve age argümanlarını ise içine gönderdik
    this.salary = salary;
}

const emp = new Employee("hakan", 21, 4000);

const person = new Person("hakan", 21)

console.log(emp.salary); */