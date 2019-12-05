class UI{
    static changeSymbol(){
        outputFirst.textContent = baseCurrency.value;
        outputSecond.textContent = secondCurrency.value;
    }
    
    static changeResult(value){
        result.value = value.toFixed(2);
    }
}