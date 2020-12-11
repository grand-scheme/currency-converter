import $ from 'jquery';
import Errors from './error-handling.js';
import GetConversion from './conversion.js';

export default class CallService {
  static makeCall(userCurrency, userUSD) {
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    request.onload = function() {
      if (this.status === 200) {
        const apiOutput = JSON.parse(this.responseText);
        if (Errors.noApiErrors(apiOutput) === true) {
          // return apiOutput;
          GetConversion.getConversion(userCurrency, userUSD, apiOutput);
        } 
      } else {
        $("#error-output").html(`<li>Sorry! There was an error with the HTTP status  ${this.status}</li>`);
      } 
    };
    request.open("GET", url, true);
    request.send();
  }
}