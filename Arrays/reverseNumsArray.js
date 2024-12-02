/* 
Write a program, which receives a number n and an array of elements. Your task is to create a new array with n numbers from the original array, reverse it and print its elements on a single line, space-separated.
*/

function reverseArray(rotations, numbers) {
  const newArray = [];

  for (let i = 0; i < rotations; i++) {
    const currentEl = numbers[i];
    newArray.push(currentEl);
  }
  console.log(newArray.reverse().join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);
