import $ from 'jquery';
import 'bootstrap';
import '../assets/css/styles.css';
import Response from './../assets/js/conversion.js';

$(document).ready(function() {
  $("#converter-input").submit(function(e) {
    e.preventDefault();
    let userUSD = parseInt($("#usd-input").val());
    let search = $("#currency-select").val();
    
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const apiResponse = JSON.parse(this.responseText);
        if (apiResponse.result === "success") {
          let outputQ = Response.getElements(apiResponse, search);
          let outputZ = Response.math(outputQ, userUSD);
          console.log(outputZ);
        
        } else if (apiResponse["error-type"] == "unsupported-code") {
          console.log("This currency code is not supported.");
        } else if (apiResponse["error-type"] === "base-code-only-on-pro") {
          console.log("The specified currency code is not available through this application.");
        } else if (apiResponse["error-type"] === "malformed-request") {
          console.log("Sorry! There was an error in forming this request.");
        } else if (apiResponse["error-type"] === "invalid-key") {
          console.log("The API key is invalid or expired. Sorry!");
        } else if (apiResponse["error-type"] === "quota-reached") {
          console.log("Quota of queries reached. Sorry! Please try again later.");
        } else if (apiResponse["error-type"] === "not-available-on-plan") {
          console.log("This request not valid via this application.");
        } else {
          console.log("Something broke along the way.");
          console.log(apiResponse["error-type"]);
          console.log(apiResponse.result);
        }
      } else {
        return "error";
      }
    };

    request.open("GET", url, true);
    request.send();
  });
});