var body = $response.body;
var objc = JSON.parse(body);

objc =
{
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1551292695,
    "app_item_id": 1551292695,
    "bundle_id": "com.nsproxy.NSProxy-iOS",
    "application_version": "20101",
    "download_id": 502245857697498585,
    "version_external_identifier": 857739887,
    "receipt_creation_date": "2023-06-18 00:31:30 Etc/GMT",
    "receipt_creation_date_ms": "1687048290000",
    "receipt_creation_date_pst": "2023-06-17 17:31:30 America/Los_Angeles",
    "request_date": "2023-06-18 00:31:31 Etc/GMT",
    "request_date_ms": "1687048291760",
    "request_date_pst": "2023-06-17 17:31:31 America/Los_Angeles",
    "original_purchase_date": "2023-03-09 11:23:01 Etc/GMT",
    "original_purchase_date_ms": "1678360981000",
    "original_purchase_date_pst": "2023-03-09 03:23:01 America/Los_Angeles",
    "original_application_version": "10901",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "com.nsproxy.NSProxy_iOS.iap.monthly",
        "transaction_id": "730001142832804",
        "original_transaction_id": "730001142832804",
        "purchase_date": "2023-05-13 21:47:05 Etc/GMT",
        "purchase_date_ms": "1684014425000",
        "purchase_date_pst": "2023-05-13 14:47:05 America/Los_Angeles",
        "original_purchase_date": "2023-05-13 21:47:07 Etc/GMT",
        "original_purchase_date_ms": "1684014427000",
        "original_purchase_date_pst": "2023-05-13 14:47:07 America/Los_Angeles",
        "expires_date": "2999-06-13 21:47:05 Etc/GMT",
        "expires_date_ms": "1686692825000",
        "expires_date_pst": "2023-06-13 14:47:05 America/Los_Angeles",
        "web_order_line_item_id": "730000524992675",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false",
        "cancellation_reason": "1",
        "in_app_ownership_type": "PURCHASED"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "com.nsproxy.NSProxy_iOS.iap.monthly",
      "transaction_id": "730001142832804",
      "original_transaction_id": "730001142832804",
      "purchase_date": "2023-05-13 21:47:05 Etc/GMT",
      "purchase_date_ms": "1684014425000",
      "purchase_date_pst": "2023-05-13 14:47:05 America/Los_Angeles",
      "original_purchase_date": "2023-05-13 21:47:07 Etc/GMT",
      "original_purchase_date_ms": "1684014427000",
      "original_purchase_date_pst": "2023-05-13 14:47:07 America/Los_Angeles",
      "expires_date": "2999-06-13 21:47:05 Etc/GMT",
      "expires_date_ms": "1686692825000",
      "expires_date_pst": "2999-06-13 14:47:05 America/Los_Angeles",
      "web_order_line_item_id": "730000524992675",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "cancellation_reason": "0",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20733321"
    }
  ],
  "latest_receipt": "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",
  "pending_renewal_info": [
    {
      "expiration_intent": "0",
      "auto_renew_product_id": "com.nsproxy.NSProxy_iOS.iap.monthly",
      "is_in_billing_retry_period": "0",
      "product_id": "com.nsproxy.NSProxy_iOS.iap.monthly",
      "original_transaction_id": "730001142832804",
      "auto_renew_status": "0"
    }
  ],
  "status": 1
}

body = JSON.stringify(objc);
$done({ 
    body 
});
