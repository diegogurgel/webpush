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
const pushSubscription = {"endpoint":"https://android.googleapis.com/gcm/send/cDhovWdK_fE:APA91bFHrSk64_ggLvbGbFM…TWke5RMujlhq_1kuMNE0tqu4KKwoHNSzQh_00EJ-OSDMeYTW_-8yPcTo2ejvALWvfuvdjHHjOW","keys":{"p256dh":"BE647Gb-MmXGavNJOisXXmZYAqmSaGP6-buL7-d3X77D1-7dCFY9pir7uzsHdR5wGEi4oc31MBPz7bxWKV7TdFs=","auth":"YYWHk3-SnOsbjh_uI7FBZg=="}}

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
