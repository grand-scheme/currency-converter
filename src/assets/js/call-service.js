export default class CallService {
  static makeCall() {
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    request.onload = function() {
      if (this.status === 200) {
        const apiOutput = JSON.parse(this.responseText);
        if (Errors.noApiErrors(apiOutput) === true) {
          GetConversion.getConversion(userCurrency, userUSD, apiOutput);
        } else {
          Errors.noApiErrors(apiOutput);
        }
      } else {
        $("#error-output").html(`<li>The HTTP status returned as: ${this.status}</li>`);
      }
    };
    request.open("GET", url, true);
    request.send();
  }
}