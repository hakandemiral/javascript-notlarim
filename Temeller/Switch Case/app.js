// switch case yapısı bir veriyi çoklu kontrole sokarken if else'den daha basit bir kullanım sunar.
// case'lerin sonunda break kullanmazsak çalışan ilk case'den sonraki tüm case'ler çalışır. (defalut hariç)
const kontrol = 3;

switch(kontrol){
    case 1:
        console.log("Seçim 1")
        break;
    case 2:
        console.log("Seçim 2")
        break;
    case 3:
        console.log("Seçim 3")
        break;
    case "hakan":
        console.log("Seçim Hakan")
        break;
    default:
        console.log("Geçersiz Seçim!")
}