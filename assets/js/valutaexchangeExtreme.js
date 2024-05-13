// Konstant for antal decimaler
const DECIMALS = 2;

// Funktion der modtager input og kalder calculateExchange
function gatherInputData() {
    const myEuroRate = parseFloat(document.getElementById('euroRate').value);
    const myDollarRate = parseFloat(document.getElementById('dollarRate').value);
    const myDanishAmount = parseFloat(document.getElementById('danishAmount').value);
    calculateExchange(myEuroRate, myDollarRate, myDanishAmount);
}

// Funktion der beregner vekselresultatet
function calculateExchange(myEuroRate, myDollarRate, myDanishAmount) {
    const myEuroResult = myDanishAmount / myEuroRate;
    const myDollarResult = myDanishAmount / myDollarRate;
    showResult(myEuroResult, myDollarResult, myDanishAmount);
}

// Funktion der viser resultatet
function showResult(myEuroResult, myDollarResult, myDanishAmount) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount.toFixed(DECIMALS) + ' danske kroner bliver til: ' +
        myEuroResult.toFixed(DECIMALS) + ' euro og ' +
        myDollarResult.toFixed(DECIMALS) + ' dollars';
}

// Find knap i DOM
const calculateButton = document.getElementById('calculateButt');

// Event listener til knappen
calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    gatherInputData();
});
