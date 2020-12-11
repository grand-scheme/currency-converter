export default class CallService {
  static makeCall() {
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    request.onload = function() {
      if (this.status === 200) {
        return JSON.parse(this.responseText);
      } else {
        return false;
      } 
    };
    request.open("GET", url, true);
    request.send();
  }
}