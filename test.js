//BMI Calculator
// var weightKG = prompt("Enter the weight in KG?");
// var heightM = prompt("Enter the height in meter?");
// function bmiCalculate(weight,height){
//   var bmi = (weight)/Math.pow(height,2);
//   return Math.floor(bmi);
// }

// console.log(bmiCalculate(weightKG,heightM));


// Calculate Love Percentage
// let person1 = prompt("Enter name of Boy");
// let person2 = prompt("Enter name of Girl");
// let n = Math.random();
// n = Math.floor((n*100)+1);
// alert("Your love percentage is "+ n +"%.");

//To Check Leap Year
// var inputYear = prompt("Check wheather the entered year is leap or not?");
// function checkLeapYear(inputYear){
//     if((inputYear%4)===0){
//         if((inputYear%100)===0){
//             if(inputYear%400===0){
//                 return "Leap Year"
//             }
//             else{
//                 return "Not Leap Year";
//             }
//         }
//         else{
//             return "Leap Year";
//         }
//     }
//     else{
//         return "Not Leap Year";
//     }
// }
// alert(checkLeapYear(inputYear));

//To Check Guest List And Welcome them
// let guestList = ["Subash","Unnat","Gaurav","Deepson","Prakash","Puntu","Solta"];
// let guestName = prompt("Your goodname please?");

// function checkGuestName(guestName){
//     let checkGuest = guestList.includes(guestName);
//     if(checkGuest){
//         return "Welcome to the party Master "+guestName.toUpperCase();
//     }
//     else{
//         return "Sorry to say that you are not invited!!!";
//     }
// }
// alert(checkGuestName(guestName));

//FizzBuzz Problem solution
// var output = [];
// var i = 1;
// function fizzBuzz(){
//     while(i<=100){
//         if(i%3===0 && i%5===0){
//             output.push("FizzBuzz");
//         }
//         else if(i%3===0){
//             output.push("Fizz");
//         }
//         else if(i%5===0){
//             output.push("Buzz")
//         }
// 
//         else{
//              output.push(i)
//         }
//         i++;
//     }
//     console.log(output);
// }
// fizzBuzz();
//

// let count = 1;
// let bottlesNumber = 99;
// function bear(){
//     while (count<=bottlesNumber){
//         if (count==99){
//             return bottlesNumber + "bottles of beer on the wall One-hundred bottles of beer,Take one down Pass it around " + (bottlesNumber-1)+" bottles of beer on the wall";
//         }
//     }
//      count++;
// }
// console.log(bear());

// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }



// let output = [];

// function fibonacciGenerator(n){
//     for(let i=0 , i<5,i++){
//         if(n === 1 ){
//             return output.[push[i];
//         }
//         else if(n===2){
//             return output.push[i];
//         }
//         else{
//             result = n + (n-1);
//             return output.push(result);

//     }
// }
// console.log(fibonacciGenerator(5));
//   }


//Normal object
// var houseKeeper = {
//         name : "Prakash",
//         age : "22",
//         workExperience : "2 years",


// }

// Constructor Function

// function HouseKeeper(name,age,workPermit,workExperience,Languages ){
//         this.name = name;
//         this.age = age;
//         this.workPermit = workPermit;
//         this.workExperience = workExperience;
//         this.languages = Languages;
//         this.doClean = function(){
//                 alert("Cleaning in progress");
//         }

// }

// var houseKeeper = new HouseKeeper("Ruza",21,"true",2,['English','Nepali']);

//
// document.addEventListener('keydown' ,press);
//
// function press(){
//         alert("key pressed");
// }
