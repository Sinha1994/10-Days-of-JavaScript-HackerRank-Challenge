'use strict';
function getMaxLessThanK(n,k) {
    let maxVal = 0;
    for(let i=1;i<n;i++) {  //n=995 k=236    i=1
       for(let j=i+1;j<=n;j++) {         //j=2, j=3
        let currentAndVal = Number(i & j);
        if((currentAndVal < k) && currentAndVal > maxVal) {     
            maxVal = currentAndVal;
        }
       }
    }
    return maxVal;
 }