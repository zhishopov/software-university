/* Write a function, which changes the value of odd and even numbers in an array of numbers.
  · If the number is even - add to its value its index position
  · If the number is odd - subtract to its value its index position

Output:
On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified arra */

function addSubtract(array) {
  let sumOriginal = 0;
  let sumNew = 0;

  const newArr = array.map((number, index) => {
    sumOriginal += number;

    if (number % 2 === 0) {
      number += index;
    } else {
      number -= index;
    }
    sumNew += number;
    return number;
  });

  console.log(newArr);
  console.log(sumOriginal);
  console.log(sumNew);
}

addSubtract([5, 15, 23, 56, 35]);
addSubtract([-5, 11, 3, 0, 2]);
