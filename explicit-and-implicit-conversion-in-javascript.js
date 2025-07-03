/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
  console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // added Number() function to convert value of age to a number for correct math output
console.log("Total Age: " + totalAge);

//Part 2. 
// Implicit Type Conversion*/
let totalPeople = undefined;
console.log(totalPeople == null);

//Explicit Type Conversion*/
let totalSquareFeet = 12;
console.log(Boolean(totalSquareFeet)); 