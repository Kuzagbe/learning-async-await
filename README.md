# Currency Converter

This repository contains a simple Node.js application that allows you to convert currency from one currency code to another. It utilizes two external APIs to fetch exchange rates and information about countries using the target currency.

## Usage

To use this currency converter, you need to have Node.js installed on your machine. You can follow the installation guide [here](https://nodejs.org/en/download/).

1. Clone the repository to your local machine:


2. Change into the project directory:


3. Install the required dependencies using npm:


4. Replace the placeholder access key in the `getExchangeRate` function with your own API key. You can obtain a key by signing up at [Fixer.io](https://fixer.io/).

5. Run the conversion by executing the following command, replacing the currency codes and amount with your desired values:


## Functions

This application consists of three main functions:

1. **getExchangeRate**: This function fetches the exchange rate between two currencies using the Fixer.io API.

2. **getCountries**: This function retrieves a list of countries that use a specific currency code using the Restcountries API.

3. **convertCurrency**: This function calculates the converted amount based on the provided currencies and amount. It also lists the countries where the converted currency is accepted.

## Example Usage

Here's an example of how to use the `convertCurrency` function to convert 20 USD to CAD:

```javascript
convertCurrency('USD', 'CAD', 20)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error.message);
    });
