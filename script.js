// Que-1
// let password = prompt("Enter your pasowrd");
// let confirmPassword = prompt("Confirm your pasword")
// function passwordMatch(){
//     if(password===confirmPassword){
//         console.log("Password Matched. Password validation Successful.")
//     }
//     else{
//         console.log("Password didn't match. Password validation unsuccessful")
//     }
// }

// passwordMatch();

// Que-2
// calculator using switch
// let result = "";
// let operator = prompt("enter the mathemaical operator among +, -, /, * ");

// let num1 = Number(prompt("Please write the first number"));
// let num2 = Number(prompt("Please write the second number"));

// switch(operator){
//     case "+":
//     result = num1 + num2
//     console.log(`${num1} + ${num2} = ${result}`);
//     break;
    
//     case "-":
//     result = num1 - num2
//      console.log(`${num1} - ${num2} = ${result}`);
//     break;

//     case "*":
//     result = num1 * num2    
//     console.log(`${num1} * ${num2} = ${result}`);
//     break;

//     case "/":
//     result = num1 / num2
//     console.log(`${num1} / ${num2} = ${result}`);
//     break;

//     default:
//     console.log("Kindly enter the existing operator")
// }

// Que-3
// printing color using switch statement

// let color1 = prompt("what is your color1")
// let color2 = prompt("what is your color2")

// switch(color1,color2){
//     case "red":
//     case "blue":
//     console.log("purple")
//     break;

//     case "red":
//     case "yellow":
//     console.log("orange")
//     break;

//     case "blue":
//     case "yellow":
//     console.log("green")
//     break;

//     default:
//     console.log("Invalid color combination")
// }

// Que-4
// Max Marks using ternary operator

// let marks = [20,30,40,80,50];
// let maxMarks = marks.reduce((a,b)=> a>b?a:b);
// console.log(maxMarks);


// Que-5
// user's first name capitalized

// let user = prompt("what is your name")

// let firstChar = user.slice(0,1);
// let firstCharlower = firstChar.toLowerCase();

// let uppercasefirstchar = firstChar.toUpperCase();


// let restChar = user.slice(1,user.length)


// let restlowercase = restChar.toLowerCase()


// console.log((firstChar = firstCharlower)? uppercasefirstchar + restlowercase :user)

// Que-6 Count Vowel

// function countVowel(name){
//     let count = 0;
//     let vowels = ["a","e","i","o","u"];
//    for(let i=0; i<name.length; i++){
//     if(vowels.includes(name[i].toLowerCase())){
//         count++
//     }
//    }
//    return count;
// }

// let nameVowel = "Asif";
// let checkVowel = countVowel(nameVowel);
// console.log(checkVowel);


// que-7
// we will use set object to remove duplicates
// let cart = ["shirt","paint","belt","shirt","paint","shoes"]
// // ... refer to spread operator which will convert set into array
// let cart2 = [...new Set(cart)]; 
// console.log(cart2);

// Que-9 check divisibility

// let array = [1,2,3,4,5,6,7,8,9];
// for(let i =0; i<array.length; i++){
// if(array[i]%3 === 0 && array[i]%2 !==0){
//     console.log(array[i])
// } 
//     else{
//         continue;
//     }
// }


// Que-10 Double item in cart

// let cart = [1,2,3,4,5];


// let fixCartBug = (cart)=>{
//     for(let i =0; i<cart.length; i++){
//         cart[i]*=2;
//     }

//     return cart;
// }

// // before debug cart
// console.log(cart);
// // after debug cart
// console.log(fixCartBug(cart));


// Que-11 Temprature using function :

// // celsius to Fahrenhite 
// function celsiusToFahrenheit(celsius) {
//   var fahrenheit = (celsius * 9/5) + 32;
//   return fahrenheit;
// }

// // Fahrenhhite to Celsius
// function fahrenheitToCelsius(fahrenheit) {
//   var celsius = (fahrenheit - 32) * 5/9;
//   return celsius;
// }

// console.log(celsiusToFahrenheit(20));
// console.log(fahrenheitToCelsius(100));

// // Que - 12 Car Rent Cost

// const economyCar = 4000;

// const midsizeCar = 10000;

// const luxuryCar = 20000;

// // economy Car
// function RenteconomyCar(days){
//  let economyCarCost = economyCar*days;
//  return economyCarCost;
// }

// // Mid size car
// function RentMidsizeCar(days){
//   let midSizeCarCost = midsizeCar*days;
//   return midSizeCarCost;
//  }

//  // Luxury Car
//  function RentLuxuryCar(days){
//   let LuxuryCarCost = luxuryCar*days;
//   return LuxuryCarCost;
//  }

//  console.log(RenteconomyCar(10));
// console.log(RentMidsizeCar(12));
// console.log(RentLuxuryCar(5));

// //Que-13  bill by dishes

// let costOfDish = [10,20,30,40,50];
// let totalPerson = 5;

// function costOfTotalBill(costOfDish,totalPerson){
//    const TotalBill = costOfDish.reduce((prev,curr)=>prev+curr,0
//     )

//     let billByPerPerson = TotalBill/totalPerson;

//     return{
//         TotalBill:TotalBill,
//         billByPerPerson:billByPerPerson
//     }
// }

// let Bill = costOfTotalBill(costOfDish,totalPerson);
// console.log(Bill);
// console.log("Total-Bill " + Bill.TotalBill)
// console.log("Bill by per person " + Bill.billByPerPerson)

