const tbody = document.getElementById("employees"); //elemanları ekleyeceğim tbody elementini seçiyorum
document.getElementById("ajax").addEventListener("click", getAllEmployees); //elemanları al tuşunu tetikliyorum

function getAllEmployees(){ //fonksiyonumu tanımlıyorum
    const xhr = new XMLHttpRequest(); //xhr objemi constructor aracılığıyla oluşturuyorum

    xhr.onload = function(){ //istek sonuçlandırktan sonra olacakları yazıyorum
        if(this.status == 200){ //eğer sorunsuz biterse
            const employees = JSON.parse(this.responseText); //gelen responseText'i JSON.parse ile stringden array'e dönüştür (array içinde objeler mevcut olacak)

            employees.forEach(function(employee){ //foreach ile tüm eleman objelerinde gezinelim
                tbody.innerHTML += ` //her bir eleman objesini tabloya yeni bir satır olarak ekledim
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
            `
            });//her bir eleman objesini tabloya yeni bir satır olarak ekledim
        }
    }
    xhr.open("GET", "employees.json", true); //bağlantımı açıyorum
    xhr.send(); //fire in the hole!
}