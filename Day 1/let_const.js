'use strict';


function main() {
    const PI = Math.PI;
    let r = readLine();
    let area;
    let perimeter;
    area = PI*(r*r);
    perimeter = 2*PI*r;
    console.log(area);
    console.log(perimeter);
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}