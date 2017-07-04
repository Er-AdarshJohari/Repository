/*

YummyThings app
index.js
Created by @sauliuz // www.popularowl.com
@16.04.2013

*/


var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        
        // Callback function for dismissed alert
        function alertDismissed() {
            // do something
        }
        
        navigator.notification.alert(
                 'DOM and JavaScrip have loaded!!',  // message
                 alertDismissed,                     // callback
                 'YummyThings Hello World',                // title
                                     'I know');      // buttonName
     
        
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
        
        console.log('Received Event: ' + id);
        
        
    }
};
