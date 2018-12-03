/*  ********************************
*  Variables and data types
*/
/*
var firstName = 'john';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);

var job = 'Teacher';
console.log(job);
// variable naming rules here
var $3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/





/* *************************************
*Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher';
 isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 //Variable mutation

 age = 'twenty eight';
 job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/





/***********************************************
* Basic Operators
*/


 /*
ageJohn = 28;
ageMark = 33

var year, yearJohn, yearMark;
now = 2018;
yearJohn = now - 28;
yearMark = now - 33;
console.log(yearJohn, yearMark);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/





 /**************************
*Operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2
console.log(average);

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators

x *= 2;
console.log(x);
x += 10;
console.log(x);
*/

// CODING CHALLENGE 1
/*
var markMass, johnMass, markHeight, johnHeight;
markMass = 78;
johnMass = 92;
markHeight = 1.69;
johnHeight = 1.95;

var johnBMI = (johnMass / (johnHeight * johnHeight));
var markBMI = (markMass / (markHeight * markHeight));
console.log(markBMI);
console.log(johnBMI);
var bmiLarger = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's? " + bmiLarger)
*/


/*

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon');
};

var isMarried = true;
if (isMarried) {
  console.log(firstName + ' is married');
} else {
  console.log(firstName + ' will hopefully marry soon');
}

*/
/*

var markMass, johnMass, markHeight, johnHeight;
markMass = 78;
johnMass = 150;
markHeight = 1.69;
johnHeight = 1.95;

var johnBMI = (johnMass / (johnHeight * johnHeight));
var markBMI = (markMass / (markHeight * markHeight));
console.log(markBMI);
console.log(johnBMI);
if (markBMI > johnBMI) {
 console.log("Mark's BMI is larger than John's");
} else {
  console.log("John's BMI is larger than Mark's");
};

*/





/*************************************
* Boolean Logic  && = and || = or ! = not
*/

/******************

var firstName = 'John';
var age = 16;
if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (13 <= age < 20) {
  console.log(firstName + ' is a teenager.')
} else if (20 <= age  && age < 30) {
  console.log(firstName + ' is a young man.')
} else {
  console.log(firstName + ' is a man.');

};

*/




/************************************************
*The ternary Operator and Switch Statements
*  : = else  ? = "Is this true"
*/
/*
var firstName = 'John';
var age = 16;
 age >= 18 ?  console.log(firstName + ' Drinks beer.')
 : console.log(firstName + ' Drinks juice.')
// Ternary operator
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
//this is equal to:
/*if ( age >= 18) {
    var drink = 'beer';
} else {
  var drink = 'juice';
}*/

//switch Statements
/*
var job = 'instructor';
switch (job) {
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber.');
    break;
    case 'designer':
    console.log(firstName + ' designs stuff.');
    break;
    default: console.log(firstName + ' does something.');
};
*/
// switch statement conversion

/*var firstName = 'John';
var age = 16;
if (age < 13) {
  console.log(firstName + ' is a boy.');
} else if (13 <= age < 20) {
  console.log(firstName + ' is a teenager.')
} else if (20 <= age  && age < 30) {
  console.log(firstName + ' is a young man.')
} else {
  console.log(firstName + ' is a man.');*/
/*
  var firstName = 'John';
  var age = 21;
  switch (true) {
      case age <13:
        console.log(firstName + ' is a boy.');
        break;
      case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
      case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
        default:   console.log(firstName + ' is a man.');
  };*/





  /**************************************
  * Truthy and Falsy values and equality Operators
  */

  // falsy values:  Undefined, Null, 0, '', NaN.
// truthy values:   NOT falsy values.

