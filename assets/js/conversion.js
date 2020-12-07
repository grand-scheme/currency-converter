export default class Response {
  static getElements(response, searchInput) {
    let currencyObject = response.conversion_rates;
    let result = "";

    if (searchInput === "Australian Dollars") {
      result = currencyObject.AUD;
    } else if (searchInput === "Bahamian Dollars") {
      result = currencyObject.BSD;
    } else if (searchInput === "Canadian Dollars") {
      result = currencyObject.CAD;
    } else if (searchInput === "Hong Kong Dollars") {
      result = currencyObject.HKD;
    } else if (searchInput === "New Zealand Dollars") {
      result = currencyObject.NZD;
    } else {
      result = ("unsupported currency");
    }
    return result;
  }
  static math(a, b) {
    if (isNaN(a)) {
      return a;
    } else if (isNaN(b)) {
      return "Did you input your currency in numbers?";
    } else {
      return (a * b).toFixed(2);
    }
  }
}