// ASSESSMENT 2: Coding Practical Questions with Jest

// describe("stressed", () => {
//     it ("create a string that returns relax if stressed and keep going if not" ,() => {
//         expect(stressed("yes")).toEqual("relax")
//         expect(stressed("no")).toEqual("keep going")
//     })
// })




// const stressed = (string) => {
//     if (string === "yes"){
//         return "relax"
//     }else{
//         return "keep going"
//     }
// }




// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------Replaced the Instructor Example With the Template

// // a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {
//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("returns a string that says hi", () => {
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(hello()).toEqual("hi");
//     });
//   });

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.


// a) Create a test with expect statements for each of the variables provided.


const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divThree", () => {
    it("determines if the number is divisible by 3 or not and tells you", () => {
      expect(divThree(object1.number)).toEqual(`15 is divisible by three`);
      expect(divThree(object2.number)).toEqual(`0 is divisible by three`);
      expect(divThree(object3.number)).toEqual(`-7 is not divisible by three`);
    });
  });


//   divThree
//     ✕ determines if the number is divisible by 3 or not and tells you (2 ms)

//   ● divThree › determines if the number is divisible by 3 or not and tells you

//     ReferenceError: divThree is not defined

// b) Create the function that makes the test pass.

// Psuedo Code
// Create a function named divThree
// Input: take each variable and use the Modulo Method and see if its divisible by three (% 3)
// Output: will return with a string telling you if the number is divisble by three or not


const divThree = (number) => {
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
