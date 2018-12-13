
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
    window.requestFileSystem(type, size, successCallback, opt_errorCallback)

    // Entry point
    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        // Cordova is Ready, GO PRO

        $('#currentEventsButton').click(openCurrentEventsButtonPage);
        $('#lsfButton').click(openLSFPage);
        $('#failOutEventsButton').click(openFailOutEventsButtonPage);
        

     } 

    function openCurrentEventsButtonPage() {
        window.location.href = "currentEvents.html";
    }

    function openFailOutEventsButtonPage() {
        window.location.href = "failoutEvents.html";
    }

    function openLSFPage() {
        let lsf = cordova.InAppBrowser.open('https://campus.hs-worms.de/apps/WhatsUp/de/index.html', '_blank', 'location=no', 'zoom=no', 'closebuttoncaption=My Button Name');
        lsf.addEventListener('exit', function (event) {
            window.location.href = "lsfSelector.html";
        });
    }

    function onPause() {

    }

    function onResume() {

    }

} )();