let value;
const ad = "hakan", soyad = "demiral", diller = "Python,Js,C";

//string toplama yan yana yazdırır
value = ad + soyad;
value = ad + " " + soyad;

//operator ile birleştirme
value = ad + soyad;
value += "1998";

//karakter sayısı almak
value = ad.length;

//concat
value = ad.concat(soyad + "1998")

//case edit
value = ad.toLowerCase();
value = ad.toUpperCase();

//index değeriyle karakter yakalama
value = ad[0];
value = ad[ad.length - 1]; //son karakteri almak index 0'dan başladığı için 5 karakterli isimde son harf 4. index olacaktır.

//indexOF => verilen değerin hangi indexte olduğunu bulmak, hiç yoksa -1 verir, ilkini bulduktan sonra ikincisine bakmıyor sadece ilkini veriyor.
value = ad.indexOf("n")

//charAt => verilen indexte hangi karakter olduğunu return eder
value = ad.charAt(0);

//split => verilen karakterleri ayraç olarak kullanıp sonucu array döner.
value = diller.split(",");

//replace => ilk parametreye girdiğin değeri ikinci parametreyle replace eder, ilk işten sonra durur.
value = diller.replace("Python","VisualBasic");

//includes => parametrede verilen veri var ise true döner yoksa false. (case sensetive)
value = ad.includes("hakan");

console.log(value);
console.log(typeof value);