/* 
Write a program, which receives a number and prints the corresponding name of the day of the week (in English).
If the number is NOT a valid day, print: "Invalid day!". 
*/

function dayOfWeek(dayAsNum) {
  if (dayAsNum < 1 || dayAsNum > 7) {
    console.log("Invalid day!");
  } else {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[dayAsNum - 1];
    console.log(day);
  }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
