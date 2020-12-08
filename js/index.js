// Your code goes here

// ########## KEYDOWN EVENT ##########
//Display message on keydown event

document.body.addEventListener("keydown", (event) => {
  event.preventDefault();
  alert(`The ${event.key} has been pressed! It's not very effective!`);
});

// ########## MOUSEOVER EVENT ##########
//Changes logo color on mouseover

const zoomIn = document.querySelector("h1");
zoomIn.addEventListener("mouseover", (event) => {
  event.target.style.fontSize = "6rem";
});

// ########## COPY EVENT ##########
//Copy selected content

document.addEventListener('copy', () => {
  alert('Copied!');
});

// ########## CUT EVENT ##########
//Cuts selected content

document.addEventListener('cut', (event) => {
  alert('Cut!');
});

// ########## CLICK EVENT ##########
//changes button styles when clicked

const button = document.querySelector('.btn');

button.addEventListener('click', event => {
  event.target.style.color = "red";
  event.target.style.background = "yellow";
});

// ########## DOUBLE CLICK EVENT ##########
//adds rounding to image borders on double click

const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('dblclick', event => {
  event.target.style.borderRadius = "30%";
});

// ##########  MOUSE OUT EVENT ##########
//1st h2 on page turns purple when mouse stops hovering it

const unHoverHeaders = document.querySelector('h2');

unHoverHeaders.addEventListener('mouseout', event => {
  event.target.style.color = "purple";
});

// ########## MOUSE MOVE EVENT ############
let nav = document.querySelector('nav');

nav.addEventListener('mousemove', event => {
  event.target.style.color = "yellow";
});

// ########## MOUSEDOWN + STOP PROPAGATION ############
const paragraph = document.querySelector('p');
const buttonTwo = document.getElementsByClassName('.btn');

paragraph.addEventListener('mousedown', () => {
  console.log('Hello 01');
});

paragraph.addEventListener('mousedown', event => {
  console.log('Hello 02');
  if (event.buttonTwo == 2) event.stopPropagation();
});

// ########## NAV PREVENT DEFAULT ON LOAD ##########
//prevents nav reloads
const stopNav = document.querySelector('nav');

stopNav.addEventListener('load', event => {
  event.preventDefault();
  console.log('Nav refresh prevented on load');
  alert('Nav refresh prevented on load');
})
