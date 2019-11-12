//Obje oluşturma
let value;

const programmer = {
    name : "Hakan Demiral",
    age : 21,
    email : "wcnxxx@gmail.com",
    langs : ["Javascript", "Python", "SQL"],

    addres : {
        country : "Turkey",
        province : "Ankara",
        district : "Yenimahalle"
    },

    work : function(){
        console.log("Program Yazılıyor...");
    }
};

//Objelere ulaşma
value = programmer.age;

console.log(value);
console.log(typeof value);

//Objelere ulaşma 2
const programmers = [
    {name : "hakan", age : 21},
    {name : "hasan", age: 23}
]

value = programmers[0]["age"];
value = programmers[0].age; //genel kullanım noktalıdır
console.log(value);