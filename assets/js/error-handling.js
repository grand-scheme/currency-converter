import $ from 'jquery';
import 'bootstrap';
import '../css/styles.css';

export default class Errors {
  static getMoneyErrors(usd) {
    if (isNaN(usd)) {
      $("#error-output-usd").text("Did you input your currency in numbers?");
      $("#content-error").show();
    } else {
      $("#error-output-usd").text("");
      return true;
    }
  }
  
  static getDollarErrors(inputDollars) {
    let dollars = inputDollars.toUpperCase();
    if (dollars === "") {
      $("#error-output-dollars").text("You need to select a currency.");
      $("#content-error").show();
    } else if (
        dollars !== "AUD"
        && dollars !== "BSD"
        && dollars !== "CAD"
        && dollars !== "HKD"
        && dollars !== "NZD" 
        && dollars !== "AUSTRALIAN DOLLARS" 
        && dollars !== "BAHAMIAN DOLLARS" 
        && dollars !== "CANADIAN DOLLARS" 
        && dollars !== "HONG KONG DOLLARS" 
        && dollars !== "NEW ZEALAND DOLLARS"
      ) {
      $("#error-output-dollars").text("This currency is not supported, or does not exist.");
      $("#content-error").show();
    } else {
      $("#error-output-dollars").text("");
      return true;
    }
  }
  
  static getApiErrors(api) {
    if (api.result === "error") {
      if (api["error-type"] === "unsupported-code") {
        $("#error-output").text("This currency code is not supported.");
      } else if (api["error-type"] === "base-code-only-on-pro") {
        $("#error-output").text("The specified currency code is not available through this application.");
      } else if (api["error-type"] === "malformed-request") {
        $("#error-output").text("Sorry! There was an error in forming this request.");
      } else if (api["error-type"] === "invalid-key") {
        $("#error-output").text("The API key is invalid or expired. Sorry!");
      } else if (api["error-type"] === "quota-reached") {
        $("#error-output").text("Quota of queries reached. Sorry! Please try again later.");
      } else if (api["error-type"] === "not-available-on-plan") {
        $("#error-output").text("This request not valid via this application.");
      } else {
        $("#error-output").text("The error was not defined.");
      }
    } else if (api.result === "success") {
      $("#error-output").text("");
      return true;
    }
    else {
      $("#error-output").text("Something broke along the way.");
    }
    $("#content-error").show();
  }
}