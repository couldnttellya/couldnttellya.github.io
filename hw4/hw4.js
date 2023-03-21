$(function () {
    
    $("#hw2link").mouseover(function(){
        $("#hw2description").css("opacity", "1");
    });
    $("#hw2link").mouseout(function(){
        $("#hw2description").css("opacity", "0");
    });

    $( "#tabs" ).tabs();

    // tooltip -- hover on item displays label title
    //$(document).tooltip({
    //    track:true
    //});

    // Sidebar Nav open and close function
    $("#closebtn").click(function () {
        $("#mySidebar").css("width", "0");
        $("#main").css("marginLeft", "0");
    });
    $("#openbtn").click(function () {
        $("#mySidebar").css("width", "250px");
        $("#main").css("marginLeft", "250px");
    });


                        // PART 1


    // Draggable div
    $("#tabs-1").draggable();

    //Product and Sum of 5-25 by 4 inclusive via FOR loop
    var productTotal = 5;
    var sumTotal = 0;

    for (var i = 5; i <= 25; i += 4){
        $("#prodResult, #sumResult").append(i); // adding numbers to html
        if (i < 25){ // skipping adding * and + to last iteration of the loop
            $("#prodResult").append(" * ");
            $("#sumResult").append(" + ");
            productTotal = productTotal * (i+4); // handling product total
        }
        sumTotal = sumTotal + i; // handling sum total
    }
    // Appending totals
    $("#prodResult").append(" is " + productTotal.toLocaleString());
    $("#sumResult").append(" is " + sumTotal.toLocaleString());
    
    var counter = 3;
    productTotal = 1;
    sumTotal = 0;
    while (counter <= 18){
        $("#prodResult2, #sumResult2").append(counter);
        if (counter < 18) {
            $("#prodResult2").append(" * ");
            $("#sumResult2").append(" + ");
            productTotal = productTotal * (counter+4);
        }
        sumTotal = sumTotal + counter;
        counter+=3;
    }
    $("#prodResult2").append(" is " + productTotal.toLocaleString());
    $("#sumResult2").append(" is " + sumTotal.toLocaleString());


                        // Part 2

    var startingInterest = .05;
    var endingInterest = .07
    var numberYears = 5;
    var principle = 1000;

    var aod; // amount on deposit

    // generating table

    for(var i = startingInterest; i <= endingInterest; i += .01){
        var table = $("<table>").appendTo("#itable"); // create table
        var headerRow = $('<tr>').appendTo(table); // create header row
        var tcell1 = $('<th>').appendTo(headerRow);
        var tcell2 = $('<th>').appendTo(headerRow);
        var tcell3 = $('<th>').appendTo(headerRow);
        $(tcell1).text("Year");
        $(tcell2).text("Amount on Deposit");
        $(tcell3).text("Interest Rate");
        $(table).draggable();
        $(headerRow).css("background-color", "white");
        for(var j = 1; j <= numberYears; j++){
            aod = principle * Math.pow((1 + i), j);
            var row = $("<tr>").appendTo(table);
            var cell1 = $("<td>").appendTo(row);
            var cell2 = $("<td>").appendTo(row);
            var cell3 = $("<td>").appendTo(row);
            $(cell1).text(j);
            $(cell2).text(aod.toLocaleString(undefined, {maximumFractionDigits: 2}));
            $(cell3).text("%"+(Math.round(i * 100)));
            $(row).css("background-color", "white");
            if (j%2){$(row).css("background-color", "lightgrey")};
            //$("#itable").append("<tr><td>" + j + "</td><td>" + aod.toLocaleString(undefined, {maximumFractionDigits: 2}) + "</td></tr>");
        }
        $("#itable").append("<br>");
        //$("#itable").append("</tbody></table>");
    }

    //              PART 3 -- Extra Credit

    // square drawing function
    function drawSquare(size){
        $("#displayArea").css("font-family", "monospace");
        $("#displayArea").css("letter-spacing", "8px");
        $("#displayArea").css("line-height", "16px");
        for(let i = 0; i < size; i++){
            if (i == 0 || i == size - 1){
                // draw line of asterisk
                for(let j = 0; j < size; j++){$("#displayArea").append("*");}
                $("#displayArea").append("<br>");
            } else {
                // draw one asterisk, size - 2 spaces, then one asterisk
                $("#displayArea").append("*");
                for(let j = 0; j < size - 2; j++){$("#displayArea").append("&nbsp;");}
                $("#displayArea").append("*");
                $("#displayArea").append("<br>");
            }
        }
    }

    var usize;
    $("#submit").click(function () {
        usize = $("#numbox").val()
        if (usize < 2 || usize > 10){
            $("#displayArea").text("Looks like your input is out of range! Please input a number 2-10 to continue.");
        } else {
        $("#displayArea").text(" ");
        drawSquare(usize);
        }
    });

    $("#clear").click(function () {
        $("#displayArea").text(" ");
        $("#numbox").val("");
    });

    $("#displayArea").draggable();

});