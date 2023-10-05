let obj = JSON.parse($response.body);
let url = $request.url;
const user = "users/info";
if(url.indexOf(user) != -1)
{
"vipExpire": "09.09.9999";
"isVIP": true;
}
$done({body: JSON.stringify(obj)});
