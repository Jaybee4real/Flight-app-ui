==========================================================================

 

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 1WkhPH6KueW9suEK989KFMs6G5Ar");

 

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

 

fetch("https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2021-11-01&adults=1&nonStop=false&max=250", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

 

============================================================================

 


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

 

var urlencoded = new URLSearchParams();
urlencoded.append("client_id", "2N6vop40MWsnTMgVqQFQI5Uqt1mlokm5");
urlencoded.append("grant_type", "client_credentials");
urlencoded.append("client_secret", "7yUIWXW7ptUTJKbg");

 

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

 

fetch("https://test.api.amadeus.com/v1/security/oauth2/token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

 

===============================================================================
Sample response From Token API call

 

{
    "type": "amadeusOAuth2Token",
    "username": "oscardybabaphd@gmail.com",
    "application_name": "Test-App",
    "client_id": "2N6vop40MWsnTMgVqQFQI5Uqt1mlokm5",
    "token_type": "Bearer",
    "access_token": "1WkhPH6KueW9suEK989KFMs6G5Ar",
    "expires_in": 1799,
    "state": "approved",
    "scope": ""
}