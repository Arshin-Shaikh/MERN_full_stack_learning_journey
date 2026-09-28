# CSS Hamburger Menu in Mobile

## Project Description

This project implements a responsive hamburger menu for mobile devices using only HTML and CSS.

No JavaScript or Bootstrap is used

## Files Included

    - index.html – Contains the HTML structure of the webpage.
    - style.css – Contains all styling, responsive media queries, and hamburger menu functionality.
    - Readme.md – Contains project information and implementation details.

## Features

    - Responsive navigation bar.
    - Desktop navigation links for:
        - Home
        - Service
        - About Us
        - Contact Us
    - Hamburger menu is hidden by default.
    - Hamburger menu is displayed only on mobile screens.
    - Mobile menu is positioned on the right side of the screen.
    - Menu is hidden using display: none by default.
    - The hamburger menu opens using the CSS :focus pseudo-class.
    - No JavaScript is used.
    - No Bootstrap is used.

## CSS Technique Used

- The menu is displayed when the hamburger button receives **:focus**
- The **+ selector** is the adjacent **sibling combinator**, which selects .menu-list because it comes immediately after the hamburger button.
- The hamburger menu is enabled for screens up to 375px: At larger screen sizes, the normal navigation links are displayed and the hamburger menu remains hidden.

## Issue faced / solution

Problem:
    - was trying to use nav-links to come out when bar is focused.
Solution:
    - made a menu-links in html that is hidden for window and teblets.

## Conclusion

Created a Hamburger Menu for Mobile view and learned more about pseudo classes in css and responsive design.
