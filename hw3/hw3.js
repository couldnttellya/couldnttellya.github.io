//Nav bar opening
/*function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}*/

//Nav bar closing
/*function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}*/

// tab control
$( function() {
  $( "#tabs" ).tabs();
} );

//changing nav bar open to jquery
$(function () {
    $("#closebtn").click(function () {
        $("#mySidebar").css("width", "0");
        $("#main").css("marginLeft", "0");
    });
});

//changing nav bar open to jquery
$(function () {
    $("#openbtn").click(function () {
        $("#mySidebar").css("width", "250px");
        $("#main").css("marginLeft", "250px");
    });
});