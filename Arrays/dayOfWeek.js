/* 
Write a program, which receives a number and prints the corresponding name of the day of the week (in English).
If the number is NOT a valid day, print: "Invalid day!". 
*/

function dayOfWeek(day) {
  if (day < 1 && day > 7) {
    console.log("Invalid day!");
  } else {
    switch (day) {
      case 1:
        console.log("Monday");
        break;
      case 2:
        console.log("Tuesday");
        break;
      case 3:
        console.log("Wednsday");
        break;
      case 4:
        console.log("Thursday");
        break;
      case 5:
        console.log("Friday");
        break;
      case 6:
        console.log("Saturday");
        break;
      case 7:
        console.log("Sunday");
        break;
      default:
        console.log("Invalid day!");
        break;
    }
  }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