// // Que-14 Bill with unit and quantity

// const cart = [
//   { name: "Item 1", price: 10.99, quantity: 2 },
//   { name: "Item 2", price: 5.99, quantity: 3 },
//   { name: "Item 3", price: 2.49, quantity: 5 }
// ];

// // calculate total cost using arrow functions
// const getTotalCost = (cart) => cart.reduce((total, item) => total + (item.price * item.quantity), 0);

// // call the function to get the total cost
// const totalCost = getTotalCost(cart);

// console.log(`Total cost: $${totalCost.toFixed(2)}`); // output: Total cost: $49.89

// // Que-15 Discount Percentage

// const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
//   const discount = originalPrice - discountedPrice;
//   const discountPercentage = (discount / originalPrice) * 100;
//   return discountPercentage.toFixed(2);
// };

// // Example usage
// const originalPrice = 50;
// const discountedPrice = 40;

// const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
// console.log(`Discount percentage: ${discountPercentage}%`);
// Output: Discount percentage: 20.00%


// Que-16 Random Number

// const randomNumber = ()=>{
//   return Math.floor(Math.random()*100 + 1);
// }

// console.log(randomNumber());

// Que-17 Bank application 

// const customerAccount = {
//   name: "John Smith",
//   balance: 1000,

//   deposit: function(amount) {
//     this.balance += amount;
//     console.log(`Deposit of ${amount} successful. New balance is ${this.balance}.`);
//   },

//   withdraw: function(amount) {
//     if (this.balance < amount) {
//       console.log(`Withdrawal of ${amount} failed. Insufficient balance.`);
//     } else {
//       this.balance -= amount;
//       console.log(`Withdrawal of ${amount} successful. New balance is ${this.balance}.`);
//     }
//   }
// };

// // Example usage
// customerAccount.deposit(500);
// customerAccount.withdraw(2000);
// customerAccount.withdraw(800);

// Que-18 Change Text

// let btn = document.getElementById("button");
// let heading = document.getElementById("main-heading");
// btn.addEventListener("click",()=>{
//   if(heading.textContent=="The most affordable learning platform"){
//    heading.innerText = "PW Skills";

//   } else{
//     heading.innerText = "The most affordable learning platform";
//   }

//   })

// Que-19 Password validator

// const form = document.getElementById('login-form');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const errorMessage = document.getElementById('error-message');

// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from submitting

//   // Check if the email is valid
//   if (!emailInput.value.includes('@')) {
//     errorMessage.textContent = 'Invalid email or password!';
//     errorMessage.style.color = 'red';
//     return;
//   }

  
//     // Check if the password is valid
//     if (passwordInput.value.length < 8) {
//       errorMessage.textContent = 'Invalid email or password!';
;
//       errorMessage.style.color = 'red';
//       return;
//     }

//     // If the input is valid
//     errorMessage.textContent = 'Valid email and password!';
//     errorMessage.style.color = 'green';
//   });



// Que-21 TODO LIST

// // Get references to the input field, button, and list
// const todoInput = document.getElementById("todo-input");
// const addTodoButton = document.getElementById("add-todo");
// const todoList = document.getElementById("todo-list");

// // Add an event listener to the button that adds a new TODO item to the list
// addTodoButton.addEventListener("click", function() {
//   // Get the user's input from the input field
//   const todoText = todoInput.value;
  
//   // Create a new list item element and set its text content to the user's input
//   const newTodoItem = document.createElement("li");
//   newTodoItem.textContent = todoText;
  
//   // Add the new list item element to the list
//   todoList.appendChild(newTodoItem);
  
//   // Clear the input field
//   todoInput.value = "";
// });


// Que-22

// const progressBar = document.getElementById('progress-bar');
// const windowHeight = window.innerHeight;
// const fullHeight = document.body.clientHeight;

// window.addEventListener('scroll', () => {
//   const distance = window.scrollY;
//   const progress = (distance / (full))})
// Que-23
// let btn = document.getElementById("button");


// const randomColor = ()=>{
//     let value = "0123456789ABCDEF"

// let color ="#";
//     for(let i = 0; i<6; i++){
//         color+=value[Math.floor(Math.random()*16)];
//     }
//     return color;

// }


// function changeColor(){
//     document.body.style.backgroundColor = randomColor();
// }

// btn.addEventListener("click",changeColor)

// Que-24

// const paragraph = document.getElementById('my-paragraph');
//       const words = paragraph.innerText.split(' ');

//       for (let i = 0; i < words.length; i++) {
//         if (words[i].length > 8) {
//           const span = document.createElement('span');
//           span.innerHTML = words[i];
//           span.classList.add('highlight');
//           words[i] = span.outerHTML;
//         }
//       }

//       paragraph.innerHTML = words.join(' ');

// Que-25

// let myImage = document.getElementById("image")

// let prev = document.getElementById("previous");

// let next = document.getElementById("next")

// let imageSources = ["https://images.pexels.com/photos/7036557/pexels-photo-7036557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/6633393/pexels-photo-6633393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/12422389/pexels-photo-12422389.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"]

// let currentindex = 0;

// next.addEventListener("click",()=>{
//     currentindex+=1;
//     myImage.src = imageSources[currentindex];
// })
// prev.addEventListener("click",()=>{
//     currentindex-=1;
//     myImage.src = imageSources[currentindex];
// })

