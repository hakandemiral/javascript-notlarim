//Spread Operastors (işlemleri oldukça kısaltır)

/* const langs = ["Python", "C++", "Javascript", "C#"];*/
/* console.log(...langs); //spread operator(...) hali, arrayi ayırarak düzgün şekilde logladı
console.log(langs); //spread operatorsuz hali, klasik arrayı consolea olduğu gibi yazdı
 */

/*  const langs2 = ["Perl","Ruby",...langs]; //Spread operator (...) ile ilk arrayi ikinciye eklerken zorlanmadık
 console.log(langs2); */
 
 //destructing ve spread beraber kullanımı

/*  const numbers = [1,2,3,4,5,6,7,8,9];

 const [a,b,c,...kalanlar] = numbers; //number arrayındaki ilk indexleri aldık işimize belki yaramayacak olanları da kalanlar isminde bir array açıp içine koyduk

 console.log(a);
 console.log(b);
 console.log(c);
 console.log(kalanlar); */

 //

 //fonksiyona parametre gönderelim

 const numbers = [1,2,3];

 const topla = (a,b,c) => console.log(a+b+c);

 topla(...numbers); //fonksiyon 3 adet parametre alıyor, bu da ilk 3 indexi alacaktır