/* var height;
height = 23;
if (height || height === 0) {
  console.log('variable is defined');
} else {
  console.log('Variable has NOT been defined');
};

// Equality Operators
if (height == '23') {
  console.log('The == operator does type coercion!');
}*/



 /***********************************************************************
* Coding challenge two
*/
 /*
var johnTeamScore, mikeTeamScore, maryTeamScore;
johnTeamScore = (89 + 120 + 103) / 3;
mikeTeamScore = (116 + 94 + 123) / 3;
maryTeamScore = (97 + 134 + 105) / 3;

if (johnTeamScore > mikeTeamScore && johnTeamScore > maryTeamScore) {
    console.log("John's team wins more on average.");
} else if (mikeTeamScore > johnTeamScore && mikeTeamScore > maryTeamScore) {
    console.log("Mike's team wins more on average than the other two");
} else if (maryTeamScore > mikeTeamScore && maryTeamScore > johnTeamScore) {
    console.log("Mary's team wins more on average( Yeah right )")
} else {
    console.log('They must be tied.');
};
console.log(mikeTeamScore + 'is the average points of Mikes team');
console.log(johnTeamScore + 'is the average points of John team.');
console.log(maryTeamScore + 'is the average points of Mary team.');





 /***********************************************
* FUNCTIONS
 */
 /*
 function calculateAge(birthYear) {
   return 2018 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

 function yearsUntilRetirement(year, firstName) {
   var age = calculateAge(year);
   var retirement = 65 - age;

   if (retirement > 0) {
     console.log(firstName + ' is already retired.')
   };
   console.log(firstName + ' retires in ' + retirement + ' years.');
 };

 yearsUntilRetirement(1990, 'John');
  yearsUntilRetirement(1948, 'Mike');
   yearsUntilRetirement(1969, 'Jane');
*/


/**********************************************************
* Function statements and expressions
*/
//Function declaration
//function whatDoYouDo(job, firstName)


//Function expression
/*
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' Teaches kids.';
    case 'driver':
      return firstName + ' Drives.';
    case 'designer':
      return firstName +  'Designs.';
    default:
      return firstName + ' does something else';
  }
}


console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('driver', 'jane'));
console.log(whatDoYouDo('retired', 'mark'));
*/




/************************************************
* Arrays
*/
/*
// two dfferent ways of calling arrays
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948)
//call john from array names
console.log(names[0]);
//cal all 3 from arrays
console.log(names);
//items in array
console.log(names.length);
//change item in array data (Mutate)
names[1] = 'Ben';
// add item in Arrays
names[3] = 'Mary'
console.log(names);
*/

// Different data types
/*
var John = ['John', 'Smith', 1990, 'Teacher', false];
//push puts an item to the end of the Array
John.push('blue');
//unshift adds an item to the beginning of the array. (For adding a title or something of that sort)
John.unshift('Mr.');

console.log(John);
//pop removes the element from the end
John.pop();
John.pop();
// shift removes first element from the array
John.shift();
console.log(John);
// indexOf returns the position that the input that you define
console.log(John.indexOf(1990));

var isDesigner = John.indexOf('designer') === -1 ? 'John is NOT a designer' :  'John is designer.';
console.log(isDesigner);
*/


/********************************************
* CODING CHALLENGE 3
*/  // Tip calculator
/*
function calculateTip(bills) {
  var percentTip;
  if (bills <= 50) {
    percentTip = .2; }
   else if (50 < bills < 200) {
    percentTip = .15; }
   else if (200 < bills) {
    percentTip = .1; };

  return percentTip * bills;};

var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]),
            calculateTip(bills[1]),
            calculateTip(bills[2])];
var finalValue = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];

console.log(bills, tips, finalValue);
*/



/************************************************
* objects and properties

// an object is defined as a variable- its properties defined by a semicolon and separated by comma.
var john = {
  firstName: 'john',
  lastName: 'smith',
  birthYear: 1990,
  family: ['jane', 'mark', 'bob', 'emily'],
  job: 'teacher',
  isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
// a variable can be set to be equivalent to an objects property then called as an array item from the object.
var x = 'birthYear';
console.log(john[x]);
// john.job = 'designer' is changing johns job to a designer.  objects properties can be changed post code.
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
// new object syntax
var jane = new Object();
jane.firstName = 'jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*******************************************
* Objects and methods
*/
// ONLY OBJECTS HAVE METHODS
/*
var john = {
  firstName: 'john',
  lastName: 'smith',
  birthYear: 1990,
  family: ['jane', 'mark', 'bob', 'emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(birthYear) {
    this.age = 2018 - this.birthYear;
  }
};
//this command is the current object that it is within (in this case john)
console.log(john.calcAge());
// add a method (function) to the john object. doesnt need to be defined due to this command

john.calcAge();
console.log(john);
*/


