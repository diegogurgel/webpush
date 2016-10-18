const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setGCMAPIKey('AIzaSyBtQxnoYfCzgt98ZJxJm66z-JwO7c6IEBo');
webpush.setVapidDetails(
  'http://www.sebraemg.com.br',
  'BDN-YHh2luI54FkVRVoNx2suIfdnPSb6rn-JYKZTSKFbDsBrz6O-n_XCO4MrvdSsRcp_CAymSXkQ45WmANbZlr4',
  'DlLMVt8cr-iOzZ9IwD1eAikz1DSNpq7-OPXYPiSix24'
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://android.googleapis.com/gcm/send/ebndi3NXRGs:APA91bFNIKjdaEiIt9LTQCb…ErqAQt70bwU2QSy9LCazZe9pEgmtb10xFEdpdWxkOlw4gsMRm1dIxDRV3l8G2BYuVxU5TyESjm","keys":{"p256dh":"BPAHF3dNst4Opx9f5M67fcxEZ4Kes1AcjproZKLfp0QQ6HIf26yPBYE7igt3fTMnbFNzhAJRlw06AazmBRNnMeU=","auth":"AvONQm7g3V5igMPaqtqzZQ=="}}

    const params = {
        title: 'Test title',
        message: 'Test message',
        icon: '/api/push/icon/' + campaignId, //icon served by my API
        tag: 'message-tag'
    };

webpush.sendNotification(pushSubscription, new Buffer(JSON.stringify(params), 'utf8'))
  .catch(err=>{
    console.log(err);
  });
