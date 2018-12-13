/* Weather.js
This Javascript code get Weather data form Hochschule Worms Wetter Station
Created by: Diana Stark (inf3037)
*/

window.setTimeout(function () {

    var date = new Date();
    var day;

    switch (date.getDay()) {
        case 1: day = "Montag"
            break;
        case 2: day = "Dienstag"
            break;
        case 3: day = "Mittwoch"
            break;
        case 4: day = "Donnerstag"
            break;
        case 5: day = "Freitag"
            break;
        case 6: day = "Samstag"
            break;
        case 7: day = "Sonntag"
            break;
    }


    $.ajax({
        // Get data from HS Wetter Station
        url: 'http://wetter.fh-worms.de/raw.php',
        success: function (data) {
            // push it in Buffer
            let buffer = "" + data;
            // split nach ;
            buffer = buffer.split(';');

            // Go Pro?
            let barometer = buffer[2];
            let temperature = buffer[3];
            let windSpeed = buffer[4];
            let windSpeedAverage = buffer[5];
            let humidity = buffer[8];
            let uvIndex = buffer[11];
            let rain = buffer[13];

            if (temperature >= 22) {
                $('#weatherImage').attr("src","/www/images/sun.png")
            }
            if (humidity >= 30) {
                $('#weatherImage').attr("src", "/www/images/default.png")
            }

            if (rain >= 10) {
                $('#weatherImage').attr("src", "/www/images/regen.png")
            }

            //$('#dateLabel').html("Am " + (date.getDate() < 10 ? '0' : '') + date.getDate() + "." + month + "." + date.getFullYear());
            $('#title').html(day);
            $('#temparatureLabel').html(temperature + "°");
            $('#barometerLabel').html("Luftdruck: " + barometer + " hPa");
            $('#humidityLabel').html("Luftfeuchtigkeit: " + humidity + " %");
            $('#windSpeedLabel').html("Windgeschwindigkeit: " + windSpeed + " Km/h");
            $('#windSpeedAverageLabel').html("Ø " + windSpeedAverage + " Km/h");
            $('#uvIndexLabel').html("UV Index: " + uvIndex);
            $('#rainLabel').html("Regen: " + rain + " mm");
        }
    });


}, 250);