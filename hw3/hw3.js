
$(function () {

    // tab control
    $( "#tabs" ).tabs();

    //changing nav bar open/close to jquery
    $("#closebtn").click(function () {
        $("#mySidebar").css("width", "0");
        $("#main").css("marginLeft", "0");
    });
    $("#openbtn").click(function () {
        $("#mySidebar").css("width", "250px");
        $("#main").css("marginLeft", "250px");
    });

    $("#clear").click(function () {
        $("#hwAverage").val(" ");
        $("#midTerm").val(" ");
        $("#final").val(" ");
        $("#partic").val(" ");
        $("#results").text("Grade: %");
    });

    $("#submit").click(function() {
        const hwa = Number($("#hwAverage").val());
        const mt = Number($("#midTerm").val());
        const f = Number($("#final").val());
        const p = Number($("#partic").val());

        const avg = Math.round((hwa* .5 + mt * .2 + f * .2 + p * .1) * 10) / 10;
        var grade;
        switch (true) {
            case avg >= 90:
            grade = "A";
            break;
            case avg >= 80:
            grade = "B";
            break;
            case avg >= 70:
            grade = "C";
            break;
            case avg >= 60:
            grade = "D. Student must retake the course.";
            break;
            default:
            grade = "F. Student must retake the course.";
        }

        if (hwa > 100 || hwa < 0 || mt > 100 || mt < 0 || f > 100 || f < 0 || p > 100 || p < 0){
            $("#alert").text("It seems one or more of the numbers you input was outside the range of 0-100; please correct the number to continue");    
        } else {
            $("#results").text("Grade: % " + avg + " -- Letter grade: " + grade);
            $("#alert").text(" ");

        }
    });
    // tooltip hover on item displays html title
    $(document).tooltip();

    // calculates totals
    $("#submit2").click(function() {

        var amountSold = 0;
        var weeklyEarning = 0;
        for(let i = 0; i < 4; i++){
            if ($(("#item" + (i+1))).val() > 0){
                const amount = Number($("#item" + (i+1)).val()); // get amount of items input by user
                $("#it" + (i +1) + "q").val(amount); // copy amount values from input to table below 
                amountSold += amount; // add ammount to total ammount
                const earnings = ((Math.round((($(("#item" + (i+1))).val()) * (parseCurrency(i+1))) * 100)) / 100); // calculate totals on each item (ammount * value)
                $("#it" + (i +1) + "t").val("$" + earnings); // input totals for each item in table as currency
                weeklyEarning += Number(earnings); // add earning to weekly earnings 
            } else {
                $("#alert2").text("Seems one of the inputs was incorrect. Please check that you input positive integer values in all fields and try again");
            }
        }
        $("#amountSold").val(amountSold);
        $("#weeklyEarning").val("$" + (Math.round(weeklyEarning * 100) / 100));
        
        
        //const item1 = Number($("#item1").val());
        //const item2 = Number($("#item2").val());
        //const item3 = Number($("#item3").val());
        //const item4 = Number($("#item4").val());
        //const it1pr = parseCurrency(1);
        //const it2pr = parseCurrency(2);
        //const it3pr = parseCurrency(3);
        //const it4pr = parseCurrency(4);

        //var it1pr = $("#item1Price").text();
        //it1pr = Number(it1pr.replace(/[^0-9.-]+/g,""));
        //var it2pr = $("#item2Price").text();
        //it2pr = Number(it2pr.replace(/[^0-9.-]+/g,""));
        //var it3pr = $("#item3Price").text();
        //it3pr = Number(it3pr.replace(/[^0-9.-]+/g,""));
        //var it4pr = $("#item4Price").text();
        //it4pr = Number(it4pr.replace(/[^0-9.-]+/g,""));
        //const test = parseCurrency(2); -- Testing to see if parseCurrency function works
        //console.log(it1pr);
    });
    //$("#clear2").click(function() {});

});

function parseCurrency(itemNum){
    const itemName = "#item" + itemNum + "Price";
    var price = $(itemName).text();
    price = Number(price.replace(/[^0-9.-]+/g,""));
    return price;
}
