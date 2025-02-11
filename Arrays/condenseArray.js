/* 
Write a program, which receives an array of numbers, and condenses them by summing adjacent couples of elements until a single number is obtained.

Example:
    If we have 3 elements [2, 10, 3], we sum the first two and the second two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements and obtain {12+13} = {25}.
*/

function condenseArray(array) {
  while (array.length > 1) {
    let temp = [];

    for (let i = 0; i < array.length - 1; i++) {
      temp.push(array[i] + array[i + 1]);
    }
    array = temp;
  }
  console.log(array[0]);
}

condenseArray([2, 10, 3]);
condenseArray([5, 0, 4, 1, 2]);
condenseArray([1]);
