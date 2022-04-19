"use strict";

let fullName = "Andrea Hoffman";
let age = 30;
const birthday = "September 9";
let pineapplePizza = false;
const lifeEvents = [
    "I am from Kalamazoo",
    "I went to WMU",
    "I met Demetri Martin in 2018",
    "I like llamas"
];

if(pineapplePizza){
    console.log(`My name is ${fullName} and I like pineapples on pizza.  I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${fullName} and I do not like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for(let i =0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}

let counter = 0;
while(true){
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    counter++;
    if(randomNumber !== 5){
        console.log(`${randomNumber} !== 5`);
    } else {
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5`);
        break;
    }
}

let hours = 50;
let wage = 10;

let paycheck = null;

if (hours > 40) {
  let overtimeHours = hours - 40;
  //   console.log(overtimeHours);
  let overtimePay = overtimeHours * wage * 1.5;
  //   console.log(overtimePay);
  let regularPay = 40 * wage;
  //   console.log(regularPay);
  let otPaycheck = regularPay + overtimePay;
  console.log(otPaycheck);
  paycheck = otPaycheck;
} else {
  console.log(hours * wage);
  paycheck = hours * wage;
}

console.log(`It would take ${Math.ceil(1000000 / paycheck)} weeks to make one million dollars`);