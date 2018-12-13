/* mensa.js
Created by: Aleksandr Soloninov (inf3032)
*/

window.setTimeout(function () {

    let date = new Date();
    let monday = [];
    let tuesday = [];
    let wednesday = [];
    let thursday = [];
    let friday = [];


    //alert("Start Ajax");
    $.ajax({
        url: 'https://www.studierendenwerk-vorderpfalz.de/home/speiseplaene/speiseplaene/worms-mensa-wochenplan-aktuell.html?&L',
        success: function (data) {

            var aDiv = $(data).find('tbody').eq(1);

            monday[0] = $(aDiv).find('tr').eq(0);
            tuesday[0] = $(aDiv).find('tr').eq(1);
            wednesday[0] = $(aDiv).find('tr').eq(2);
            thursday[0] = $(aDiv).find('tr').eq(3);
            friday[0] = $(aDiv).find('tr').eq(4);

            for (let i = 1; i < 5; i++) {
                monday[i] = $(monday[0]).find('td').eq(i);
                tuesday[i] = $(tuesday[0]).find('td').eq(i);
                wednesday[i] = $(wednesday[0]).find('td').eq(i);
                thursday[i] = $(thursday[0]).find('td').eq(i);
                friday[i] = $(friday[0]).find('td').eq(i);
            }

            switch (date.getDay()) {
                case 1:
                    // Today
                    $("#essenTitle0").html("Montag");
                    $("#todayOutput").html($(monday[1]).html().slice(75));

                    // SwipeListner for today
                    $("#todayOutput").live("swiperight", function (event) {
                        $("#todayOutput").html($(monday[1]).html().slice(75));
                    });
                    $("#todayOutput").live("swipeleft", function (event) {
                        $("#todayOutput").html($(monday[2]).html().slice(75));
                    });
                    //---------//

                    // Tomorrow
                    $("#essenTitle1").html("Dienstag");
                    $("#tomorrowOutput").html($(tuesday[1]).html().slice(75));
                    // SwipeListner for tomorrow
                    $("#tomorrowOutput").live("swiperight", function (event) {
                        $("#tomorrowOutput").html($(tuesday[1]).html().slice(75));
                    });
                    $("#tomorrowOutput").live("swipeleft", function (event) {
                        $("#tomorrowOutput").html($(tuesday[2]).html().slice(75));
                    });
                    //---------//

                    // AfterTomorrow
                    $("#essenTitle2").html("Mittwoch");
                    $("#dayAfterTomorrowOutput").html($(wednesday[1]).html().slice(75));
                    // SwipeListner for afterTomorrow
                    $("#dayAfterTomorrowOutput").live("swiperight", function (event) {
                        $("#dayAfterTomorrowOutput").html($(wednesday[1]).html().slice(75));
                    });
                    $("#dayAfterTomorrowOutput").live("swipeleft", function (event) {
                        $("#dayAfterTomorrowOutput").html($(wednesday[2]).html().slice(75));
                    })
                    break;

                case 2: 
                    // Today
                    $("#essenTitle0").html("Dienstag");
                    $("#todayOutput").html($(tuesday[1]).html().slice(75));

                    // SwipeListner for today
                    $("#todayOutput").live("swiperight", function (event) {
                        $("#todayOutput").html($(tuesday[1]).html().slice(75));
                    });
                    $("#todayOutput").live("swipeleft", function (event) {
                        $("#todayOutput").html($(tuesday[2]).html().slice(75));
                    });
                    //---------//

                    // Tomorrow
                    $("#essenTitle1").html("Mittwoch");
                    $("#tomorrowOutput").html($(wednesday[1]).html().slice(75));
                    // SwipeListner for tomorrow
                    $("#tomorrowOutput").live("swiperight", function (event) {
                        $("#tomorrowOutput").html($(wednesday[1]).html().slice(75));
                    });
                    $("#tomorrowOutput").live("swipeleft", function (event) {
                        $("#tomorrowOutput").html($(wednesday[2]).html().slice(75));
                    });
                    //---------//

                    // AfterTomorrow
                    $("#essenTitle2").html("Donnerstag");
                    $("#dayAfterTomorrowOutput").html($(thursday[1]).html().slice(75));
                    // SwipeListner for afterTomorrow
                    $("#dayAfterTomorrowOutput").live("swiperight", function (event) {
                        $("#dayAfterTomorrowOutput").html($(thursday[1]).html().slice(75));
                    });
                    $("#dayAfterTomorrowOutput").live("swipeleft", function (event) {
                        $("#dayAfterTomorrowOutput").html($(thursday[2]).html().slice(75));
                    })
                    break;

                case 3: 
                    // Today
                    $("#essenTitle0").html("Mittwoch");
                    $("#todayOutput").html($(wednesday[1]).html().slice(75));

                    // SwipeListner for today
                    $("#todayOutput").live("swiperight", function (event) {
                        $("#todayOutput").html($(wednesday[1]).html().slice(75));
                    });
                    $("#todayOutput").live("swipeleft", function (event) {
                        $("#todayOutput").html($(wednesday[2]).html().slice(75));
                    });
                    //---------//

                    // Tomorrow
                    $("#essenTitle1").html("Donnerstag");
                    $("#tomorrowOutput").html($(thursday[1]).html().slice(75));
                    // SwipeListner for tomorrow
                    $("#tomorrowOutput").live("swiperight", function (event) {
                        $("#tomorrowOutput").html($(thursday[1]).html().slice(75));
                    });
                    $("#tomorrowOutput").live("swipeleft", function (event) {
                        $("#tomorrowOutput").html($(thursday[2]).html().slice(75));
                    });
                    //---------//

                    // AfterTomorrow
                    $("#essenTitle2").html("Freitag");
                    $("#dayAfterTomorrowOutput").html($(friday[1]).html().slice(75));
                    // SwipeListner for afterTomorrow
                    $("#dayAfterTomorrowOutput").live("swiperight", function (event) {
                        $("#dayAfterTomorrowOutput").html($(friday[1]).html().slice(75));
                    });
                    $("#dayAfterTomorrowOutput").live("swipeleft", function (event) {
                        $("#dayAfterTomorrowOutput").html($(friday[2]).html().slice(75));
                    })
                    break;

                case 4: 
                    // Today
                    $("#essenTitle0").html("Donnerstag");
                    $("#todayOutput").html($(thursday[1]).html().slice(75));

                    // SwipeListner for today
                    $("#todayOutput").live("swiperight", function (event) {
                        $("#todayOutput").html($(thursday[1]).html().slice(75));
                    });
                    $("#todayOutput").live("swipeleft", function (event) {
                        $("#todayOutput").html($(thursday[2]).html().slice(75));
                    });
                    //---------//

                    // Tomorrow
                    $("#essenTitle1").html("Freitag");
                    $("#tomorrowOutput").html($(friday[1]).html().slice(75));
                    // SwipeListner for tomorrow
                    $("#tomorrowOutput").live("swiperight", function (event) {
                        $("#tomorrowOutput").html($(friday[1]).html().slice(75));
                    });
                    $("#tomorrowOutput").live("swipeleft", function (event) {
                        $("#tomorrowOutput").html($(friday[2]).html().slice(75));
                    });
                    //---------//

                    // AfterTomorrow
                    $("#essenTitle2").html("Samstag");
                    $("#dayAfterTomorrowOutput").html("Sorry Bro, Mensa ist Heute geschlossen");
                    //---------//
                    break;

                case 5: 
                    // Today
                    $("#essenTitle0").html("Freitag");
                    $("#todayOutput").html($(friday[1]).html().slice(75));

                    // SwipeListner for today
                    $("#todayOutput").live("swiperight", function (event) {
                        $("#todayOutput").html($(friday[1]).html().slice(75));
                    });
                    $("#todayOutput").live("swipeleft", function (event) {
                        $("#todayOutput").html($(friday[2]).html().slice(75));
                    });
                    //---------//

                    // Tomorrow
                    $("#essenTitle1").html("Samstag");
                    $("#tomorrowOutput").html("Sorry Bro, Mensa ist Heute geschlossen");
                    //---------//

                    // AfterTomorrow
                    $("#essenTitle2").html("Sonntag");
                    $("#dayAfterTomorrowOutput").html("Again? Bro, KFC is for U today");
                    break;
            }
            //Finish
            //alert("Ajax is done");
        }
    });
}, 250);


