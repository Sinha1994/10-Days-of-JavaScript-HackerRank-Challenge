/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums = nums.filter((item,idx) => {return nums.indexOf(item) == idx});
    let sortedArr = nums.sort(function(a,b) {
        return a-b;
    });
    return sortedArr[sortedArr.length-2];
}