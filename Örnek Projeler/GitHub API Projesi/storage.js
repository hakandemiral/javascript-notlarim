class Storage{

    static addLastSearch(name){

        console.log(name);

        let lastSearch = new Array();

        if(localStorage.getItem("last-search") === null){
            
            lastSearch.push(name);
        }
        else{

            lastSearch = JSON.parse(localStorage.getItem("last-search"));
            lastSearch.push(name);
        }

        if(lastSearch.length > 5){
            lastSearch.shift();
        }

        localStorage.setItem("last-search", JSON.stringify(lastSearch));

    }

    static getLastSearch(){

        return JSON.parse(localStorage.getItem("last-search"));
    };

    static clearLastSearched(){

        localStorage.removeItem("last-search");
    };
}
