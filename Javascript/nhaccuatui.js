let obj = JSON.parse($response.body);
let url = $request.url;
const user = "users/info";
if(url.indexOf(user) != -1)
{
obj.data.vipExpire= "09.09.2099";
obj.data.isVIP= true;
}
$done({body: JSON.stringify(obj)});
