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
      console.log("different currency");
    }
    return result;
  }
}
