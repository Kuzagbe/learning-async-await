const axios = require('axios');

// API
//Exchange Rtae: http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1
//Countries: https://restcountries.eu/rest/v2/currency/${currencyCode}

// 1st function - hetExchangeRate
const getExhangeRate = async (fromCurrency, toCurrency) =>{
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1');
    
    const rate = response.data.rates;
    const euro = 1/rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];

    if(isNaN(exchangeRate)) {
        throw new Error (`Unable to get currency ${fromCurrency} and ${toCurrency}`)
    }

    return exchangeRate;
};
// 2nd function - getCountries

const getCountries = async (toCurrency) =>{
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${toCurrency}`);

        response.data.map(country => (country.name));
    } catch (error) {
        throw new Error(`unable to get counteries use ${toCurrency}`);
    }
}
// 3rd function - convertCurrencY

const convertCurrency = async (fromCurrency, toCurrency, amount) =>{
    const countries = await getCountries(toCurrency);
    const exchangeRate = await getExhangeRate(fromCurrency, toCurrency);
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;
}

//cell convert currency to get meaniful data
convertCurrency('USD', 'CAD', 20)
    .then((message) => {
        console.log(message);
    }).catch((error) => {
        console.log(error.message);
    })