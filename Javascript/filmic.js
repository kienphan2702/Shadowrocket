/*************************************
APP Crack：Filmic Pro
Phien Ban: 7.5.1
Links: https://apps.apple.com/vn/app/filmic-pro-video-camera/id436577167?l=vi

**************************************

[rewrite_local]
^https:\/\/filmicpro\.oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify) url script-response-body https://gitlab.com/ohoang7/ohb/-/raw/main/Script/filmicpro.js

[mitm]
hostname = filmicpro.oracle.bendingspoonsapps.com

*************************************/


var ohoang7 = JSON.parse($response.body);

ohoang7["me"]["active_subscriptions_ids"] = ["com.cinegenix.filmic.pro.1y_t80_1w_bis"];
ohoang7["me"]["active_bundle_subscriptions"] = [{
   "expiry" : "2099-09-09T09:09:09+00:00",
   "product_id" : "com.cinegenix.filmic.pro.1y_t80_1w_bis",
   "features" : ["unlock"]
  }];
ohoang7["settings"]["__identity__"]["expiration"] = "2099-09-09T09:09:09.09+00:00";

$done({body : JSON.stringify(ohoang7)});
