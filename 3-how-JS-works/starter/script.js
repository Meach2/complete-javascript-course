///////////////////////////////////////
// Lecture: Hoisting ******************

//Function declaration
calculateAge(1965)
function calculateAge(year) {
  console.log(2016 - year);
}

calculateAge(1990);
//The code is stored in the variable object prior to the code executing... So the variable object defines the function prior to executing the code meaning you can run it above or below its initial definition.  Only works for functions declarations.

//retirement(1990);
var retirement = function(year) {
  console.log(65 - (2016 - year));
}

//The code does now allow the function to execute because it is a function expression and not a function declaration.


// VARIABLES ***************
console.log(age);
var age = 23;
console.log(age);

//In the creation phase of the variable object what happens is that the code is scanned for variable declarations then the variables are set to undefined.  Order of variable object declaration implies the variable will be known after its expression.

function foo() {
  var age = 65;
  console.log(age);
}
// the age is stored within the function object foo, thus gets defined by the object definition.  Reads as 65.

foo();
console.log(age);
//The age is stored within the GLOBAL definition thus it gets the age 23 from above.








///////////////////////////////////////
// Lecture: Scoping
//Scoping asks where can we access a certain variable?
//Each new function creates a scope.  This defines where a function or variable is accessible.
//LEXICAL SCOPING is when another function gets access to the scope of the outer function(PARENT FUNCTION)
// First scoping example

/*  // global scope
var a = 'Hello!';
first();
// first(scope) [vo1 + voglobal]
function first() {
    var b = 'Hi!';
    second();
//second() scope [vo2 +vo1 +VOglobal]
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
/*
calculateAge(1985)
function calculateAge(year) {
  console.log(2018 - year);
  console.log(this);
}
*/
var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
}

john.calculateAge();

var mike {
  name: 'mike',
  yearOfBirth: 1984,
};
// HOW TO FUNCTION BORROW:
mike.calculateAge = john.calculateAge;
mike.calculateAge();
