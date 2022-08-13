// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: It will split each individual character and have a comma in between them. For example: E,c,h,o .... and so on.
// b) Verify and explain:[
//   'E', 'c', 'h',
//   'o', ' ', '2',
//   '0', '2', '2'
// ]

// I was correct in the fact that it split each value and seperated them by a comma but I was incorrect because it put them into an array.



// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: It will return undefined
// b) Verify and explain: It returned undefined because there is no return inside the function so the function doesn't know what to do with anything inside the greeter()


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: it will log an array with each value multiplied by 2
// b) Verify and explain: Output: [ 8, 10, 12, 14, 16 ].  Map method takes an array and changes the value at each index by multiplying it by 2 and outputing a new array with the same length of the original.


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer:It will only show numbers that are odd in an array
// b) Verify and explain: Output: [ 11, 13, 15 ]. It ouputed all the odd numbers in an array because we used the filter method to not use any number that is equivalent to 0 when using the Modulo method and only ouput the other numbers.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: It will output the string Javascript
// b) Verify and explain: Output: "Javascript".  The reason for this is because this is a javascript class that uses the console.log() is going to find the index of 0 in the first array with the key pair languages.  If they would of done console.log(myCodyingSkills.frameworks[0]) then the return string would be "React"


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: I think it will output George echo and 2022 in an array
// b) Verify and explain: Output: Learn { student: 'George', cohort: 'Echo', year: 2022 }.  You made a new var learnStudent which is the class Learn and since the parameter is name you had the arguement "George" so when you log it this.student = name now says: student = "George" since that was the arguement and the parameter for student was name which was defined above in constructor.