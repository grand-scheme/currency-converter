import $ from 'jquery';
import 'bootstrap';
import '../assets/css/styles.css';

$(document).ready(function() {
  $("#converter-input").submit(function(e) {
    e.preventDefault();
    let userUSD = parseInt($("#usd-input").val());

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      } else {
        return "error";
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      console.log(response);
      console.log(userUSD);
      console.log(response.conversion_rates.AUD);
      console.log(response.conversion_rates.CAD);
      console.log(response.conversion_rates.NZD);
      console.log(response.conversion_rates.BSD);
      console.log(response.conversion_rates.HKD);
    }
  });
});