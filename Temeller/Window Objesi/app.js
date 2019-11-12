//Window objesi en baz ve üst objedir, alert bir window özelliği olmasına rağmen kodlarken window.alert yapmamıza gerek bile yoktur.

//alert => ekrana uyarı vermeyi sağlar

alert("Merhaba");

//confirm => ekrana ok ve cancel seçenekli bir uyarı basar, kullanıcı girişine göre boolean döner
confirm("Sıkıyım mı?");

//prompt => kullanıcıya mesaj göstererek string giriş almak

let a;

a = prompt("İyi misin?");

document.write(a);

//window nesnesinden bilgi almak
/* 
let value;

value = window;
value = window.location; //location bilgileri
value = window.location.host; //ip:port bilgisi
value = window.location.hostname; //yalnızca ip veya hostname bilgisi
value = window.location.port; // yalnızca port bilgisi
 */

 //window.location.reload => sayfayı yeniler (dikkatli kullan sonsuz döngü yapar)

 