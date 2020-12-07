export default class Response {
  static getElements(response) {
    let currencyObject = {
      "dollarAU": response.conversion_rates.AUD,
      "dollarBS": response.conversion_rates.BSD,
      "dollarCA": response.conversion_rates.CAD,
      "dollarHK": response.conversion_rates.HKD,
      "dollarNZ": response.conversion_rates.NZD
    };
    return currencyObject;
  }
}