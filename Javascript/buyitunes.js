/***********************************

> ScriptName        BuyiTunes多合一脚本[墨鱼版]
> Author            @ddgksf2013
> ForHelp           若有屏蔽广告的需求，可公众号后台回复APP名称
> WechatID          墨鱼手记
> TgChannel         https://t.me/ddgksf2021
> Contribute        https://t.me/ddgksf2013_bot
> Feedback          📮 ddgksf2013@163.com 📮
> UpdateTime        2024-01-23
> Suitable          自行观看“# > ”注释内容，解锁是暂时的，购买也不是永久的[订阅、跑路]
> Attention         如需引用请注明出处，谢谢合作！
> Attention         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
> ScriptURL         https://gist.githubusercontent.com/ddgksf2013/9e0f6c7341beea09a31aa309d9d7f502/raw/buyitunes.js

# ========解锁列表======== #
# > 01 OldRoll
https://apps.apple.com/us/app/id1570093460
# > 02 picsewV3.9.4
https://apps.apple.com/us/app/id1208145167
# > 03 proknockout
https://apps.apple.com/us/app/id944665061
# > 04 bear
https://apps.apple.com/us/app/id1016366447
# > 05 proccd
https://apps.apple.com/us/app/id1616113199
# > 06 PicsLeap
https://apps.apple.com/us/app/id1490057568
# > 07 calculator
https://apps.apple.com/us/app/id1458583388
# > 08 intolive
https://apps.apple.com/us/app/id1061859052
# > 09 落格输入法经典版
https://apps.apple.com/cn/app/id1140465593
# > 10 waterminder
https://apps.apple.com/cn/app/id653031147
# > 11 onesec
https://apps.apple.com/cn/app/id1532875441
# > 12 Life月经期助手
https://apps.apple.com/cn/app/id703547387
# > 13 抓包HTTPS
https://apps.apple.com/cn/app/id1522630336
# > 14 Sticker
https://apps.apple.com/us/app/id1267815033


[rewrite_local]

# ～ BuyiTunes@ddgksf2013
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://gist.githubusercontent.com/ddgksf2013/9e0f6c7341beea09a31aa309d9d7f502/raw/buyitunes.js

[mitm]

hostname = buy.itunes.apple.com

***********************************/



var ddgksf2013 = JSON.parse($response.body);

// ========= 动态ID ========= //
var productidmap={
	"default":{"name":"ddgksf2013","product_id":"https://t.me/ddgksf2021","mark":0},
	"com.sugarmo.ScrollClip":{"name":"picsewV3.9.4","product_id":"com.sugarmo.ScrollClip.pro","mark":1},
	"com.zijayrate.analogcam":{"name":"oldroll","product_id":"com.zijayrate.analogcam.vipforever10","mark":0},
	"com.loveyouchenapps.knockout":{"name":"proknockout","product_id":"com.knockout.7daysplus","mark":0},
	"net.shinyfrog.bear-iOS":{"name":"bear","product_id":"net.shinyfrog.bear_iOS.pro_yearly_subscription_bis","mark":0},
	"com.yengshine.proccd":{"name":"proccd","product_id":"com.yengshine.proccd.year","mark":0},
	"com.yumiteam.Kuki.ID":{"name":"PicsLeap","product_id":"com.yumiteam.Kuki.ID.4","mark":1},
	"com.calc.iphone":{"name":"Calculator","product_id":"calc_Unlock_1","mark":0},
	"me.imgbase.intolive":{"name":"intolive","product_id":"me.imgbase.intolive.proSubYearly","mark":0},
	"MVH6DNU2ZP.input":{"name":"logcg","product_id":"com.logcg.loginput","mark":1},
	"com.waterminder.waterminder":{"name":"waterminder","product_id":"waterminder.premiumYearly","mark":0},
	"wtf.riedel.one-sec":{"name":"onesec","product_id":"wtf.riedel.one_sec.pro.annual.individual","mark":0},
	"com.aaaalab.nepacket":{"name":"http","product_id":"com.li.blur.pro.month","mark":0},
	"com.inturnex.Sticker-Maker":{"name":"Sticker","product_id":"com.inturnex.Sticker_Maker.full_access","mark":1},
	"FuYuan.inkDiary":{"name":"Secai","product_id":"FuYuan.inkDiary.YearB.Pro","mark":0},
	"me.imgbase.imgplay":{"name":"imgplay","product_id":"me.imgbase.imgplay.subscriptionYearly","mark":0},
	"com.mediaeditor.video":{"name":"PrettyUp","product_id":"yearautorenew","mark":0},
	"com.kobaltlab.HashPhotos":{"name":"HashPhotos","product_id":"com.kobaltlab.HashPhotos.iap.pro1year","mark":0},
	"com.vitalii.water":{"name":"vitalii","product_id":"com.vitalii.water.sub.premium8","mark":0},
	"livintis.com.wallpapermonster":{"name":"wallpaper","product_id":"wallpaperworld.subscription.yearly.12.notrial","mark":0},
	"me.imgbase.videoday":{"name":"videoday","product_id":"me.imgbase.videoday.profeaturesYearly","mark":0}
}

// ========= 固定部分 ========= //
ddgksf2013.Attention="恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！";
var mapid=ddgksf2013.receipt.bundle_id,mapping=productidmap[mapid]||productidmap.default,inapp={product_id:mapping.product_id,quantity:"1",expires_date:"2099-12-18 23:59:59 Etc/GMT",expires_date_pst:"2099-12-18 23:59:59 America/Los_Angeles",expires_date_ms:"4101292799000",is_in_intro_offer_period:"false",transaction_id:"100000000000000",is_trial_period:"false",original_transaction_id:"100000000000000",purchase_date_ms:"1701705599000",purchase_date:"2023-12-04 23:59:59 Etc/GMT",purchase_date_pst:"2023-12-04 23:59:59 America/Los_Angeles",original_purchase_date:"2023-12-04 23:59:59 Etc/GMT",original_purchase_date_pst:"2023-12-04 23:59:59 America/Los_Angeles",original_purchase_date_ms:"1701705599000",in_app_ownership_type:"PURCHASED",web_order_line_item_id:"100000000000000"},renew={product_id:mapping.product_id,original_transaction_id:"100000000000000",auto_renew_product_id:mapping.product_id,auto_renew_status:"1"};mapping.mark?(delete inapp.expires_date,delete inapp.expires_date_ms,delete inapp.expires_date_pst):(ddgksf2013.latest_receipt_info=[inapp],ddgksf2013.latest_receipt="https://t.me/ddgksf2021",ddgksf2013.pending_renewal_info=[renew]),ddgksf2013.receipt.in_app=[inapp],$done({body:JSON.stringify(ddgksf2013)});