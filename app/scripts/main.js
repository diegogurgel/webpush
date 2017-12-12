function checkSubscription () {
    navigator.serviceWorker.ready.then(swRegistration=>{
      swRegistration.pushManager.getSubscription().then(sub=>{
        if(!sub) register()
      }).catch(err=>{
        console.log('fail to get subscription', err);
      });
    });
}
function register () {
  navigator.serviceWorker.ready.then(swRegistration=>{
    return swRegistration.pushManager.subscribe(
    {
      userVisibleOnly:true,
    });
  }).then(subscription=>{
    saveSubscription(subscription);
  }).catch(error=>{
    console.log(error)
  });
}
function saveSubscription(subscription) {
  firebase.database()
    .ref('subscriptions/' + Date.now())
    .set(subscription.toJSON())
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

( _ => {
  let button = document.querySelector('button');
  button.addEventListener('click', checkSubscription);

})();

//PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
} else {
  console.log.log('Service workers aren\'t supported in this browser.');
}




