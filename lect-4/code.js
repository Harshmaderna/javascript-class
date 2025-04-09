// let dayName = 4;
// switch (dayName) {
//     case 1: console.log("monday")
//     break;
//     case 2: console.log("tuesday")
//     break;
//     case 3: console.log("wed")
//     break;
//     case 4: console.log("thurs")
//     break;
//     case 5: console.log("fri")
//     break;
//     case 6: console.log("sat")
//     break;
//     case 4: console.log("sun")
//     break;
//     default:
//         console.log("not valid day")
// }

// let month = 7;
// switch (month) {
//     case 1: console.log("jan")
//     break;
//     case 2: console.log("feb")
//     break;
//     case 3: console.log("mar")
//     break;
//     case 4: console.log("apr")
//     break;
//     case 5: console.log("may")
//     break;
//     case 6: console.log("june")
//     break;
//     case 7: console.log("july")
//     break;
//     case 8: console.log("aug")
//     break;
//     case 9: console.log("sep")
//     break;
//     case 10: console.log("oct")
//     break;
//     case 11: console.log("nov")
//     break;
//     case 12: console.log("dec")
//     break;
//     default:
//         console.log("not valid month")
// }

// let num1 = 10
// let num2 = 20
// let opr = "+"
// switch(opr){
//     case "+": console.log(num1+num2)
//     break;
//     case "-": console.log(num1+num2)
//     break;
//     case "*": console.log(num1+num2)
//     break;
//     case "%": console.log(num1+num2)
//     break;
//     default:
//         console.log("not valid opr")
// }

// let signals = "green"
// switch(signals){
//     case "red": console.log("stop")
//     break;
//     case "yellow": console.log("ready")
//     break;
//     case "green": console.log("go")
//     break;
//     default:
//         console.log("not valid signals")
// }

// let day= 4
// if(day === 1){
//     console.log("mon")
// }
// else if(day===2){
//     console.log("tues")
// }
// else if(day===3){
//     console.log("wed")
// }
// else if(day===4){
//     console.log("thurs")
// }
// else if(day===5){
//     console.log("fri")
// }
// else if(day===6){
//     console.log("sat")
// }
// else if(day===7){
//     console.log("sun")
// }
// else{
//     console.log("not day")
// }

// let year = 2030
// if(year%4===0){
//     console.log("leap year")
// } else{
//     console.log("not leap year")
// }

// let num = 33
//  num%2===0 ? console.log("even") : console.log("odd")

// task

// // q1 Write a program that gives advice based on temperature:(use nested if-else)

// let temp = 8
// let humidity = 75
// let wind = 20
// if(temp >= 35){
//     console.log("It's very hot! Drink water.")
// } else if (temp >= 25 && temp < 35 && humidity > 70){
//     console.log("Hot and humid, turn on the AC.")
// } else{
//     console.log("It's warm but manageable.")
// }
// if(temp >= 15 && temp < 25 && wind >= 15 ){
//     console.log("Cool breeze is blowing.")
// } else{
//     console.log("The weather is pleasant.")
// } if(temp < 15){
//     console.log("It's cold, wear a sweater.")
// } else{
//     console.log("not valid temperature")
// }

// // q2 Create a program that calculates a discount based on price:(use nested ternary)

// let price = 90000
// let memb = true
// price >= 10000 ? console.log("20% discount") : price >= 5000 && price < 10000 ? console.log("10% discount") : price < 5000 && memb >= true ? console.log("5% discount") : console.log("no discount")

// // q3 Create a program that evaluates student grades:(use  if-else + ternary)
// let grade = 22
// let Attendence = 66
// if(grade >= 90 && grade < 100){
//     console.log("grade a++")
// } else if (grade > 80 &&  grade < 89){
//     console.log("grade a")
// } else if(grade >= 70 && grade <=79 && Attendence > 75 ){
//     console.log("b")
// } else{
//     console.log("c")
// }

// // q4 Create a restaurant menu program:(switch case + ternary)


// let food = "pizza"
// let size = "large"
// switch(food){
//     case "pizza": size === "small" ? console.log("200") : size === "medium" ? console.log("400") :  console.log("600")
//     break;
//     case "burger": console.log("150")
//     break;
//     case "pasta": console.log("300")
//     break;
//     default:
//         console.log("not available")

// }

// // q5 Create a program that gives discounts based on age:(use nested ternary)

// let age = 10
// age < 18 ? console.log("15% discount") : age > 18 && age < 60 ? console.log("20% discount") : age > 60 ? console.log("30% discount") : console.log("no discount")

// // q6 Create a program that calculates tax based on vehicle type:(use switch)

// let vehicle = "electric";
// switch (vehicle) {
//   case "bike":
//     console.log("5000 tax");
//     break;
//   case "car":
//     console.log("10000 tax");
//     break;
//   case "truck":
//     console.log("20000 tax");
//     break;
//   case "electric":
//     console.log("no tax");
//     break;
//   default:
//     console.log("invalid vehicle");
// }


// // q7 Create a program that evaluates student performance based on marks and attendance:(use else if)

// let marks = 77
// let attendence = 88
// if(marks >= 80 && attendence >= 75){
//     console.log("excellent")
// } else if(marks >= 60 && attendence >= 60){
//     console.log("good")
// } else if(marks >= 40 && attendence >= 50){
//     console.log("average")
// } else {
//     console.log("poor")
// }
