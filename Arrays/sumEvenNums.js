/* Write a program, which receives an array of strings, parse them into numbers, and sum only the even number */

function sumEvenNums(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const currentNum = Number(array[i]);

    if (currentNum % 2 === 0) {
      sum += currentNum;
    }
  }

  console.log(sum);
}

sumEvenNums(["1", "2", "3", "4", "5", "6"]);
sumEvenNums(["3", "5", "7", "9"]);
sumEvenNums(["2", "4", "6", "8", "10"]);
