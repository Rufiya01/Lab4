function fToC(f) {
    var f = parseFloat(document.getElementById("FtoC").value);
    var result = ((f - 32)*5)/9;
    document.getElementById("demo1").innerHTML = "The value of temperature in Celcius is: " + result;
}

function cToF(c) {
    var c = parseFloat(document.getElementById("CtoF").value);
    var result = (c*9)/5+32;
    document.getElementById("demo2").innerHTML = "The value of temperature in Farenheit is: " + result;
}

function mToK(m) {
    var m = parseFloat(document.getElementById("MtoK").value);
    var result = m*1.609;
    document.getElementById("demo3").innerHTML = "The value of length in kilometers is: " + result;
}

function kToM(k) {
    var k = parseFloat(document.getElementById("KtoM").value);
    var result = k/1.609;
    document.getElementById("demo4").innerHTML = "The value of length in miles is: " + result;
}
