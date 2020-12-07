export default class Response {
  static getElements(input, response) {
    console.log(response);
    console.log(response.conversion_rates.AUD);
    console.log(response.conversion_rates.CAD);
    console.log(response.conversion_rates.NZD);
    console.log(response.conversion_rates.BSD);
    console.log(response.conversion_rates.HKD);
    alert("You have " + (input * response.conversion_rates.HKD) + "Hong Kong Dollars");
  }
}