//callback fonsiyonlar asenkron işlemleri yönetmek için kullanılıyor, birkaç örnek aşağıdadır.


//1. deneme
//burada normalde process2 önce process1 sonra çalışmalıydı çünkü setTimeout değerleri bu öncelikte ayarlandı, fakat biz process1 ve process2 sırasıyla çalışmasını
//veya daha önemlisi process1 bitmeden process2'nin çalışmamasını istiyor olabiliriz.
//bu senaryoda aşağıdaki callback yapısı işimizi görecektir, process1 fonksiyonunu tanımlarken içine bir parametre ekliyoruz, çağırırkense içerisine kendisinden sonra çalışmasını istediğimiz fonksiyonu belirtiyoruz
//process1 içindeki işlemlerimiz bittikten sonra ise callback fonksiyonumuzu karşılamayı unutmuyoruz.
/* function process1(callback){
    setTimeout(function(){
        console.log("Process 1");
        callback();
    }, 2000);
}
function process2(){
    setTimeout(function(){
        console.log("Process 2");
    }, 1000);
};

process1(process2); */

//2. deneme
//bu yapıyı callback olmadan kurguladığımızı ve fonksiyonları ayrı ayrı çağırdığımızı düşünürsek önce konsola varolan dilleri yazacak, sonrasında yeni eklediğimiz dili array içerisine ekleyecekti.
//callback ile bunun önüne geçtik, tüm diller sağlıklı bir şekilde konsola basıldı, arada kaynayan olmadı.
const langs = ["Java", "Python", "C++"]

function addLang(lang, callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi!");
        callback();
    },2000);
};

function showLangsAll(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        })
    },1000)
};

addLang("Javascript", showLangsAll);