# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is a genderic input for a function while the arguement is what the function will be replacing the generic value in the parameter

Researched answer: After researching, an arguement is a value declared within the function itself while a parameter is the variables that are defined when a function is declared.  So for example 

```Javascript
const myFunc = (num1, num2) =>{
    return num1 + num2
}
console.log(myFunc(3, 4))
```
The parameters are the values num1 and num 2 because they are being defined when the function is declared.  Where as the numbers 3 and 4 are the arguments because they are being declared inside myFunc() function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() method takes in three predefined parameters which are value, index, and array.  The only required parameter is the value paramter, while the other two index and array a completely optional

Researched answer: The .map() after researching takes in three predetermined parameters which are value of current element, the index of current element, and the array.  The only required parameter you need to ensure .map() will function properly is the value parameter.  The other two are completely optional but may help if to do certain things that only using the value parameter will not do.

3. What is the difference between map and filter?

Your answer: Map takes in an array and does its best to output an array of the same length.  While filter take in an array and will output an array that is smaller

Researched answer:The map method creates a new array by essentially changing every value in an array individually while the filter method creates a new array by removing elements that do not meet the requirements of the method.

4. What is the DOM?

Your answer:It stands for Document Object Model

Researched answer: DOM or Document Object Model is an interface that shows how HTML and XML documents are ready by your browser.  It helps programming languages interact with the page, for example it lets javascript modify the page.

5. What is React? Why would you use it?

Your answer: React is a giant library for Javascript. It makes it easier to modify and build webpages because it breaks it down into smaller components.

Researched answer: Reach is a Javascript library that web developers use to build webpages, mobile webpages, and even mobile phone applications. Its a very popular language and is very easy to work in since it breaks it down to smaller components to work on.  When finished you can bring them all together and which makes it extremely scalable.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I think that hoisting is a way for you to bring up information or data from other parts of the code. I'm not confident on my answer but I will look it up and better my knowledge.

Researched answer:After research it is the process that an interpreter will move the declaration of a function, variable or even classes and move them to the top of their scope before they execute any of the code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: It is an informal way to have an explanation of code or software from the point of view of the end user.

2. Spread operator:The spread operator is a way to take an array and essentially spread them out to each of their individual element and not inside of an array anymore.

3. React props: React props are arguements taht are passed inside react components and are passed via HTML attributes.  

4. Conditional rendering:It is a way to encapsulate certain behavoirs in unique components and then you can render some of them depending on what sate your application is in.

5. DOM events:DOM events allow Javascript to assign different handlers to different values in an HTML document which will later let the code find certain phrase or aka handlers.