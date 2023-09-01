$(function (){

    $( "#tabs" ).tabs();

    //                  Part 1

    //              Background Color control with radio buttons
    $(".radio").on("change", function(){
        $("#tabs-1").css("background-color", $(this).attr("value"));
    })

    //              Format Control with check boxes
    $(".checkbox").on("change", function(){
        if ($("#Bold").is(":checked")){
            $("#tabs-1").css("font-weight", "bold");
        } else {
            $("#tabs-1").css("font-weight", "normal");
        }
        if ($("#Italics").is(":checked")){
            $("#tabs-1").css("font-style", "italic");
        } else {
            $("#tabs-1").css("font-style", "normal");
        }
        if ($("#Underline").is(":checked")){
            $("#tabs-1").css("text-decoration", "underline");
        } else {
            $("#tabs-1").css("text-decoration", "none");
        }
    });
    
    //              Font size control with dropdown
    $("#fontSize").on("change", function(){
        $("#tabs-1").css("font-size", $(this).find(":selected").val());
    });



    //                  PART 2
    
    $(".dropdownButton, .dropdownContent").on("mouseover", function(){
      $(this).closest(".dropdown").find(".dropdownContent").show();
        })
        .on("mouseout", function () {
          $(this).closest(".dropdown").find(".dropdownContent").hide();
    });

});