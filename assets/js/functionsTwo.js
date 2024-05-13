// Konstant for antal decimaler
const DECIMALS = 2;

// Funktion der modtager input og kalder makeExchange
function gatherInputData() {
    const myEuroRate = parseFloat(document.getElementById('euroRate').value);
    const myDollarRate = parseFloat(document.getElementById('dollarRate').value);
    const myDanishAmount = parseFloat(document.getElementById('danishAmount').value);
    makeExchange(myEuroRate, myDollarRate, myDanishAmount);
}

// Funktion der beregner vekselresultatet
function calculateExchange(myDanishAmount, exchangeRate) {
    return myDanishAmount * exchangeRate;
}

// Funktion der kalder calculateExchange to gange med forskellige vekselrater
function makeExchange(myEuroRate, myDollarRate, myDanishAmount) {
    let myDollars = calculateExchange(myDanishAmount, myDollarRate);
    let myEuros = calculateExchange(myDanishAmount, myEuroRate);
    showResult(myEuros, myDollars, myDanishAmount);
}

// Funktion der viser resultatet
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount.toFixed(DECIMALS) + ' danske kroner bliver til: ' +
        myEuroResult.toFixed(DECIMALS) + ' euro og ' +
        myDollarResult.toFixed(DECIMALS) + ' dollars';
}

// Dom elementer jeg har brug for
// knap til udregning
const calculateButton = document.getElementById('calculateButt');

// Lytter på klik på knappen og kalder gatherInputData
calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    gatherInputData();
});