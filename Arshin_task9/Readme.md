# CSS Laundry Service – Interactive Buttons

## Project Description

This project is a responsive laundry service webpage created using HTML and CSS.
The project demonstrates CSS transforms and transitions without using JavaScript or Bootstrap.

## Files Included

    - index.html – Contains the webpage structure.
    - style.css – Contains all styling, responsive design, transitions, and transformations.
    - Readme.md – Contains project information and implementation details.

## Features

1) Responsive Navigation Bar

    The desktop navigation contains:

        - Home
        - Service
        - About Us
        - Contact Us
        - Username button

    The navigation changes for mobile devices using CSS media queries.

2) CSS Hamburger Menu

    The hamburger menu is displayed only on smaller screens.
    The hamburger menu is hidden by default on desktop and tablet screens.

3) CSS :focus Pseudo-Class

    JavaScript is not used to open the hamburger menu.
    The menu is displayed when the hamburger button receives focus:
    The + selector is the adjacent sibling combinator. It selects .menu-list, which is immediately after the hamburger button.

4) Smooth Hamburger Menu Transition

    The hamburger menu uses CSS transitions:
    menu-list display none change to visibility = 0 for using transition and transform for smooth and ease transition of humburger.
    This creates a smooth fade and slide-in animation.

5) Interactive Username Button

    The username button changes its appearance when the user hovers over it.

6) Interactive Booking Button

    The booking button uses the CSS transform property.
    When the user hovers over the button:
        - The button becomes larger using scale().
        - The button rotates using rotate().
        - The animation is made smooth using transition.

7) Responsive Design

    The project uses CSS media queries at two breakpoints.
        - Mobile
        - Tablet

## Technologies Used

    - HTML5
    - CSS3
    - CSS Transforms
    - CSS Transitions
    - Font Awesome

CSS Concepts Demonstrated

This project demonstrates:

    - display: flex
    - @media
    - :hover
    - :focus
    - transform
    - scale()
    - rotate()
    - translateX()
    - transition
    - opacity
    - visibility
    - Adjacent sibling selector +
    - Responsive units such as vw, vh, %, and rem

## Conclusion

This project demonstrates how CSS alone can be used to create a responsive webpage with interactive elements. It specifically demonstrates CSS transforms and transitions for button interaction.
