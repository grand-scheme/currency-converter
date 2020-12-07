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
        const apiResponse = JSON.parse(this.responseText);
        let outputQ = Response.getElements(apiResponse, search);
        let outputZ = Response.math(outputQ, userUSD);
        alert(outputZ);
      } else {
        return "error";
      }
    };

    request.open("GET", url, true);
    request.send();
  });
});

