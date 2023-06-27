var body = $response.body;
var objc = JSON.parse(body);

objc =
{
  "status": "Success",
  "validDiagnosticsIds": [],
  "throttledDiagnosticsIds": [],
  "correlationId": "0821d756-29ae-4ac4-876f-3ddadb9d60fc"
}

body = JSON.stringify(objc);
$done({ 
    body 
});
