changeText = function (text, newText) {
    var currentText = $('#lsfLabel').html();
    $('#lsfLabel').html(currentText.replace(text, newText));
};

var row = [];
//var column = [];

var begin = [];
var end = [];
var title = [];

window.setTimeout(function () {
    //changeText('Fell me please', 'Amigo');
    $.ajax({
        url: 'https://lsf.hs-worms.de/qisserver/rds?state=currentLectures&type=0&next=CurrentLectures.vm&nextdir=ressourcenManager&navigationPosition=lectures%2CcurrentLectures&breadcrumb=currentLectures&topitem=lectures&subitem=currentLectures&asi=',
        success: function (data) {
            //alert(data);
            var aDiv = $(data).find('tbody').eq(0);

            //var row1 = $(aDiv).find('tr').eq(1);
            for (var i = 0; i < 10; i++) {
                row[i] = $(aDiv).find('tr').eq(i);
                alert($(row[i]).html());
            }


            //var row1col1 = $(row1).find('td').eq(1);
            for (var i = 0; i < 7; i++) {
                begin[i] = $(row[i]).find('td').eq(0);
                end[i] = $(row[i]).find('td').eq(1);
                title[i] = $(row[i]).find('td').eq(2);
                /*
                ...
                ...
                ...
                */

                alert($(begin[i]).html());
                alert($(end[i]).html());
                alert($(title[i]).html());
            }


            //alert($(aDiv).html());
            //alert($(row1).html());
            alert($(row1col1).html());

            changeText('LSF', heuteMenuOut1);
        }
    });

}, 2000);
