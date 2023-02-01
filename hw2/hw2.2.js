function process(){
    const int1 = Number(document.getElementById("int1").value);
    const int2 = Number(document.getElementById("int2").value);
    const int3 = Number(document.getElementById("int3").value);
    const sum = Number(int1) + Number(int2) + Number(int3);
    const avg = Math.round(Number(sum)/3);
    const pro = Number(int1) * Number(int2) * Number(int3);
    const max = Math.max(int1,int2,int3)
    const min = Math.min(int1,int2,int3)
    if (int1 == "" || int2 == "" || int3 == ""){
        document.getElementById("alert").innerHTML = "We encountered an error... please make sure to input numbers into all three boxes"
        empty();
    }
    else{
        document.getElementById("alert").innerHTML = ""
        //document.getElementById("results").style.display = "block";
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("avg").innerHTML = avg;
        document.getElementById("pro").innerHTML = pro;
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
    }
}
function empty(){
    document.getElementById("sum").innerHTML = "";
    document.getElementById("avg").innerHTML = "";
    document.getElementById("pro").innerHTML = "";
    document.getElementById("min").innerHTML = "";
    document.getElementById("max").innerHTML = "";
    document.getElementById("int1").value = "";
    document.getElementById("int2").value = "";
    document.getElementById("int3").value = "";
}

$(document).ready(function(){
    $("#PROCESS").click(function(){
        $("#results").fadeIn(2000);
    });
});


var a = document.getElementById("CLEAR");
var b = document.getElementById("PROCESS");
if(a){
a.addEventListener("click", empty);
}
if(b){
b.addEventListener("click", process);
}