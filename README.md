## _[ CURRENCY CONVERTER ]_  

### _A calculator to convert US Dollars into selected other world currencies._
### _November 20th, 2020_  

#### Description:

This site uses jQuery and JavaScript objects, as well as an API call, in order to take a user-submitted amount of currency and convert it to a different world currency, based on current market rates.

#### Project Criteria:  

As referenced from the [Epicodus](https://epicodus.com) program's curriculum:  

  > A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. [ ... ] .

  > Users should be able to convert U.S. currency into at least 5 other types of currency.

  > If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.

  > If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)

-------------------------------

#### Project Specs:  

##### conversion.js
**Describe:** = getCurrency() \
**Test:** Converts readable UI description of currency and converts it into its ISO currency code, for use in targeting the corresponding API object key. \
**Code:** ```javascript
let dollars = $(" user input of currency. ")
if (dollars === "{Full name of currency #1}" || dollars === "{ISO code of currency #1}" {
  result = "{ISO code of currency #1}";
} else if (dollars === "{currency #2}") { 
  result = "{ISO code of currency #2}";
} else if { [...] }
return result;``` \
**Expect:** Country currency and corresponding ISO code (Australian Dollar vs AUD) will be paired together; whichever currency matches the user input will have only its ISO returned as a value.

**Describe:** = math(exchangeRate, USD)\
**Test:** Multiplies user-input US Dollars by the targeted exchange rate to receive converted currency value.\
**Code:** ```javascript
(exchangeRate * USD).toFixed(2);```\
**Expect:** Output number should be limited to two decimal places to avoid infinite fragmentation.

##### error-handling.js
**Describe:** = getMoneyErrors(USD)\
**Test:** Ensure input value is a number, let user know how to correct their error.\
**Code:** ```javascript
if (isNaN(usd)) {
$("# Error Output Field").text( "Did you input your currency in numbers?") }
else {
return true;
}```\
**Expect:** Set output for user to see if error; set flag on backend to verify input has passed this test.

**Describe:** = getDollarErrors(input)\
**Test:** Verify that user-chosen currency endpoint is within the scope of this project.\
**Code:** ```javascript
if (input !== {ISO code of currency #1} && !== {name of currency #2} && [...]) {
$("# Error Output Field").text( "That currency is not supported by this program, or is not a currency. ") 
} else {
  return true;
}```\
**Expect:** Set output for user to see if error; set flag on backend to verify input has passed this test.

**Describe:** = getApiErrors(input)\
**Test:** Check status in the returned API object and output the correlating error message, if applicable.\
**Code:** ```javascript
if (input.result === "error") {
if (input["error-type"] === "unsupported-code") {
$("# Error Output Field").text("This currency is not supported");
} [...]
else if (input.result === "success") {
  return true;
}```\
**Expect:** Set output for user to see if error; set flag on backend to verify API object has passed this test.

##### main.js
**Describe:** makeCall();\
**Test:** Only makes API call if user input is formatted correctly.\
**Code:** if (${"Error Test 1"} === true && ${"Error Test 2"} === true) {
  makeCall();
}```\
**Expect:** If both "passed error tests" are set to "true" (true as in passing), the API call is made. 

------------------------------

#### Known Issues / Bugs:    
None currently known.

-------------------------------

#### Setup:  

##### To view locally on your machine:  
1. Find the green **Code** button above the file list on this project's [main GitHub repository page](https://github.com/grand-scheme/currency-converter).
2. Select the button to open a drop-down menu. Select "Open with GitHub Desktop" or, if you do not have this program installed, download the compressed .zip file.
3. Extract the .zip file to your local machine.
4. Directions were accurate as of Nov. 20th, 2020. If GitHub has since changed their protocol, please see [the GitHub help docs](https://docs.github.com/en) for up-to-date information.

##### To clone this project to your machine:  
1. Launch your terminal of choice. 
> The following directions are based on Git Bash for a Windows machine; you may have to adjust terminology based on your local specs.

2. Navigate to the containing directory you would like to clone this project.

3. Input:\
`$ git clone https://github.com/grand-scheme/currency-converter`

4. This will clone the project to a folder called "currency-converter." If you wish to clone it into a directory of a different name, append the new folder name to the end of the string, like so:\
`$ git clone https://github.com/grand-scheme/currency-converter NEW-FOLDER`\
where `NEW-FOLDER` is where you would type the name of the folder you would like to use.  

5. Directions were accurate as of Nov. 20th, 2020. If GitHub has since changed their protocol, please see [the GitHub help docs](https://docs.github.com/en) for up-to-date information.

#### To run this project on your machine:
1. Once you have the project locally stored, navigate to its main directory in your terminal of choice. By default, this is `currency-converter`.

2. Input:\
`$ npm install`\
This should download and install this project's environment within your local copy's directory. 
> **Note**: You will need to have [Node](https://nodejs.org/en/download/) installed on your machine prior to this step.

3. Input:\
`$ npm run start`\
This should both build this project and launch a local instance of this website in your browser of choice.\
>**Note:** If you are viewing this project on a MacOS machine, you may need to edit `line 8` of the file `package.json` and change\
`npm run build & webpack-dev-server`\
to\
`npm run build; webpack-dev-server`

4. Check your browser for this project's containing website.
-------------------------------

#### Technologies Used:  
- Website, CSS, and JavaScript coded in Visual Studio Code.  
- JavaScript testing, breaking, and retesting conducted in [jsconsole](https://jsconsole.com/).  

##### License
- _GNU AGPLv3_  
- Project copyright (c) 2020 **_Shannon Grantski_**  
- Project criteria quoted text copyright (c) 2020 Epicodus, Inc  