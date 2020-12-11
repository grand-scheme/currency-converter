// BUSINESS LOGIC: FUNCTION IMPORTS
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import Errors from './assets/js/error-handling.js';
import CallService from './assets/js/call-service.js';

function clearFields() {
  $("#error-output").val("");
  $("#content-success").hide();
  $("#content-error").hide();
}

function uiConversion(userCurrency, userUSD) {
  let checkDollars = userCurrency.toUpperCase();
  if (checkDollars === "AUD" || checkDollars === "BSD" || checkDollars === "CAD" || checkDollars === "HKD" || checkDollars === "NZD") {
    $("#currency").text(checkDollars);
  } else { $("#currency").text(userCurrency); }
  $("#usd-output").text(userUSD.toFixed(2));
  $("#content-success").show();
}

$(document).ready(function() {
  $("#converter-input").submit(function(e) {
    e.preventDefault();
    let userUSD = parseFloat($("#usd-input").val());
    let userCurrency = $("#currency-select").val();
    
    clearFields();
    
    Errors.noMoneyErrors(userUSD);
    Errors.noDollarErrors(userCurrency);
    if (Errors.noDollarErrors(userCurrency) === true && Errors.noMoneyErrors(userUSD) == true) {
      CallService.makeCall(userCurrency, userUSD);
      uiConversion(userCurrency, userUSD);
    }
  });
});