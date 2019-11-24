class Currency{

    static async setRates(base){
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
        .catch((err) => alert(err));
        const data = await response.json();

        sessionStorage.setItem("rates", JSON.stringify(data.rates));
    }

    static getRate(currency){
        return JSON.parse(sessionStorage.getItem("rates"))[currency];
    }
}