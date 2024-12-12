/* Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array */

function evenOddSubtract(array) {
  let sumEven = 0;
  let sumOdd = 0;
  let diff = 0;

  array.forEach((el) => {
    if (el % 2 === 0) {
      sumEven += el;
    } else {
      sumOdd += el;
    }
  });

  diff = sumEven - sumOdd;
  console.log(diff);
}

evenOddSubtract([1, 2, 3, 4, 5, 6]);
evenOddSubtract([3, 5, 7, 9]);
evenOddSubtract([2, 4, 6, 8, 10]);
