import $ from 'jquery';
import 'bootstrap';
import '../assets/css/styles.css';
import Response from './../assets/js/conversion.js';

$(document).ready(function() {
  $("#converter-input").submit(function(e) {
    e.preventDefault();
    let userUSD = parseInt($("#usd-input").val());
    let search = $("#currency-select").val();

    // api call
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        conversion(response, search, userUSD);
      } else {
        return "error";
      }
    };

    request.open("GET", url, true);
    request.send();
  });
});

function math(a, b) {
  return (a * b).toFixed(2);
}

function conversion(apiResult, conversionCurrency, initialCurrency) {
  let currencyObject = apiResult.conversion_rates;
  let result = "";
  if (conversionCurrency === "Australian Dollars") {
    result = math(initialCurrency, currencyObject.AUD);
    console.log(result);
  } else if (conversionCurrency === "Bahamian Dollars") {
    result = math(initialCurrency, currencyObject.BSD);
    console.log(result);
  } else if (conversionCurrency === "Canadian Dollars") {
    result = math(initialCurrency, currencyObject.CAD);
    console.log(result);
  } else if (conversionCurrency === "Hong Kong Dollars") {
    result = math(initialCurrency, currencyObject.HKD);
    console.log(result);
  } else if (conversionCurrency === "New Zealand Dollars") {
    result = math(initialCurrency, currencyObject.NZD);
    console.log(result);
  } else {
    console.log("different currency");
  }
}