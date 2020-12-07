import $ from 'jquery';
import 'bootstrap';
import '../assets/css/styles.css';
import Response from './../assets/js/conversion.js';

$(document).ready(function() {
  $("#converter-input").submit(function(e) {
    e.preventDefault();
    let userUSD = parseInt($("#usd-input").val());

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        Response.getElements(userUSD, response);
      } else {
        return "error";
      }
    };

    request.open("GET", url, true);
    request.send();
  });
});