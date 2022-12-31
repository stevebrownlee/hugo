---
title: "Displaying Tribute"
weight: 12
---

In this chapter, you are going to practice iterating the items in arrays again. This time, however, you will be writing a `for..of` loop **inside** another `for..of` loop.

This is called a nested loop.

## Learning Objectives and Competencies

At the end of this chapter you should be able to...

* Iterate the items in an array with a `for..of` loop.
* Correctly describe the syntax and operation of a `for..of` loop.
* Identify different block scopes created by `for..of` loops.
* Describe the scope of variables.

## Algorithm

Here is a visual representation of the algorithm that you will implement for this chapter.

{{< mermaid >}}
graph TB
  A[Iterate Queens] -->|Each queen...| B[Iterate Tributes]
  B --> C{Is tribute for me?}
  C -->|Yes| D[Display tribute message]
  C -->|No| E[Look at next item]
{{< /mermaid >}}

## Year-End Royal Inventory

This first video talks about nested loops, and why that logic is needed for this chapter. Once you are done watching it, write the same code in your `main.js` module.

<a href="https://watch.screencastify.com/v/kGLzdJaGEaQufUSqThU9" target="_blank" rel="noopener"><img src="../../../../images/video-play-icon.gif" class="videoButton" /></a>

The next video walks through how to use the power of the debugger to help you determine what logic you need to write. Then it explains how to use an `if` statement to check if two values are the same, and if so, run some conditional logic.


Once you are done watching it, write the same code in your `main.js` module.

<a href="https://watch.screencastify.com/v/hpBX2f5IJZab30CpP8cy" target="_blank" rel="noopener"><img src="../../../../images/video-play-icon.gif" class="videoButton" /></a>
