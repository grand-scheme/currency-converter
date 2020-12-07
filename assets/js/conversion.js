export default class Response {
  static getCurrency(userCurrency) {
    let result = "";
    let dollars = userCurrency.toUpperCase()
    if (dollars === "AUSTRALIAN DOLLARS" || dollars === "AUD") {
      result = "AUD";
    } else if (dollars === "BAHAMIAN DOLLARS" || dollars === "BSD") {
      result = "BSD";
    } else if (dollars === "CANADIAN DOLLARS" || dollars === "CAD") {
      result = "CAD";
    } else if (dollars === "HONG KONG DOLLARS" || dollars === "HKD") {
      result = "HKD";
    } else if (dollars === "NEW ZEALAND DOLLARS" || dollars === "NZD") {
      result = "NZD";
    } else {
      result = null;
    }
    return result;
  }

  static getElements(response, userCurrency) {
    let currencyObject = response.conversion_rates[userCurrency];
    console.log(currencyObject);
    return currencyObject;
  }
  static math(selectedExchangeRate, userUSD) {
    if (isNaN(selectedExchangeRate)) {
      return selectedExchangeRate;
    } else if (isNaN(userUSD)) {
      return "Did you input your currency in numbers?";
    } else {
      return (selectedExchangeRate * userUSD).toFixed(2);
    }
  }
}