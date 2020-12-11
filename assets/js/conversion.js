export default class GetConversion {
  static getCurrency(userCurrency) {
    let dollars = userCurrency.toUpperCase();
    if (dollars === ("AUSTRALIAN DOLLARS" || "AUD")) {
      dollars = "AUD";
    } else if (dollars === ("BAHAMIAN DOLLARS" || "BSD")) {
      dollars = "BSD";
    } else if (dollars === ("CANADIAN DOLLARS" || "CAD")) {
      dollars = "CAD";
    } else if (dollars === ("HONG KONG DOLLARS" || "HKD")) {
      dollars = "HKD";
    } else if (dollars === ("NEW ZEALAND DOLLARS" || "NZD")) {
      dollars = "NZD";
    } else {
      dollars = null;
    }
    return dollars;
  }

  static getElements(response, userCurrency) {
    return response.conversion_rates[userCurrency];
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