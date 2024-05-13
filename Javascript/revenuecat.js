const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);

const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const list = {
	'VSCO': { name: 'membership', id: 'com.circles.fin.premium.yearly' },
	'1Blocker': { name: 'premium', id: 'blocker.ios.subscription.yearly' },
	'Anybox': { name: 'pro', id: 'cc.anybox.Anybox.annual' },
	'Fileball': { name: 'filebox_pro', id: 'com.premium.yearly' },
	'ipTV': { name: 'ipTV +', id: 'iptv_9.99_1y_7d_free' },
	'APTV': { name: 'pro', id: 'com.kimen.aptvpro.lifetime' },
	'Blink': { name: 'pro', id: 'blink_shell_plus_1y_1999' },
        'mizframa': { name: 'premium', id: 'mf_20_lifetime2' },
        'CallRecorder': { name: 'subscriptions', id: 'com.prettyboa.CallRecorder.MonthlySubscription2999' },
	'Locket': { name: 'Gold', id: 'locket_3600_1y' },
	'Currency': { name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.plus' },
	'Forza Football': { name: 'Forza Legend', id: 'com.forzafootball.subscription.discounted_monthly' },
	'IPCams': { name: 'family', id: 'ipcams_pro_plus_yearly' },
	'Widgetsmith': { name: 'Premium', id: 'PremiumAnnualWidget' },
	'World Clock': { name: 'lifetime-unlock', id: 'com.overdesigned.worldclock.removeads1' },
	'Photomator': { name: 'pixelmator_photo_pro_access', id: 'pixelmator_photo_yearly_v1' },
	'StepsApp': { name: 'stepsapp_pedometer_premium_1_year', id: 'app.steps.stepsapp.premium.yearTrial.tier1' },
	'PhotoRoom': { name: 'business', id: 'com.background.business.yearly' },
	'Planny': { name: 'premium', id: 'com.kevinreutter.Sagittarius.PremiumLifetime' },
	'NextMatch': { name: '$rc_lifetime', id: 'nm_199_lifetime' },
	'Splyt': { name: 'Pro', id: 'splyt_plus_3999_1y' },
	'Barcodes': { name: 'Unlimited', id: 'com.barcodesapp.lifetime' },
	'Scanner Pro': { name: 'plus', id: 'com.readdle.Scanner.subscription.year30' },
	'Pandora': { name: '$rc_annual', id: 'com.ziheng.pandora.yearly' },
	'Mojo': { name: 'pro', id: 'video.mojo.pro.yearly' },
	'Color Widget': { name: 'pro', id: 'cw_1999_1y_3d0' },
	'HoursTracker': { name: 'Unlimited', id: 'hourstracker_unlimited_4799_1y_1w0' },
	'Sono': { name: 'Premium', id: 'sono_1y_2w0' }
};
const data = {
	"expires_date": "2099-09-09T07:52:54Z",
	"original_purchase_date": "2002-02-27T07:52:55Z",
	"purchase_date": "2020-02-27T07:52:54Z",
	"request_date": "2020-02-27T07:52:54Z"
};

if (typeof $response == "undefined") {
	delete $request.headers["x-revenuecat-etag"]; // prevent 304 issues
	delete $request.headers["X-RevenueCat-ETag"];
	resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
	obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
	obj.subscriber.entitlement = obj.subscriber.entitlement || {};
	for (const i in list) {
		if (new RegExp(`^${i}`, `i`).test(ua)) {
			obj.subscriber.subscriptions[list[i].id] = data;
			obj.subscriber.entitlements[list[i].name] = JSON.parse(JSON.stringify(data));
			obj.subscriber.entitlements[list[i].name].product_identifier = list[i].id;
			break;
		}
	}
	resp.body = JSON.stringify(obj).replace(/\"expires_date\":\"\w{4}/g, "\"expires_date\":\"9999").replace(/\"period_type\":\"\w+\"/g, "\"period_type\":\"active\"");
}
$done(resp);
