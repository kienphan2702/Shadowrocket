var body = $response.body;
var objc = JSON.parse(body);

objc =
{
  "account": {
    "account_id": 3744771,
    "account_auth_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNzQ0NzcxIiwiaXNzIjoiU29jaWFsSHVlIn0.g9XnsoBFJC0gZ3w86plHHPAvz6yYeTrbazViTCTRuFk",
    "subscription": true,
    "subscription_end": "2099-09-09T23:40:59.000000Z"
  },
  "Action": {
    "ActionType": "toast",
    "ActionMessage": "You are now subscribed until Jul 8, 2099"
  }
}

body = JSON.stringify(objc);
$done({ 
    body 
});