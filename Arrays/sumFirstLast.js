function sumFirstLast(numbers) {
  const first = numbers.shift();
  const last = numbers.pop();

  const sum = first + last;
  console.log(sum);
}

sumFirstLast([20, 30, 40]);
sumFirstLast([10, 17, 22, 33]);
sumFirstLast([11, 58, 69]);
