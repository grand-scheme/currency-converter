import $ from 'jquery';
import 'bootstrap';
import '../assets/css/styles.css';
import Response from './../assets/js/conversion.js';
import Errors from '../assets/js/error-handling.js';

function clearFields() {
  $("#error-output").val("");
  $("#content-success").hide();
  $("#content-error").hide();
}

function buildConversion(userCurrency, userUSD, apiOutput) {
  let currencyChosen = Response.getCurrency(userCurrency);
  let selectedExchangeRate = Response.getElements(apiOutput, currencyChosen);
  let currencyAfterConversion = Response.math(selectedExchangeRate, userUSD);
  $("#usd-output").text(userUSD.toFixed(2));
  $("#conversion-output").text(currencyAfterConversion);
  let checkDollars = userCurrency.toUpperCase()
  if (checkDollars === "AUD" || checkDollars === "BSD" || checkDollars === "CAD" || checkDollars === "HKD" || checkDollars === "NZD") {
    $("#currency").text(checkDollars);
  } else {  
    $("#currency").text(userCurrency);
  }
  $("#content-success").show();
}

function makeCall(userUSD, userCurrency) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let apiOutput = JSON.parse(this.responseText);
      Errors.getApiErrors(apiOutput);
      if (Errors.getApiErrors(apiOutput) === true) {
        buildConversion(userCurrency, userUSD, apiOutput);
      }
    }
  };
  request.open("GET", url, true);
  request.send();
}

$(document).ready(function() {
  $("#converter-input").submit(function(e) {
    e.preventDefault();
    let userUSD = parseFloat($("#usd-input").val());
    let userCurrency = $("#currency-select").val();
    console.log(userCurrency);
    clearFields();
    Errors.getMoneyErrors(userUSD);
    Errors.getDollarErrors(userCurrency);
    if (Errors.getDollarErrors(userCurrency) === true && Errors.getMoneyErrors(userUSD) == true) {
      makeCall(userUSD, userCurrency);
    }
  });
});