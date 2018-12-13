
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


        $('#mensaButton').click(openMensaPage);
        $('#lsfButton').click(openLSFPage);
        $('#weatherButton').click(openWeatherPage);
        $('#planButton').click(openPlan);
        $('#aboutButton').click(openAboutPage);
        $('#lsfSelectorButton').click(openlsfSelector);

        $('#thisWeekButton').click(openThisWeekMenu);
        $('#nextWeekButton').click(openNextWeekMenu);
        $('#afterNextWeekButton').click(openAfterNextWeekMenu);

        $("#mainPage").live("swiperight", function (event) {
            $("#mainPanel").panel("open");
        });


    } 

    function openlsfSelector() {
        window.location.href = "lsfSelector.html";
    }

    function openAboutPage() {
        window.location.href = "about.html";
    }

    function openMensaPage() {
        window.location.href = "mensa.html";
    }

    function openLSFPage() {
        let lsf = cordova.InAppBrowser.open('https://campus.hs-worms.de/apps/WhatsUp/de/index.html', '_blank', 'location=no', 'zoom=no', 'closebuttoncaption=My Button Name');
        lsf.addEventListener('exit', function (event) {
            window.location.href = "index.html";
        });
    }

    function openPlan() {
        window.location.href = "map.html";
    }

    function openWeatherPage() {
        window.location.href = "weather.html";
    }

    function openThisWeekMenu() {
        let menu = cordova.InAppBrowser.open('https://www.studierendenwerk-vorderpfalz.de/home/speiseplaene/speiseplaene/worms-mensa-wochenplan-aktuell.html?&L', '_blank', 'location=no', 'zoom=no', 'closebuttoncaption=My Button Name');
        menu.addEventListener('exit', function (event) {
            window.location.href = "mensa.html";
        });
    }

    function openNextWeekMenu() {
        let menu = cordova.InAppBrowser.open('https://www.studierendenwerk-vorderpfalz.de/home/speiseplaene/speiseplaene/worms-mensa-wochenplan-naechste-woche.html', '_blank', 'location=no', 'zoom=no', 'closebuttoncaption=My Button Name');
        menu.addEventListener('exit', function (event) {
            window.location.href = "mensa.html";
        });
    }

    function openAfterNextWeekMenu() {
        let menu = cordova.InAppBrowser.open('https://www.studierendenwerk-vorderpfalz.de/home/speiseplaene/speiseplaene/worms-mensa-wochenplan-uebernaechste-woche.html', '_blank', 'location=no', 'zoom=no', 'closebuttoncaption=My Button Name');
        menu.addEventListener('exit', function (event) {
            window.location.href = "mensa.html";
        });
    }

    function onPause() {

    }

    function onResume() {

    }

} )();