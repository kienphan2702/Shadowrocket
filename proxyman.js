var objc = JSON.parse($response.body);
      
    objc = 
{
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1530173879,
    "app_item_id": 1530173879,
    "bundle_id": "com.nhatnguyen.drumtify",
    "application_version": "2",
    "download_id": 501469913732862636,
    "version_external_identifier": 852277609,
    "receipt_creation_date": "2023-06-18 16:55:53 Etc/GMT",
    "receipt_creation_date_ms": "1687107353000",
    "receipt_creation_date_pst": "2023-06-18 09:55:53 America/Los_Angeles",
    "request_date": "2023-06-18 16:56:22 Etc/GMT",
    "request_date_ms": "1687107382746",
    "request_date_pst": "2023-06-18 09:56:22 America/Los_Angeles",
    "original_purchase_date": "2022-06-08 09:37:36 Etc/GMT",
    "original_purchase_date_ms": "1654681056000",
    "original_purchase_date_pst": "2022-06-08 02:37:36 America/Los_Angeles",
    "original_application_version": "2",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "com.nhatnguyen.drumtify.removeads",
        "transaction_id": "730000892722560",
        "original_transaction_id": "730000892722560",
        "purchase_date": "2022-06-08 10:11:17 Etc/GMT",
        "purchase_date_ms": "1654683077000",
        "purchase_date_pst": "2022-06-08 03:11:17 America/Los_Angeles",
        "original_purchase_date": "2022-06-08 10:11:17 Etc/GMT",
        "original_purchase_date_ms": "1654683077000",
        "original_purchase_date_pst": "2022-06-08 03:11:17 America/Los_Angeles",
        "is_trial_period": "false",
        "in_app_ownership_type": "PURCHASED"
      }
    ]
  },
  "environment": "Production",
  "status": 0
}

$done({body : JSON.stringify(objc)});
