
  document.getElementById('btn1').innerHTML = "1";
  document.getElementById('btn2').innerHTML = "2";
  document.getElementById('btn3').innerHTML = "3";
  document.getElementById('btn4').innerHTML = "4";
  document.getElementById('btn5').innerHTML = "5";
  document.getElementById('btn6').innerHTML = "6";
  document.getElementById('btn7').innerHTML = "7";
  document.getElementById('btn8').innerHTML = "8";
  document.getElementById('btn9').innerHTML = "9";

  function rotateGrid() {
const lastValue = document.getElementById('btn1').innerHTML;
document.getElementById('btn1').innerHTML =      document.getElementById('btn4').innerHTML;
document.getElementById('btn4').innerHTML = document.getElementById('btn7').innerHTML;
      document.getElementById('btn7').innerHTML =      document.getElementById('btn8').innerHTML;
       document.getElementById('btn8').innerHTML =      document.getElementById('btn9').innerHTML;
      document.getElementById('btn9').innerHTML =      document.getElementById('btn6').innerHTML;
      document.getElementById('btn6').innerHTML =      document.getElementById('btn3').innerHTML;
      document.getElementById('btn3').innerHTML =      document.getElementById('btn2').innerHTML;
      document.getElementById('btn2').innerHTML = lastValue;
  }