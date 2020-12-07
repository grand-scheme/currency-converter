import $ from 'jquery';
import 'bootstrap';
import '../assets/css/styles.css';
import Response from './../assets/js/conversion.js';
import Errors from '../assets/js/error-handling.js';

function clearFields() {
  $("#currency-select").val("");
  $("#error-output-dollars").val("");
  $("#error-output-usd").val("");
  $("#error-output").val("");
  $("#content-success").hide();
  $("#content-error").hide();
}

function buildConversion(search, userUSD, apiOutput) {
  let currencyChosen = Response.getCurrency(search);
  let outputQ = Response.getElements(apiOutput, currencyChosen);
  let outputZ = Response.math(outputQ, userUSD);
  $("#usd-output").text(userUSD.toFixed(2));
  $("#conversion-output").text(outputZ);
  $("#currency").text(search);
  $("#content-success").show();
}

function makeCall(userUSD, search) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let apiOutput = JSON.parse(this.responseText);
      Errors.getApiErrors(apiOutput);
      if (Errors.getApiErrors(apiOutput) === true) {
        buildConversion(search, userUSD, apiOutput);
      }
    }
  };
  request.open("GET", url, true);
  request.send();
}

$(document).ready(function() {
  $("#converter-input").submit(function(e) {
    e.preventDefault();
    let userUSD = parseInt($("#usd-input").val());
    let search = $("#currency-select").val();
    clearFields();
    Errors.getDollarErrors(search);
    Errors.getMoneyErrors(userUSD);
    if (Errors.getDollarErrors(search) === true && Errors.getMoneyErrors(userUSD) == true) {
      makeCall(userUSD, search);
    } else {
      console.log("failed error check");
    }
  });
});