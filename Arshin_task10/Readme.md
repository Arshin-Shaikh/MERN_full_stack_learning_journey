# CSS Laundry Service Animation to Hero Image

## Description

This project is a laundry service landing page created using HTML and CSS.

The main focus of this task is to add a CSS animation to the hero image. The image moves around the hero section and uses scaling effects to create a squeeze and stretch animation.

## Features

1.Navigation Bar

The page contains a navigation bar with:

    - Laundry logo
    - Home
    - Service
    - About Us
    - Contact Us
    - Username button
    - Responsive hamburger menu for smaller screens

2.Hero Section

The hero section contains:

    - Main heading
    - Laundry service heading
    - Description text
    - "Book a service today!" button
    - Laundry service image

3.Button Hover Animation

The booking button has a hover effect using CSS transform.

The button increases in size and slightly rotates when the mouse moves over it.

4.Hero Image Animation

The hero image uses CSS @keyframes animation.

The animation uses:

translate() for movement
scale() for squeeze and stretch
The animation runs continuously

The image moves through different positions:

UP
 ↓
RIGHT
 ↓
DOWN
 ↓
LEFT
 ↓
UP

At certain points the image is squeezed and stretched using different X and Y scale values.

## Responsive Design

Media queries are used to make the page responsive.

The layout changes for smaller screen sizes:

    - Navigation links are adjusted
    - Font sizes are reduced
    - Hero content changes size
    - On very small screens, the hero section changes to a column layout
    - A hamburger menu is displayed

## CSS Animation

The hero image animation is created using @keyframes.

@keyframes orbit {
 0% {
    transform: translate(0,0) scale(1, 1);
  }

  15% {
    transform: translate(16px,0) scale(1, 1.04) ;
  }

  30% {
    transform: translate(16px,12px) scale(1, 1) ;
  }

  45% {
    transform:translate(0,12px) scale(1, 1.04);
  }

  60% {
    transform: translate(0px,0px) scale(1, 1);
  }
  75%{
    transform: translate(16px,12px) scale(1, 1);
  }
  90% {
    transform: translate(0px,12px) scale(0.8, 1.2);
  }
  100%{
    transform: translate(0px,0px) scale(1.2, 0.8);
  }
}

## conclusion

Created as part of the CSS Animation to Hero Image task
