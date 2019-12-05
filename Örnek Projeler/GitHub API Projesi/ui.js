class UI{

    static userToUI(userData){

        profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-4">
                        <a href="${userData.userInfo.avatar_url}" target = "_blank">
                        <img class="img-fluid mb-2" src="${userData.userInfo.avatar_url}"> </a>
                        <hr>
                            <div id="fullName"><strong>${userData.userInfo.name}</strong></div>
                            <hr>
                            <div id="bio">${userData.userInfo.bio}</div>
                            </div>
                            <div class="col-md-8">
                                <button class="btn btn-secondary">
                                    Takipçi  <span class="badge badge-light">${userData.userInfo.followers}</span>
                                </button>
                                <button class="btn btn-info">
                                    Takip Edilen  <span class="badge badge-light">${userData.userInfo.following}</span>
                                </button>
                                <button class="btn btn-danger">
                                    Repolar  <span class="badge badge-light">${userData.userInfo.public_repos}</span>
                                </button>
                                <hr>
                                <li class="list-group">
                                    <li class="list-group-item borderzero">
                                        <img src="images/company.png" width="30px"> <span id="company">${userData.userInfo.company}</span>
                                        
                                    </li>
                                    <li class="list-group-item borderzero">
                                        <img src="images/location.png" width="30px"> <span id = "location">${userData.userInfo.location}</a>
                                        
                                    </li>
                                    <li class="list-group-item borderzero">
                                        <img src="images/mail.png" width="30px"> <span id="mail">${userData.userInfo.email}</span>
                                        
                                    </li>
                                    
                    </div>  
                </div>
            </div>
        `;

        repos.innerHTML = "";

        userData.userRepos.forEach((repo) => {

            repos.innerHTML += `
                <div class="mb-2 card-body">
                <div class="row">
                    <div class="col-md-2">
                        <span></span> 
                        <a href="#" target = "_blank" id = "repoName">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-secondary">
                            Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                        </button>
                        <button class="btn btn-info">
                            Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                        </button>
                    </div>
                </div>
                </div>
            `

        });
    }

    static addLastSearcherUser(userName){

        const listElement = document.createElement("li");
        listElement.className = "list-group-item";
        listElement.textContent = userName;

        lastSearchedUsers.appendChild(listElement);
    }

    static clearLastSearched(){

        while(lastSearchedUsers.firstElementChild !== null){
            lastSearchedUsers.firstElementChild.remove();
        }
    }

    static showAlert(type, message){

        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.textContent = message;

        cardBody.appendChild(alert);

        setTimeout(()=> alert.remove() ,2500);
    }
}