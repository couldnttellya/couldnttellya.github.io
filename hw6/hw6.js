$(function () {
    $( "#tabs" ).tabs();

    //                  PART 1
    
    $("#submit").click(function(){
        //     /^\d*\.\d{4,} --- reg expression for one or more digits followed by decimal followed by minimum 4 digits
        $("#results1").empty();
        const regExp = /^\d+\.\d{4,}$/;
        var input1 = parseFloat($("#input1").val());
        var match = regExp.test(input1);
        if(!match){
            $("#results1").css("color", "red")
            $("#results1").append(`Error, "${input1}" is invalid input!<br>Please enter a number with 4 digits after the decimal and submit again`);
        } else if (match){
            $("#results1").css("color", "black")
            $("#results1").append(`Correct, "${input1}" is valid input!<br>`);
            $("#results1").append(`Rounded to the nearest integer: ${Math.round(input1)}<br>`);
            $("#results1").append(`The Square root rounded to the nearest integer: ${Math.round(Math.sqrt(input1))}<br>`);
            $("#results1").append(`Rounded to the nearest 10ths position: ${(Math.round(input1*10))/10}<br>`);
            $("#results1").append(`Rounded to the nearest 100ths position: ${(Math.round(input1*100))/100}<br>`);
            $("#results1").append(`Rounded to the nearest 1000ths position: ${(Math.round(input1*1000))/1000}<br>`);
        }
    });
    
    $("#clear").click(function(){
        $("#input1").val("");
        $("#results1").empty();
    });

    //                  PART 2

    $("#submit2").click(function(){
        var str = $("#sec2textarea").val().toLowerCase();
        var pattern = $("#charinput").val();
        var re = new RegExp ($("#charinput").val().toLowerCase(), 'g');
        var count = 0;
        while (re.exec(str) !== null){
            count+=1;
        }
        console.log(count);
        let myWindow;
        if (myWindow) closeWin();
        if (count != 0){
            $("#results2").append(`The character you typed, "${pattern}" shows up ${count} times in text you provided.`);
        } else {
            $("#results2").empty();
            myWindow = window.open("","noOccurences", "width=300,height=100,top=400,left=500");
            myWindow.document.write("<p>Unfortunatley there were 0 occurences of the character you typed in the text you provided.<p>");
            myWindow.document.write('<button type="button" id="closeWindow" onclick="javascript:window.close()">Close</button>');
            function closeWin(){
                myWindow.close();
            }
        }
        //const regExp2 = new RegExp($("#charinput").val(), 'g');
        //if (regExp2.match($("#sec2textarea").val())){
        //    console.log("Match!");
        //}
    });

    //                  PART 3

    $('input[name="phoneNumber"]').mask('(000) 000-0000')
    $("#submit3").click(function(){
        var userNumber = $("#phoneNumber").val();
        console.log(userNumber);
        var phoneNumber = userNumber.split(/\D/).join("");
        if (phoneNumber.length == 10){
            $("#results3").empty();
            $("#areaCode").val(phoneNumber.substring(0,3))
            $("#first3").val(phoneNumber.substring(3,6))
            $("#last4").val(phoneNumber.substring(6,10))
        } else {
            $("#results3").empty();
            $("#results3").append("Looks like there aren't 10 digits in the box. Please try again.")
        }
    });
    $("#clear3").click(function(){
        $("#phoneNumber").val("");
        $("#results3").empty();
        $("#areaCode").val("");
        $("#first3").val("");
        $("#last4").val("");
    });

});