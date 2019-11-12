//Statik Metodlar

class Matematik{
    kareAl(x){
        console.log(Math.pow(x, 2));
    }
    static kupAl(x){
        console.log(Math.pow(x, 3));
    }
}

Matematik.kupAl(3) //kupAl static bir method olduğu için direkt olarak class adı ile çağırabildik
//Matematik.kareAl(2) //kareAl statik olmadığı için not a function hatası aldık, bunu kullanabilmek için bir değişkene atamamız lazım.

var mat = new Matematik();
mat.kareAl(2)