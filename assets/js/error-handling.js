import $ from 'jquery';
import 'bootstrap';
import '../css/styles.css';

export default class Errors {
  static noMoneyErrors(usd) {
    if (isNaN(usd)) {
      $("#error-output-usd").html("<li>Did you input your currency in numbers?</li>");
      $("#content-error").show();
    } else {
      $("#error-output-usd").html("");
      return true;
    }
  }
  
  static noDollarErrors(inputDollars) {
    let dollars = inputDollars.toUpperCase();
    if (dollars === "") {
      $("#error-output-dollars").html("<li>You need to select a currency.</li>");
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
      $("#error-output-dollars").html("<li>This currency is not supported, or does not exist.</li>");
      $("#content-error").show();
    } else {
      $("#error-output-dollars").html("");
      return true;
    }
  }
  
  static noApiErrors(api) {
    if (api.result === "error") {
      $("#content-error").show();
      if (api["error-type"] === "unsupported-code") {
        $("#error-output").html("<li>This currency code is not supported.");
      } else if (api["error-type"] === "base-code-only-on-pro") {
        $("#error-output").html("<li>The specified currency code is not available through this application.</li>");
      } else if (api["error-type"] === "malformed-request") {
        $("#error-output").html("<li>Sorry! There was an error in forming this request.</li>");
      } else if (api["error-type"] === "invalid-key") {
        $("#error-output").html("<li>The API key is invalid or expired. Sorry!</li>");
      } else if (api["error-type"] === "quota-reached") {
        $("#error-output").html("<li>Quota of queries reached. Sorry! Please try again later.</li>");
      } else if (api["error-type"] === "not-available-on-plan") {
        $("#error-output").html("<li>This request not valid via this application.</li>");
      } else {
        $("#error-output").html("<li>The error was not defined.</li>");
      }
    } else if (api.result === "success") {
      $("#error-output").text("");
      return true;
    }
    else {
      $("#content-error").show();
      $("#error-output").html("<li>Something broke along the way.</li>");
    }
  }
}