
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
    })

});
