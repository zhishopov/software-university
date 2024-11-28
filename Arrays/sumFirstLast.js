/* 
Write a function that receives an array of numbers and prints the sum of the first and last element in that array 
*/

function sumFirstLast(numbers) {
  const first = numbers.shift();
  const last = numbers.pop();

  const sum = first + last;
  console.log(sum);
}

sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
sumFirstLast([11, 58, 69]);
