//var

/* var a;

console.log(a); */

/* let
- tekrardan deklare edilemez (let a=1 denildiyse kodun devamında let konulmadan a=2 şeklinde değiştirilebilir.)
- es6 ile hayatımıza girmiştir.
 */


/* const (sabit demek)
- reference veri tipi atandığında atanan verinin içinde değişiklik yapıldığında sorun çıkarmaz çünkü sadece hedefi içinde tutuyor.
- primitive veri atandığında içindeki veriyi direkt olarak tuttuğu için değiştirilemez
*/

const a = [1,2,3];
const b = a;
a.push(4);
console.log(a);
console.log(b);
