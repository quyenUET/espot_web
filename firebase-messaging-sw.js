importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyA4YwljZD2sRNulpBL9v9aguobtfn9UQgQ",
    authDomain: "espot-dev-46377.firebaseapp.com",
    projectId: "espot-dev-46377",
    storageBucket: "espot-dev-46377.appspot.com",
    messagingSenderId: "1065521294765",
    appId: "1:1065521294765:web:556f3df0f8f37221998524",
    measurementId: "G-ZS74KNSWKD"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});
