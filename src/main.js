import $ from 'jquery';
import 'bootstrap';
import '../assets/css/styles.css';
import Response from './../assets/js/conversion.js';

$(document).ready(function() {
  $("#converter-input").submit(function(e) {
    e.preventDefault();
    let userUSD = parseInt($("#usd-input").val());
    let search = $("#currency-select").val();
    $("#currency-select").val("");
    
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const apiResponse = JSON.parse(this.responseText);
        if (apiResponse.result === "success") {
          let outputQ = Response.getElements(apiResponse, search);
          let outputZ = Response.math(outputQ, userUSD);
          $("#usd-output").text(userUSD.toFixed(2));
          $("#conversion-output").text(outputZ);
          $("#currency").text(search);

        
        } else if (apiResponse["error-type"] == "unsupported-code") {
          $("#error-output").text("This currency code is not supported.");
        } else if (apiResponse["error-type"] === "base-code-only-on-pro") {
          $("#error-output").text("The specified currency code is not available through this application.");
        } else if (apiResponse["error-type"] === "malformed-request") {
          $("#error-output").text("Sorry! There was an error in forming this request.");
        } else if (apiResponse["error-type"] === "invalid-key") {
          $("#error-output").text("The API key is invalid or expired. Sorry!");
        } else if (apiResponse["error-type"] === "quota-reached") {
          $("#error-output").text("Quota of queries reached. Sorry! Please try again later.");
        } else if (apiResponse["error-type"] === "not-available-on-plan") {
          $("#error-output").text("This request not valid via this application.");
        } else {
          $("#error-output").text("Something broke along the way.");
          $("#error-output").text(apiResponse["error-type"]);
          $("#error-output").text(apiResponse.result);
        }
      } else {
        return "error";
      }
    };

    request.open("GET", url, true);
    request.send();
  });
});