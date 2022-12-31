---
title: "Queen Functions"
weight: 6
---

## Learning Objectives and Competencies

At the end of this chapter you should be able to...

* Describe the purpose of a function in software
* Identify a parameter in a function definition
* Describe the purpose of a parameter
* Identify where a function in invoked
* Identify an argument
* Describe what purpose an argument serves
* Describe what a function returns


## Setup

In your terminal, run the following commands. These create a directory, and a file in that directory for the code you will write in this chapter.

{{< highlight shell "linenos=false" >}}
cd ~/workspace
mkdir majesty
cd majesty
touch main.js
code .
{{< / highlight >}}

## First Function

Here is an example of a function with a parameter. A function can be invoked as many times as needed. If there is a parameter defined, then a value _(a.k.a argument)_ must be provided when the function runs.

Open the `main.js` file in Visual Studio Code and paste the following function into it.

{{< highlight js "linenos=false" >}}
/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}
{{< / highlight >}}

This is a task that you can execute later. It doesn't execute when you define it.

### Invoking a Function

Now that you have a function defined, you can invoke it and pass a string to it as an argument. In this invocation, the argument is the string of "Athena Perez".

Copy pasta the follow code into the `main.js` file below the function definition.

{{< highlight js "linenos=false" >}}
const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)
{{< / highlight >}}

Next, go to your terminal and run the following command.

{{< highlight shell "linenos=false" >}}
node main.js
{{< / highlight >}}

And you should see the following string in the output.

{{< highlight shell "linenos=false" >}}
"Hail Her Majesty, Athena Perez."
{{< / highlight >}}

## Another Queen

Copy pasta the follow code into the `main.js` file below the function definition. In this invocation, the argument is the string of "Charisse Ford".

{{< highlight js "linenos=false" >}}
const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)
{{< / highlight >}}

Run the code again in this terminal and you will see the output of the function being invoked three times.

{{< highlight shell "linenos=false" >}}
"Hail Her Majesty, Athena Perez."
"Hail Her Majesty, Charisse Ford."
"Hail Her Majesty, Jenna Solis."
{{< / highlight >}}


## The Queens in Your Life

Now invoke the function a couple more times, passing in arguments representing the queens in your life. Make sure you `console.log()` the string that the function returns.

Make sure you run the following command in your terminal to execute your code.

{{< highlight shell "linenos=false" >}}
node main.js
{{< / highlight >}}
