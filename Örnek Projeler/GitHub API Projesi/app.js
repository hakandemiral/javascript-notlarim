//Elementleri seçme
const searchForm = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const clearAllSearchedButton = document.querySelector("#clear-last-users");
const lastSearchedUsers = document.querySelector("#last-users");
const profile = document.querySelector("#profile");
const repos = document.querySelector("#repos");
const cardBody = document.querySelectorAll(".card-body")[0];

//Event Listeners
searchForm.addEventListener("submit", getData);
clearAllSearchedButton.addEventListener("click", clearAllSearched);
document.addEventListener("DOMContentLoaded", getLastSearchedUser);

function getData(e){

    if (nameInput.value !== ""){
        GitHub.getUserData(nameInput.value)
        .then((response) => {
            if(response.userInfo.message !== "Not Found"){
                UI.userToUI(response);
                Storage.addLastSearch(nameInput.value);
                UI.addLastSearcherUser(nameInput.value)
                nameInput.value = "";
            }
            else{
                UI.showAlert("danger",`${nameInput.value} isimli bir kullanıcı yok!`);
            }
        })
        .catch(err => alert(err));
    }
    else{
        UI.showAlert("info","Kullanıcı adı alanı boş bırakılamaz.");
    }

    e.preventDefault();
};

function getLastSearchedUser(){

    const users = Storage.getLastSearch();

    if(users !== null){
        
        users.forEach(user => UI.addLastSearcherUser(user));
    }
};

function clearAllSearched(){

    Storage.clearLastSearched();
    UI.clearLastSearched();
};
