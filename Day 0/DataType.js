/*
Task

Variables named firstInteger, firstDecimal, and firstString are declared for you in the editor below. You must use the  operator to perform the following sequence of operations:

Convert secondInteger to an integer (Number type), then sum it with firstInteger and print the result on a new line using console.log.
Convert secondDecimal to a floating-point number (Number type), then sum it with firstDecimal and print the result on a new line using console.log.
Print the concatenation of firstString and secondString on a new line using console.log. Note that firstString must be printed first.
*/
function performOperation(secondInteger, secondDecimal, secondString) {

    const firstInteger = 4;

    const firstDecimal = 4.0;

    const firstString = 'HackerRank ';
    
    console.log(firstInteger+parseInt(secondInteger));
    console.log(firstDecimal+parseFloat(secondDecimal));
    console.log(firstString + secondString);
    
}