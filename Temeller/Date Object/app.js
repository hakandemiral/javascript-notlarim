let value;

//Date objesi boş kullanıldığında anın tarihini ve saatini verir (local sistem tarihi)
const now = new Date();
//console.log(now);

//Date objesi oluşturma (içine string olarak giriş yapılır)
const date1 = new Date("1998-03-25T05:00Z");

//get methodları
value = date1.getDate();

//sed methodları
value = date1.setMonth(03);

value = date1;

//value = date1.getMonth();
console.log(value);
console.log(typeof value);