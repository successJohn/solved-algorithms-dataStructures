/*Write a function that takes an array of numbers as its argument and returns the two highest numbers within the array. 
The returned value should be an array in the format [second oldest age, oldest age].
The order of the numbers passed in could be any order. The array will always include at least 2 items. 
If there are two or more oldest age, then return both of them in array format.
*/


function findHigestNumbers(arr){
    return arr.sort((a,b) => a-b).slice(-2)
}



console.log(findHigestNumbers([5,4,9,8,1]));
console.log(findHigestNumbers([7,5,6,7]));