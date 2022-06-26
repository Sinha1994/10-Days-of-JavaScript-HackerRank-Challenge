'use strict';

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(var i=0; i<s.length; i++){
        if(['a','e','i','o','u'].indexOf(s[i]) !== -1){
            console.log(s[i]);
        }
    }
    for(var i=0; i<s.length; i++){
        if(['a','e','i','o','u'].indexOf(s[i]) === -1){
            console.log(s[i]);
        }
    }
}