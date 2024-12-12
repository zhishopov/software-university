/* 
Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array. Print the resulting elements on a single line, space-separated.
*/

function reverseInPlace(array) {
  let result = "";

  for (let i = array.length - 1; i >= 0; i--) {
    result += array[i] + " ";
  }
  console.log(result);
}

/*
function reverseInPlace(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    //swap first element with last element
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }

  console.log(array.join(" "));
}
*/
reverseInPlace(["a", "b", "c", "d", "e"]);
//reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
//reverseInPlace(["33", "123", "0", "dd"]);
