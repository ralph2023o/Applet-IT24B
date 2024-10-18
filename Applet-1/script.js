
function showGwa() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);
    var num5 = parseFloat(document.getElementById('num5').value);
    var num6 = parseFloat(document.getElementById('num6').value);





    var total = num1 + num2 + num3 + num4 + num5 + num6;
    var gwa = total / 6;
    alert("GWA is : " + gwa.toFixed(2));

}