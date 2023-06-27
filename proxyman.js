var objc = JSON.parse($response.body);
      
    objc = 
{
  "status": "Success",
  "validDiagnosticsIds": [],
  "throttledDiagnosticsIds": [],
  "correlationId": "0821d756-29ae-4ac4-876f-3ddadb9d60fc"
}

$done({body : JSON.stringify(objc)});
