/////////////////////////////
// JS PRACTICE AND EXAMPLES//
/////////////////////////////

//////// LOOPS ////////

// This for loop prints 1 to 5
// "var i = 0" is the initial value of i at the first step of the loop
// "i < 5" is the end the end condition; we'll stop once i gets to 4
// "i++" is how we should transform i at each stage of the loop

// for (var i = 0; i < 5; i++) {
//   console.log(i+1); // we want 1 to 5, not 0 to 4
// }


// Here's a while loop that does the same thing
// var i = 0;
// while (i < 5) {
//   console.log(i+1);
//   i++;
// }

//////// SCOPE ////////

// var x;
// function defineLocal() {
//   var x = "I'm defined in the local scope of the defineLocal function";
//   console.log("x = " + x);
// }
// defineLocal(); // will be defined
// console.log("x = " + x); // will be undefined


// function defineGlobal() {
//   x = "I'm defined in the global scope";
//   console.log("x = " + x);
// }
// defineGlobal(); // will be defined
// console.log("x = " + x); // will also be defined

//////// NAMED VS ANONYMOUS FUNCTIONS ////////

// This is a named function
// function sam() {
//   console.log("I am Sam. I am Sam. Sam I am.");
// }
// sam();


// This is an anonymous function that we've assigned to a variable
// var horton = function() {
//   console.log("I meant what I said, and I said what I meant.");
// }
// horton();


// This is an anonymous function
// (function () {
//   console.log("Oh, the places you'll go!");
// })();

//////// CALLBACKS ////////

// function first(callback) {
//   console.log("I will print first");
//   callback();
// }

// function second() {
//   console.log("I will print second");
// }

// first(function(){
//   console.log("I will print second");
// });

// first(second);

//////// CLOSURES ////////

// function outer() {
//   var a = "I'm defined in 'outer'";
//   function inner() {
//     var b = "I'm defined in 'inner'";
//     console.log(a);
//     console.log(b);
//   }
//   inner();
// }
// outer();

