const taban = Number(prompt("Taban Sayı:"));
const kuvvet = Number(prompt("Kuvvet Sayı:"));

const sonuc = (a, b) => Math.pow(a, b) //Arrow functionda parametre tek ise parantes yapılan işlem tek ise süslü parantez hatta yapılan tek işlem return ise return kullanmaya dahi gerek yoktur

document.body.innerHTML = `<table><tr><th>Taban: ${taban}</th></tr><tr><th>Kuvvet: ${kuvvet}</th></tr><tr><th>Sonuç: ${sonuc(taban, kuvvet)}</th></tr></table>`;
