res = document.getElementById('res');
 let firstVal = '', secVal = '';
 let opr = "";
 let resText = "";
 function btn0Click() {
       if(!opr){
          firstVal = firstVal.concat('0');
          resText = resText.concat('0');
          res.innerHTML =  resText;
       }
      else {
        secVal = secVal.concat('0');
        resText = resText.concat('0');
        res.innerHTML =  resText;
      }
 }
 function btn1Click() {
      if(!opr){
          firstVal = firstVal.concat('1');
          resText = resText.concat('1');
          res.innerHTML =  resText;
       }
      else {
        secVal = secVal.concat('1');
        resText = resText.concat('1');
        res.innerHTML =  resText;
      }
 }
function oprClick(operator) {
    opr = operator;
    resText = resText.concat(opr);
    res.innerHTML = resText;
}
function eqlClick() {
    let val1 = parseInt(firstVal,2);
    let val2 = parseInt(secVal,2);
    let resVal;
    switch(opr){
            case '+':
            resVal = val1+val2;
            break;
            case '-':
            resVal = val1-val2;
            break;
                    case '*':
            resVal = val1*val2;
            break;
                    case '/':
            resVal = val1/val2;
            break;
    }
    resText = resVal.toString(2);
    res.innerHTML =  resText;
}
function clrClick() {
 firstVal = '', secVal = '';
 opr = "";
 resText = "";
res.innerHTML = "";
}