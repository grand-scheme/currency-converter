export default class Response {
  static getCurrency(searchInput) {
    let result = "";
    if (searchInput === "Australian Dollars") {
      result = "AUD";
    } else if (searchInput === "Bahamian Dollars") {
      result = "BSD";
    } else if (searchInput === "Canadian Dollars") {
      result = "CAD";
    } else if (searchInput === "Hong Kong Dollars") {
      result = "HKD";
    } else if (searchInput === "New Zealand Dollars") {
      result = "NZD";
    } else {
      result = "XXX";
    }
    return result;
  }
  
  static getElements(response, searchInput) {
    let currencyObject = response.conversion_rates[searchInput];
    console.log(currencyObject);
    return currencyObject;
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