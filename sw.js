'use strict';

self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  var title = 'Notificação';
  var body = 'Isis acabou de pensar em você';
  var icon = 'images/isis.jpg';
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});
