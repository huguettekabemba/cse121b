/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myname = "huguette";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
task2.html.querySelector('#name');

// Step 3: declare and instantiate a variable to hold the current year
let year = 2022;

// Step 4: place the value of the current year variable into the HTML file
task2.html.querySelector('year');

// Step 5: declare and instantiate a variable to hold the name of your picture
let profil = "photo";

// Step 6: copy your image into the "images" folder
let profil = "images/hug.jpg";
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
images.querySelector('img').src = 'images/hug.jpg';



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let foods = ["salad", "mangojus", "butter", "meat"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML= foods;

// Step 3: declare and instantiate a variable to hold another favorite food
let food = "pasta";

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(food);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML= foods;

// Step 6: remove the first element in the favorite foods array

foods.shift();
// Step 7: repeat Step 2
document.querySelector('#food').innerHTML= foods;

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML= foods;


