# Zarina Shynbolatova - Personal Portfolio

## Live website

[https://shynbolatovazarina.github.io/iwamad-sis1-portfolio/]
(https://shynbolatovazarina.github.io/iwamad-sis1-portfolio/)

## About the website

This is the website I made on the course of web development. It concludes a  page with sections: About Me, Projects and Contact. It is made by HTML, CSS and JavaScript tools. It also shows my previous three projects from the course, additionally has a light and a dark theme, at the end the contact form checks the input with validation code written in JavaScript.

## Design decisions

1. **Layout.** On a phone everything sits nice, you can scroll from bottom to top. On wider screens the page changes so the photo moves next to the About Me text, and the three projects sit side by side moreover they can be compared together
2. **Colours.** I used one indigo colour, the one on my Week 2 profile card, together with neutral grey. All colours, font sizes and spacings are CSS variables, so the dark theme only needs a new set of values and a single `data-theme` attribute switches the whole page
3. **After testing on a phone.** At 375px the header has two rows, so it covered about a sixth of the screen while scrolling. I made the header scroll away on phones and keep it fixed only from 768px up.