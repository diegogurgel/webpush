'use strict';

self.addEventListener('push', function(event) {
  let data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.message,
    })
  );
});