/*****************************************************
* Coding challenge 4
*/
/****************************************************
var mark = {
  firstName: 'Mark',
  mass: 78,
  height: 1.7,
  calcBMI: function() {
    this.BMI = (this.mass / (this.height * this.height));
    return this.BMI
      }
};
console.log("Mark's BMI is " + mark.calcBMI());

var john = {
  firstName: 'John',
  mass: 90,
  height: 1.9,
  calcBMI: function() {
    this.BMI = (this.mass / (this.height * this.height));
    return this.BMI
      }
};
console.log("John's BMI is " + john.calcBMI());

if (john.BMI > mark.BMI) {
    console.log("John's BMI is larger")}
else if (john.BMI < mark.BMI) {
    console.log("Mark's BMI is larger")}
else if (john.BMI = mark.BMI) {console.log("Same BMI")};
*/


/***************************************************
*  LOOPS AND ITERATION
*/

//~~~~~~~~~~~~~FOR~~~ loop
// line below translates to "I is defined as zero, and condition will run until I < 10.  add one until condition met."
 /* for (var i = 0; i < 10; i++) {
  console.log(i);
}
*/
// course notes:  i = 0, 0 < 10 is true, log i to console, i++
// i= 1, 1 < 10 is true, log i to console, i++
//etc.
// i = 10, 10 < 10 is FALSE, exit the loop!
/*
var john = ['John', 'Smith', 1990, 'designer', false];
for (var i=0; i < john.length; i++) {
  console.log(john[i]);
}


//~~~~~~~~~~~~~WHILE~~~~~ LOOP

while(i < john.length) {
  console.log(john[i]);
  i++;
}
*/
//This while loop does the exact same thing as the for loop.
//Defined as "While I is less than the length of the john array, log I(array number) to console, increment I + 1"


// CONTINUE AND BREAK Statements
/*
var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  // above = if type of john array itration is NOT (!==) a string it will continue(skip next command and repeat command to next)(Will only print strings)
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  // break means that if a NON-STRING is detected it will break the loop and end it all together.
  console.log(john[i]);
*/
//Figure it out in reverse. (looping backwards)
/*
var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = john.length - 1; i > -1; i--) {
  console.log(john[i]);
}
*/


// FINAL CODING CHALLENGE OF SECTION 2:

var john = {
  average: 0,
  fullName: 'John Smith',
  tips: [],
  finalValues: [],
bills: [124, 48, 268, 180, 42],
calcTips: function() {
for (var i = 0; i < this.bills.length; i++) {
  var percentTip;
  var bills = this.bills[i];
  if (bills <= 50) {
    percentTip = .2; }
   else if (50 < bills < 200) {
    percentTip = .15; }
   else if (200 < bills) {
    percentTip = .1; };
    this.tips[i] = bills * percentTip;
    this.finalValues[i] = bills + bills * percentTip;
  }}};
  john.calcTips();
  for (var i = 0; i < john.bills.length; i++) {
console.log('The cost of a john bill is ' + john.bills[i] + ' its tip is ' + john.tips[i] + ' combined it is ' + john.finalValues[i]);
}

var mark = {
  fullName: 'Marky Mark',
  bills: [77, 375, 110, 45],
  tips: [],
  finalValue: [],
  average: 0,
};
var calcTips = function() {
for (var i = 0; i < mark.bills.length; i++) {
  var percentTip;
  var bills = mark.bills[i];
  if (bills <= 100) {
    percentTip = .2; }
   else if (100 < bills < 300) {
    percentTip = .1; }
   else if (300 < bills) {
    percentTip = .25; };
    mark.tips[i] = percentTip * mark.bills[i];
    mark.finalValue[i] = mark.bills[i] + mark.bills[i] * percentTip;
  }};
    calcTips();
    for (var i = 0; i < mark.bills.length; i++) {
    console.log('The cost of a mark bill is ' + mark.bills[i] + ' its tip is ' + mark.tips[i] + ' combined it is ' + mark.finalValue[i]);
    }
    function tipsAvg(tips) {
      var total = 0;
      for (var i = 0; i < tips.length; i++) {
        total = total + tips[i];
      }
return total / tips.length;
}

mark.average = tipsAvg(mark.tips);
console.log('Marks average tip amount is ' + mark.average);
john.average = tipsAvg(john.tips);
console.log('Johns average tip amount is ' + john.average);
if (john.average > mark.average) {
  console.log('John tips more because his nose is shorter')
} else if (john.average < mark.average) {
  console.log('John tips less because his nose is longer')
} else {
  console.log('They tip the same.')
}
