


  function initialState () {
      navigator.serviceWorker.ready.then(swRegistration=>{
        swRegistration.pushManager.getSubscription().then(sub=>{
          console.log('subscription', sub);
        }).catch(err=>{
          console.log('fail to get subscription', err);
        });
      });
  }
function str2ab(str) {
  var buf = new ArrayBuffer(str.length); // 2 bytes for each char
  var bufView = new Uint8Array(buf);
  for (var i=0, strLen=str.length; i<strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

  function register () {
    navigator.serviceWorker.ready.then(swRegistration=>{
      return swRegistration.pushManager.subscribe(
      {
        userVisibleOnly:true,
        applicationServerKey: str2ab('BDN-YHh2luI54FkVRVoNx2suIfdnPSb6rn-JYKZTSKFbDsBrz6O-n_XCO4MrvdSsRcp_CAymSXkQ45WmANbZlr4')
      });
    }).then(subscription=>{
      console.log(subscription);
      console.log(JSON.stringify(subscription));
    }).catch(error=>{

    });
  }



(()=>{
  console.log('button');
  let button = document.querySelector('button');

  button.addEventListener('click',function(){
    register();
  });

})();




  // Check that service workers are supported, if so, progressively
  // enhance and add push messaging support, otherwise continue without it.
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(initialState);
  } else {
    console.log.log('Service workers aren\'t supported in this browser.');
  }




