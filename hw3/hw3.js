
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


    // PART 1

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

    // PART 2


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
        $("#weeklyEarning").val("$" + (250 + (.09 * (Math.round(weeklyEarning * 100) / 100))));
    });
    //clear button
    $("#clear2").click(function() {
        for(let i = 1; i <= 4; i++){
            $("#item" + i).val("");
        }
    });

    // PART 3

    $("#f2c").click(function() {
        const temp = Number($("#temp").val()); // get user input temp
        const result = Math.round((5/9 * (temp - 32) * 10)) / 10; // convert farenheight to celcius
        $("#textAreaResults").text(result);
    });
    $("#c2f").click(function() {
        const temp = Number($("#temp").val()); // get user input temp
        const result = Math.round(((9/5 * temp) + 32)  * 10) / 10; // convert farenheight to celcius
        $("#textAreaResults").text(result);
    });

    
    function getRandom() {
        const ran1 = Math.floor(Math.random(10) * 10);
        const ran2 = Math.floor(Math.random(10) * 10);
        $("#ran1").text(ran1);
        $("#ran2").text(ran2);
    }
    getRandom();

    // User submits answer
    $("#submit3").click(function() {
        const userAnswer = $("#userAnswer").val();
        const ran1 = Number($("#ran1").text());
        const ran2 = Number($("#ran2").text());
        if (userAnswer == ran1 * ran2){
            $("#ansArea").text("Very good! Would you like to answer another question?");
            $(".ansBtn").css("display", "inline");
            console.log("correct answer");
        } else {
            $("#ansArea").text("No. Please try again.");
            $(".ansBtn").css("display", "none");
            console.log("incorrect answer");
        }
    });
    // User click yes on answer another
    $("#ansBtnY").click(function() {
        getRandom();
        $(".ansBtn").css("display", "none");
    });
    // User cick no on answer another
    $("#ansBtnN").click(function() {
        $("#ansArea").text("Thanks for playing, see you next time!");
        $(".ansBtn").css("display", "none");
    });

});

// parse int from html where price values stored with leading $
function parseCurrency(itemNum){
    const itemName = "#item" + itemNum + "Price";
    var price = $(itemName).text();
    price = Number(price.replace(/[^0-9.-]+/g,""));
    return price;
}
