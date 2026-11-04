# JavaScript DOM Manipulation Project

A beginner-friendly project built using HTML, CSS, and JavaScript to understand the fundamentals of DOM (Document Object Model) manipulation and event handling.

Users can:

- Click on colored boxes to change their background colors.
- Enter their name in the input field.
- Click the Submit button to display a personalized greeting message.

## Features

- Dynamic Background Colors: Click on any of the four boxes to change its - background color.
- Personalized Greeting: Enter your name and receive a personalized greeting.
- Input Validation: Prevents empty or whitespace-only submissions.
- DOM Manipulation: Dynamically updates HTML elements using JavaScript.
- Event Handling: Handles user interactions through click events.

## Technologies Used

- HTML5 – Structure of the webpage.
- CSS3 – Styling and layout.
- JavaScript – DOM manipulation and event handling.

## Learning Objectives

- Understand how JavaScript interacts with HTML elements.
- Learn how to select and manipulate DOM elements.
- Understand event handling and user interactions.
- Dynamically modify CSS properties using JavaScript.
- Handle user input and perform basic validation.

## Issues & Solutions

1. Handling Multiple Boxes

Issue: Initially, I wrote separate JavaScript code for each box using individual click event handlers. This resulted in repetitive code and made the implementation less efficient.

Solution: Used querySelectorAll() to select all boxes and forEach() to iterate through them. This allowed me to handle click events for all boxes using a single block of code, making the JavaScript cleaner, shorter, and more maintainable.

What I learned: How to use forEach() to reduce code repetition and handle multiple DOM elements efficiently.
