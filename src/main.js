// BUSINESS LOGIC: FUNCTION IMPORTS
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
// import GetConversion from './../assets/js/conversion.js';
import Errors from '../assets/js/error-handling.js';
import CallService from '../assets/js/call-service.js';

// // BUSINESS LOGIC: API CALL
// function makeCall(userCurrency, userUSD) {
//     let request = new XMLHttpRequest();
//     const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//     request.onload = function() {
//       if (this.status === 200) {
//       let apiOutput = JSON.parse(this.responseText);
//       if (Errors.noApiErrors(apiOutput) === true) {
//         // return apiOutput;
//         GetConversion.getConversion(userCurrency, userUSD, apiOutput);
//       }
//     }
//   };
//   request.open("GET", url, true);
//   request.send();
// }










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




// User Interface
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
      // let apiOutput = makeCall();
      // GetConversion.getConversion(userCurrency, userUSD, apiOutput);
      // console.log
      uiConversion(userCurrency, userUSD);
    }
  });
});