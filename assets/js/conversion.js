export default class GetConversion {
  static getConversion(userCurrency, userUSD, apiOutput) {
    let currencyChosen = GetConversion.getCurrency(userCurrency);
    let selectedExchangeRate = GetConversion.getElements(apiOutput, currencyChosen);
    let currencyAfterConversion = GetConversion.math(selectedExchangeRate, userUSD);
    $("#conversion-output").text(currencyAfterConversion);
  }
  
  static getCurrency(userCurrency) {
    let dollars = userCurrency.toUpperCase();
    if (dollars === "AUSTRALIAN DOLLARS" || dollars === "AUD") {
      dollars = "AUD";
    } else if (dollars === "BAHAMIAN DOLLARS" || dollars === "BSD") {
      dollars = "BSD";
    } else if (dollars === "CANADIAN DOLLARS" || dollars === "CAD") {
      dollars = "CAD";
    } else if (dollars === "HONG KONG DOLLARS" || dollars === "HKD") {
      dollars = "HKD";
    } else if (dollars === "NEW ZEALAND DOLLARS" || dollars === "NZD") {
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
    if (isNaN(userUSD)) {
      return "Did you input your currency in numbers?";
    } else {
      return (selectedExchangeRate * userUSD).toFixed(2) ;
    }
  }

  
}