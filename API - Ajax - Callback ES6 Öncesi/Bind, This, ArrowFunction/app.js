const person = {
    age: 25,

    tellAge: function(){
        console.log(this.age);
    } //bind ile objenin bulundupu global scope'a bağladığımızda this anahtar kelimesi global scope içini göstermeye başlıyor, arrow function da bind'e gerek kalmıyor
}

person.tellAge();