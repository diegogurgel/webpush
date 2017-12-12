const webpush = require('web-push');
const firebase = require('./firebase.config.js')
const FCMKey = require('./config.json').FCM_key

const vapidKeys = webpush.generateVAPIDKeys();
webpush.setGCMAPIKey(FCMKey);
webpush.setVapidDetails(
  'mailto:hi@diegogurgel.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);


const payload = {
  title: 'PUC Contagem',
  message: ':) 🔮',
};

firebase.database().ref('/subscriptions/').once('value').then(function (snapshot) {
  const subscriptions = snapshot.val()
  Object.keys(subscriptions).forEach(key => {
    webpush.sendNotification(subscriptions[key], JSON.stringify(payload))
      .then(data => {
        console.log('success');
      })
      .catch(err => {
        console.log('error')
      });
  })
});



