//1./* This is my first homework with JS */

let numberOfChildren = 4;
let partnersName = "Chyngyz";
let city = "Basel";
let jobTitle = "full stack developer";
console.log("I am a " + jobTitle + " in " + city + ", and married to " + partnersName + " with " + numberOfChildren + " kids.")


//2.
let curYear = 2022;
let birthYearShe = 1990;
let birthYearHe = 1988;
ageShe = curYear - birthYearShe;
ageHe = curYear - birthYearHe;
/* console.log(curYear - birthYear); */
console.log("They are either " + ageHe + " or " + ageShe + ".")


//3.
/*  F=C*9/5+32
    C =(F-32)*5/9   */
/*  let celsius = 25;
    fahrenheit = celsius*9/5+32;
    console.log(celsius + "\u00B0C is " + fahrenheit + " \u00B0F")  */
  /*   let fahrenheit = 100;
    celsius = (fahrenheit - 32)*5/9;
    const roundedCelsius = celsius.toFixed(2);
    console.log(fahrenheit + "\u00B0F is " + celsius + " \u00B0C"); */

    
//4.
    let fahrenheit = Math.floor(Math.random() * 100);
    celsius = (fahrenheit - 32)*5/9;
    const roundedCelsius = celsius.toFixed(2);
    console.log(fahrenheit + "\u00B0F is " + celsius + " \u00B0C");
    console.log("It is " + fahrenheit + "\u00B0F today." + "" + "That's " + celsius + "\u00B0C.")