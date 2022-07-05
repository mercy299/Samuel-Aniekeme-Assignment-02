// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================



function sumOfNumbers(arrayOfNumbers) {
  let sum = 0
  let i = 0
  while (i < arrayOfNumbers.length){
    sum = sum + arrayOfNumbers[i]
        i++
  }
return sum
  
}


assignment.sumOfNumbers = sumOfNumbers;


function countEvenNumbers(numbers) {
   if (numbers.length == 0) return 0
  let count = 0
  numbers.forEach(element => {
    if (element % 2 == 0) ++count
  })
  return count
}

assignment.countEvenNumbers = countEvenNumbers;





function celsiusToFahrenheit(numbers) {
 let farhArray = []
  for (let i = 0; i < numbers.length; i++){
    farhArray.push(toFarh(numbers[i]))
  }
  return farhArray
}
function toFarh(c){
  return Math.trunc(((9*c) / 5) + 32)
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

