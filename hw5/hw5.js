$(function () {
    $( "#tabs" ).tabs();

    //                                              PART 1
    // Initialize and declare data object 
    var sections = [{"section": "#nameinput", "call": "#name", "message": "Please input name <br>", "default": ""}, 
                    {"section": "#ageselect", "call": "input[name='age']", "message": "Please select age range! <br>", "default": ""},
                    {"section": "#browserselect", "call": "input[type='checkbox']", "message": "Please select a browser! <br>", "default": ""},
                    {"section": "#movieselect", "call": "#movies", "message": "Please select a movie! <br>", "default": "empty"}];


    var results = $("#results");            // declare results text area
    var isError = false;                    // declare boolean variable to check if an error will be displayed (to change color in results area)
    $("#submit").click(function(){          // on submit button click

        $(results).empty();                 // clears results text area
        isError = false;                    // reset error to false

        
        for (let i = 0; i < sections.length; i++){                  // For loop checks each section for input. Handles #nameinput differently then check boxes 
            $(sections[i].section).css("border", "none");           // clearing borders (if existing from previous errors)
            if (sections[i].section == "#nameinput"){               // handle text input for name
                if ($(sections[i].call).val() == ''){               // if user entered nothing in name text area
                    inputError(sections[i]);                        // set error for name text input
                } 
            } else if (sections[i].section == "#movieselect"){                  // handles select dropdown menu
                if ($(sections[i].call).find(":selected").val() == "empty"){    // how to check to see if user selected value since default option value is set to 'empty'
                    inputError(sections[i]);
                }
            } else {
                if (!check(sections[i].call)){                      // call checkbox checker function to see if a box is checked
                    inputError(sections[i])                         // if not call error
                }
            }
        }

        if (isError == false){                                                                              // if there are no errors
            $(results).css("color", "green");                                                               // set results text color green
            $(results).append("Congratulations! You entered all the information on the form correctly.");   // congratz message
        } else {
            $(results).css("color", "red");                                                                 // otherwise reset results area color to red
        }
    });

    $("#clear").click(function(){                               // on click of clear button
        $(results).empty();                                     // empty results text area
        for (let i = 0; i < sections.length; i++){              // for each section in sections
            $(sections[i].section).css("border", "none");       // clear border (if exists from previous error)
            $(sections[i].call).val(sections[i].default);       // set each sections input back to default
            $(sections[i].call).prop('checked', false);         // sets 'checked' property to false (for radio and check boxes)
        }
    });

    //              FUNCTIONS

    // Applys error message to results area & a red border to a section & sets isError to true
    function inputError(item){
        $("#results").append(item.message);
        $(item.section).css("border", "solid 2px red");
        isError = true;
    }

    // checks to see if a radio button or checkbox is checked
    function check(item){
        checker = $(item);
        for (let i = 0; i < checker.length; i++){
            if (checker[i].checked){
            return true;
            }
        }
        return false
    }



    //                  PART 2

    $("#select2").change(function(){ // removes error when a movie is selected from the second drop down
        $("#errorArea").empty();
    });
    $("#select1").change(function(){ // removes error when a movie is selected from the first drop down
        $("#errorArea").empty();
    });

    //                  PART 3

    var censusData =    [{"Abbr": "AL", "Name": "Alabama", "Capital": "Montgomery", "Population": "4,903,185"},
                    {"Abbr": "AK", "Name": "Alaska", "Capital": "Juneau", "Population": "731,545"},
                    {"Abbr": "AZ", "Name": "Arizona", "Capital": "Phoenix", "Population": "7,278,717"},
                    {"Abbr": "AR", "Name": "Arkansas", "Capital": "Little Rock", "Population": "3,017,825"},
                    {"Abbr": "CA", "Name": "California", "Capital": "Sacramento", "Population": "39,512,223"},
                    {"Abbr": "CO", "Name": "Colorado", "Capital": "Denver", "Population": "5,758,736"}];

    var stateInput = $("#state").val();    // update var for input each time user types 
    $("#state").change(function(){
        stateInput = $("#state").val();
    });
    $("#stateLookupButton").click(function(){           // lookup button push
        $("#stateInfo").css("color", "black");
        var matchFound = false;
        var stateUpper = stateInput.toUpperCase();      // user input to upper
        $("#stateInfo").empty();                        // empty info area
        for (let i = 0; i < censusData.length; i++){                                                // for each state in census data
            if(stateUpper == censusData[i].Name.toUpperCase() || stateUpper == censusData[i].Abbr){ // if user input matches a state in the data
                $("#stateInfo").append(`Thanks for your inquiry, here is the information you requested:<hr>State abbr = ${censusData[i].Abbr}<br>State Name = ${censusData[i].Name}<br>Capital = ${censusData[i].Capital}<br>Population = ${censusData[i].Population}<br>`);
                $("#stateInfo").append(censusData[i]);
                matchFound = true;
            }  
        }
        if (!matchFound) { // if no match found show error message
            $("#stateInfo").css("color", "red");
            $("#stateInfo").append(`Sorry, we don't have a state by that name or abbrevieation in our records.<br>`);
        }
    });
});


