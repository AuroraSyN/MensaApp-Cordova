let xhr = new XMLHttpRequest()
const url = 'https://lsf.fh-worms.de/qisserver/rds?state=currentLectures&type=1&next=CurrentLectures.vm&nextdir=ressourcenManager&navigationPosition=lectures%2CcanceledLectures&breadcrumb=canceledLectures&topitem=lectures&subitem=canceledLectures&asi='
var dataSet = []

function parseFile(html) {
    const parser = new DOMParser()
    return parser.parseFromString(html, 'text/html')
}

function parseTable(doc) {
    return doc.querySelector('body')
}

function parseRows(table) {
    return table.querySelectorAll('tbody tr')
}

function parseColumns(row) {
    return row.querySelectorAll('td.mod_n_odd')
}

function createRowData(column) {
    return {
        Beginn: column[0].textContent.trim(),
        Ende: column[1].textContent.trim(),
        Nr: column[2].textContent.trim(),
        Titel: column[3].textContent.trim(),
        Gebäude: column[4].textContent.trim(),
        Raum: column[5].textContent.trim(),
        Gruppe: column[6].textContent.trim(),
        Lehrpersonen: column[7].textContent.trim(),
        Bemerkung: column[8].textContent.trim(),
    }
}

function createDataSet(rows) {
    let i = 0

    rows.forEach(function (row) {
        // skip table head
        if (i === 0) {
            i++
            return
        }

        // parse all columns
        const column = parseColumns(row)

        // skip empty column values
        if (!column[0]) return

        // add row to dataset
        dataSet.push(createRowData(column))

        // increase counter
        i++
    })

    makeTable();

}

// Load file
window.setTimeout(function () {

        $.ajax({
            url: url,
            //url: "test/LSF_Test.html",
            success: function (data) {

                //alert(data);

                const doc = parseFile(data)
                const table = parseTable(doc)

                var str = data;
                var value = str.search("Keine aktuell ausfallenden Veranstaltungen");

                var x = document.getElementById("noFailEvents");
                if (value > 0) {


                    if (x.style.display === "none") {
                        x.style.display = "block";
                    }
                }
                else {
                    x.style.display = "none";

                }

                const rows = parseRows(table)
                createDataSet(rows)
            }
        });
    }, 1000);

function makeTable() {
    var columns = addAllColumns(dataSet);

    for (var i = 0; i < dataSet.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = dataSet[i][columns[colIndex]];

            if (cellValue == null) { cellValue = ""; }

            row$.append($('<td/>').html(cellValue));
        }
        $("#dataTable").append(row$);
    }
}


function addAllColumns(list) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < list.length; i++) {
        var rowHash = list[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $("#dataTable").append(headerTr$);

    return columnSet;
}